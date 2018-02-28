;( function( $ ) {

var _clock_;

$( function() {

	if ( $( "#newbie-guide").size() == 1 ) {
		$( "#startWorkBtn" ).click( function( e ) {
			e.preventDefault();

			$( "#newbie-guide" ).remove();
			$( "#cal" ).show();
			init();
		});
	} else {
		init();
	}

});

function init() {

    initProjectColor();

	if ( isIpad() ) {
		$( "<select id=cal-evt-duration></select>" ).change( function( e ) {
			var val = $( this ).val();
			var start = parseInt( $( "#cal-start-time" ).val(), 10 );
			var end = parseInt( val, 10 ) + start;

			start = new Date( start );
			end = new Date( end );
			
			updateTimeDom( start, end );
		}).insertAfter( "#cal-evt-project" );
    }
    
    $( "#cal-evt-wrap" ).bind( "hide", function( e ) {
        var target = $( e.target );
        var el = $( "#cal-evt-content" );

        if ( !isEdit() ) {
            el.data( "data", { "text": el.val() } );
        }
    });

    $( "#cal-evt-cancel" ).click( function( e ) {
        e.preventDefault();

        if( isEdit() ) {
            $( "#cal-evt-wrap" )
                .hide()
                .trigger( "hide" );
                
            $( "#cal" ).fullCalendar( "updateEvent", $( "#cal-evt-wrap" ).data( "event" ) );
        } else {
            $( "#cal" ).fullCalendar( "unselect" );
        }
    });

	$( window ).bind( "resize", function() {
		var h = $( window ).height(),
			t = $( "#cal" ).offset().top,
			height = h - t - 90;
		
		if ( height >= 685 )
			$( "#cal" ).fullCalendar( "option", "height", height);
	});

    initCal();
}

function initCal() {
    $( "#cal" ).fullCalendar({
		axisFormat: "H:mm",
		timeFormat: "H:mm{ - H:mm}",
        editable: true,
        selectable: true,
        selectHelper: true,
		allDayDefault: false,
        unselectCancel: "#cal-evt-wrap",
        allDaySlot: false,
		height: 685,
        firstHour: 9,
        firstDay: 1,

        selectable: window.team.isExpired ? false : true,
        editable: window.team.isExpired ? false : true,

        events: events,
		loading: loading,
		viewDisplay: viewDisplay,
        eventResize: eventResize,
        eventDrop: eventDrop,
		select: select,
        unselect: unselect,
        eventClick: eventClick
    });
}

function events( start, end, callback ) {
    var data = {
        start: start.getTime(),
        end: end.getTime(),
        members: [ profile.guid ],
        projects: []
    }

    $.ajax({
        url: "/worklog/get/",
        dataType: "json",
        type: "POST",
        data: {
            data: $.toJSON( data )	
        },
        success: function( result ) {
            if ( result.success ) {
                var events = [];

                $.each( result.worklogs, function( i , o) {
                    events.push({
                        id: o.guid,
                        title: o.content,
                        start: o.start,
                        end: o.end,
                        projectGuid: o.projectGuid,
                        color: Project.getColor( o.projectGuid )
                    });
                });

                callback( events );
            } else {
                smartMsg({
                    cls: "error",
                    msg: "获取日志失败",
                    duration: 3000
                });
            }
        },
        error: function( jqXHR, eType, error ) {
            /*
            smartMsg({
                cls: "error",
                msg: "获取日志出错",
                duration: 3000
            }); */
            
            throw( error );
        }
    });
}

function loading( isLoading, view ) {
    if ( isLoading ) {
        $( "#cal-evt-wrap" ).hide();

        smartMsg({
            msg: "日志加载中...",
            cls: "notice",
            duration: false
        });
    } else {
        smartMsg( "close" );
    }
}

function viewDisplay( view ) {
    var h = $( window ).height(),
        t = $( "#cal" ).offset().top,
        height = h - t - 90;
    
    if ( height >= 685 )
        $( "#cal" ).fullCalendar( "option", "height", height);
    
    var hasToday = $( "#cal td.fc-today.fc-state-highlight" );
    
    if ( hasToday.size() == 1 ) {
        var cls = hasToday.attr( "class" );
        var num = parseInt( /[0-9]/.exec( cls )[0], 10 );

        setClockIndicator( num );

        _clock_ = setInterval( function(){
            setClockIndicator( num )
        }, 60000 );
    } else {
        clearInterval( _clock_ );
        _clock_ = undefined;
        $( "#fc-clock-indicator" ).hide();
    }
}

function eventResize( evt, dayDelta, minuteDelta, revertFunc, jsEvent, ui, view ) {
    var data = {
            guid: evt.id,
            start: evt.start.getTime(),
            end: evt.end.getTime(),
            content: evt.title,
            projectGuid: evt.projectGuid
        };

    $.ajax({
        url: "/worklog/update/",
        type: "POST",
        data: { data: $.toJSON( data ) },
        dataType: "json",
        error: function( jqXHR, eType, error ) {
            smartMsg({
                cls: "error",
                msg: "调整记录时长失败，请刷新重试"
            });
            
            throw error
        }
    });
}

function eventDrop( evt ) {
    var data = {
            guid: evt.id,
            start: evt.start.getTime(),
            end: evt.end.getTime(),
            content: evt.title,
            projectGuid: evt.projectGuid
        };

    $.ajax({
        url: "/worklog/update/",
        type: "POST",
        data: { data: $.toJSON( data ) },
        dataType: "json",
        error: function( jqXHR, eType, error ) {
            smartMsg({
                cls: "error",
                msg: "调整记录起止时间失败，请刷新重试"
            });
            
            throw error
        }
    });
}

function select( start, end, allDay, jsEvent ) {
    var elemProject = $( "#cal-evt-project" );

    $( "#cal-evt-delete" ).hide();
    $( "#cal-evt-wrap" ).attr( "state", "create" );

    if ( $.cookie( "selected_project_guid" ) != null )
        elemProject.val( $.cookie( "selected_project_guid" ) );

    var projectColor = Project.getColor( elemProject.val() );
    setCalHelperColor( projectColor );

   
    if ( isIpad() ) {
        var halfHours = ( 24 - start.getHours() ) * 2,
            options = "",
            selectedHours = ( end - start ) / 3600000;

        if ( start.getMinutes() >= 10 ) {
            halfHours--;
        }

        halfHours = halfHours > 16 ? 16 : halfHours;

        for ( var i = 0, h, s; i < halfHours; i++ ) {
            h = i*0.5 + 0.5;
            s = h * 3600000;

            options += "<option value="+ s 
                        + (h == selectedHours ? " selected" : "")
                        + ">" + h + "小时</option>";
        }
        
        $( "#cal-evt-duration" ).html( options );
    }	

    updateTimeDom( start, end );

    //input hidden
    $( "#cal-start-time" ).val( start.getTime() );
    $( "#cal-end-time" ).val( end.getTime() );

    //clear content
    $( "#cal-evt-content" ).val( "" );
    updatePosition( $( "#cal div.fc-select-helper" ) );

    //bind project change
    elemProject
        .unbind( "change" )
        .bind( "change", { start: start }, evtProjectChange );

    // bind submit event
    $( "#btn-cal-evt" )
        .unbind( "click" )
        .click( btnSubmitCreate );
}

function unselect( view, jsEvent ) {
    $( "#cal-evt-wrap" )
        .hide()
        .trigger( "hide" );
}

function eventClick( evt, jsEvent, view ) {
if ( !window.team.isExpired ) {
    $( "#cal-evt-delete" ).show();
    $( "#cal-evt-wrap" )
        .attr( "state", "edit" )
        .data( "event", $.extend( {}, evt ) );

    //var offset = $( jsEvent.target ).offset();
    var start = evt.start;
    var end = evt.end;

    if ( isIpad() ) {
        var halfHours = ( 24 - start.getHours() ) * 2,
            options = "",
            selectedHours = ( end - start ) / 3600000;

        if ( start.getMinutes() >= 10 ) halfHours--;

        halfHours = halfHours > 16 ? 16 : halfHours;

        for ( var i = 0, h, s; i < halfHours; i++ ) {
            h = i*0.5 + 0.5;
            s = h * 3600000;

            options += "<option value="+ s
                        + (h == selectedHours ? " selected" : "")
                        + ">" + h + "小时</option>";
        }

        $( "#cal-evt-duration" ).html( options );
    }	
    
    updateTimeDom( start, end );

    $( "#cal-start-time" ).val( start.getTime() );
    $( "#cal-end-time" ).val( end.getTime() );
    $( "#cal-evt-content" ).val( evt.title );
    
    var isProjectDone = false;

    $( "#cal-evt-project option" ).each( function( i, o ) {
        if ( this.value == evt.projectGuid ) {
            $( "#cal-evt-project" ).val( evt.projectGuid );
            isProjectDone = true;
            return
        }
    });

    if ( !isProjectDone ) {
        $( "#cal-evt-project" )
            .append( "<option selected value=" + evt.projectGuid + ">" +
                Project.get( evt.projectGuid ).name + "</option>" );
    }

    updatePosition( $(jsEvent.target) );
    
    //bind project change
    $( "#cal-evt-project" )
        .unbind( "change" )
        .bind( "change", { evt: evt }, evtProjectChange );

    // bind submit event
    $( "#btn-cal-evt" ).unbind( "click" );
    $( "#btn-cal-evt" ).click( function( e ) {
        e.preventDefault();
        
        $( "#cal-evt-content" ).tips( "hide" );

        var target = $( e.target );
        
        btnIndicate( target );
        
        var data = {
            guid: evt.id,
            start: $( "#cal-start-time" ).val(),
            end: $( "#cal-end-time" ).val(),
            duration: $( "#cal-evt-duration" ).val(),
            projectGuid: $( "#cal-evt-project").val(),
            content: $( "#cal-evt-content" ).val()
        };
        
        $.ajax({
            url: "/worklog/update/",
            type: "POST",
            data: {
                data: $.toJSON( data )
            },
            dataType: "json",
            success: function( result ) {
                if ( result.success ) {
                    evt.id = data.guid;
                    evt.title = data.content;
                    evt.start = data.start / 1000;
                    evt.end = result.end;
                    evt.projectGuid = data.projectGuid;
                    evt.color = Project.getColor( data.projectGuid );

                    $( "#cal" ).fullCalendar( "updateEvent", evt );

                    $( "#cal-evt-wrap" ).hide().trigger( "hide" );

                } else {
                    $( "#" + result.target ).tips({
                        content: result.msg,
                        position: "right",
                        color: "red"
                    });
                }
            },
            error: function( jqXHR, eType, error ) {
                smartMsg({
                    cls: "error",
                    msg: "保存出错",
                    duration: 3000
                });

                throw error;
            },
            complete: function( jqXHR ) {
                btnResume( target, { txt: "Cola!" } );
            }
        });
    });    
    
    // bind delete event
    $( "#cal-evt-delete" ).unbind( "click" );
    $( "#cal-evt-delete" ).click( function( e ) {
        e.preventDefault();

        $( "#cal-evt-content" ).tips( "hide" );

        if ( !window.confirm( "删除后不可恢复，确定删除？" ) ) {
            return
        }

        smartMsg({
            msg: "正在删除日志...",
            duration: false
        });

        var data = {
            guid: evt.id
        };

        $.ajax({
            url: "/worklog/delete/",
            type: "POST",
            data: { data: $.toJSON( data ) },
            dataType: "json",
            success: function( result ) {
                if ( result.success ) {

                    $( "#cal-evt-wrap" ).hide();

                    $( "#cal" ).fullCalendar( "removeEvents", evt.id );

                    smartMsg( "close" );
                } else {
                    smartMsg({
                        cls: "error",
                        msg: "删除日志失败"
                    });
                }
            },
            error: function( jqXHR, eType, error ) {
                smartMsg({
                    cls: "error",
                    msg: "删除日志失败"
                });
                
                throw error
            }
        });

    });
}
}

function updatePosition( element ) {
    var offset = $( "#cal" ).offset(),
        calTop = parseInt( offset.top, 10 ),
        calLeft = parseInt( offset.left, 10 ),
        calWidth = $( "#cal" ).width(),
        calHeight = $( "#cal" ).height();

    var	offset = element.offset(),
        blockTop = parseInt( offset.top, 10 ),
        blockLeft = parseInt( offset.left, 10 ),
        blockWidth = element.width(),
        blockHeight = element.height();
        
    var top, left, cls = [];
    

    var deltaTop = blockTop - calTop,
        deltaLeft = blockLeft - calLeft;

    if ( deltaTop < calHeight/2 ) {
        cls.push( "top" );
        top = deltaTop - 20;
    } else {
        cls.push( "bottom" );
        top = deltaTop - parseInt( $( "#cal-evt-wrap" ).height(), 10 ) + 40;
    }

    if (deltaLeft < calWidth/2) {
        cls.push( "left" );
        left = deltaLeft + blockWidth;
    } else {
        cls.push( "right" );
        left = deltaLeft - $("#cal-evt-wrap").width() - 10;
    }

    $("#cal-evt-wrap")
        .css({
            "top": top,
            "left": left
        })
        .attr( "class", cls.join( "-" ) )
        .show();
    
    if ( element.is ( "#cal div.fc-select-helper" ) ) {
        var el = $( "#cal-evt-content" ),
            data;

        if ( data = el.data( "data" ) ) {
            el.val( data.text );
        }
    }

    $("#cal-evt-project").focus();
}

function setClockIndicator( num ){
    var now = new Date(),
        h = now.getHours(),
        m = now.getMinutes(),
        point = h + m / 60,
        w = $( "#cal table.fc-agenda-days th.fc-widget-header" ).eq( 1 ).width();

    $( "#fc-clock-indicator" ).css({
        top: Math.floor( point * 62 ),
        left: num * w + 60,
        width: w,
        display: "block"
    });
}

function updateTimeDom( start, end ) {
    var h = ( end.getTime() - start.getTime() ) / 3600000,
        startM = start.getMinutes(),
        endM = end.getMinutes();

    h = Math.round( h * 100 ) / 100;

    if ( startM < 10 ) {
            startM = "0" + startM;
    } 

    if ( endM < 10 ) {
        endM = "0" + endM;
    }

    $( "#cal-evt-time" ).html(
        "<span class=cal-evt-s2n>时间: "	
        + start.getHours() + ":" + startM + "-"
        + end.getHours() + ":" + endM
        + "</span><span class=cal-evt-due>" + h + "小时</span>"
    );
}

function btnSubmitCreate( e ) {
    e.preventDefault();

    $( "#cal-evt-content" ).tips( "hide" );

    var target = $( e.target );
    
    btnIndicate( target );

    var data = {
        start: $( "#cal-start-time" ).val(),
        end: $( "#cal-end-time" ).val(),
        duration: $( "#cal-evt-duration" ).val(),
        projectGuid: $( "#cal-evt-project" ).val(),
        content: $( "#cal-evt-content" ).val()
    };
    
    $.ajax({
        url: "/worklog/create/",
        type: "POST",
        data: {
            data: $.toJSON( data ) 
        },
        dataType: "json",
        success: function( result ) {
            if ( result.success ) {
                var evt = {
                    id: result.guid,
                    title: $( "#cal-evt-content" ).val(),
                    start: $( "#cal-start-time" ).val()/1000,
                    end: result.end/1000,
                    projectGuid: data.projectGuid,
                    color: Project.getColor( data.projectGuid )
                };
        
                $( "#cal" )
                    .fullCalendar( "renderEvent", evt, false )
                    .fullCalendar( "unselect" );

                $( "#cal-evt-content" ).data( "data", { "text": "" } );
            } else {
                $( "#" + result.target ).tips({
                    content: result.msg,
                    position: "right",
                    color: "red"
                });
            }
        },
        error: function( jqXHR, eType, error ) {
            smartMsg({
                cls: "error",
                msg: "保存出错",
                duration: 3000
            });

            throw error;
        },
        complete: function( jqXHR ) {
            btnResume( target, { txt: "Cola!" } );
        }
    });
}

function isEdit() {
    return $( "#cal-evt-wrap" ).attr( "state" ) == "edit"
}

function evtProjectChange( e ) {
    var projectGuid = $( e.target ).val(),
        projectColor = Project.getColor( projectGuid );

    $.cookie( "selected_project_guid", projectGuid, { expires: 999 } );

    if ( isEdit() ) {
        var calEvent = e.data.evt;
        calEvent.color = projectColor;

        $( "#cal" ).fullCalendar( "updateEvent", calEvent );
    } else {
        setCalHelperColor( projectColor );
    }
}

function setCalHelperColor( color ) {
    $( "#cal div.fc-select-helper, " + 
        "#cal div.fc-select-helper div.fc-event-skin" )
        .css({
            "backgroundColor": color,
            "borderColor": color
        });
}

function initProjectColor() {
    $( "#preview-project-color" ).click( previewProjectColor );
    $( "#apply-project-color" ).click( applyProjectColor );
    $( "#cancel-project-color" ).click( cancelProjectColor );
    $( "#new-feature-project-color" ).show();
}

function previewProjectColor( e ) {
    e.preventDefault();

    var target = $( e.target ),
        projects = Project.getAll(),
        len = Colors.length,
        clientEvents = $( "#cal" ).fullCalendar( "clientEvents" );
    
    $.each( projects, function( i, o ) {
        o.color = Colors[ i % len ]; 

        $( "#nav-sub-project-" + o.guid + " em" )
            .css( "backgroundColor", o.color );
    });

    $.each( clientEvents, function( i, o ) {
        o.color = Project.getColor( o.projectGuid );
        $( "#cal" ).fullCalendar( "updateEvent", o );
    });

    target.remove();
}

function applyProjectColor( e ) {
    var target = $( e.target ),
        projects = Project.getAll(),
        len = Colors.length,
        clientEvents = $( "#cal" ).fullCalendar( "clientEvents" ),
        data = [];

    target.after ( "<img style='margin-right: 20px; margin-bottom: 1px;' src='/assets/images/icon_loading_bgw.gif' />" );
    
    $.each( projects, function( i, o ) {
        o.color = Colors[ i % len ]; 

        data.push({
            color: o.color,
            guid: o.guid
        });

        $( "#nav-sub-project-" + o.guid + " em" )
            .css( "backgroundColor", o.color );
    });

    $.each( clientEvents, function( i, o ) {
        o.color = Project.getColor( o.projectGuid );
        $( "#cal" ).fullCalendar( "updateEvent", o );
    });

    $.ajax({
        url: "/project/color/",
        dataType: "json",
        type: "POST",
        data: {
            data: $.toJSON( data )	
        },
        success: function( result ) {
            if ( result.success ) {
                $( "#cancel-project-color" ).click();
            } else {
                smartMsg({
                    cls: "error",
                    msg: "设置失败，请稍后刷新重试",
                    duration: 3000
                });
            }
        }
    });
}

function cancelProjectColor( e ) {
    e.preventDefault();

    $.ajax({
        url: "/tip/remove/",
        type: "POST",
        dataType: "json"
    });

    $( "#new-feature-project-color" ).remove();
}

})( jQuery )
