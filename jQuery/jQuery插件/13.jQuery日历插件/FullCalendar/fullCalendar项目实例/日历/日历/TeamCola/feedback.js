;( function( $ ) {

$( function() {

$( "#feedback-btn" ).click( function( e ) {
    e.preventDefault();

    $.lightbox({
        content: "<div id=feedback class=feedback>" +
                    "<div id=feedback-form-div>" +
                        "<label for=fb-content>把你要说的写在这里：</label><br />" +
                        "<textarea id=fb-content></textarea><br />" +
                    "</div>" +
                "</div>",
        buttons: [{
                type: "button",
                text: "完成",
                handler: evtSubmitFeedback
            }, {
                type: "cancel",
                text: "取消",
                handler: function() {
                    $.lightbox( "hide" );
                }
        }],
        width: 500
    });
});

});

function evtSubmitFeedback( e ) {
    e.preventDefault();

    var target = $( e.target ),
        content = $( "#fb-content" );

    if ( content.val() == "" ) {
        content.tips({
            content: "别急，还没有写意见呢",
            position: "top",
            color: "red",
            autoHide: true 
        }).focus();

        return false
    }

	btnIndicate( target );

    $.ajax({
        url: "/feedback/submit/",
        type: "POST",
		dataType: "json",
        data: {
            content: $( "#fb-content" ).val(),
            windowHeight: $( window ).height(),
            windowWidth: $( window ).width(),
            screenWidth: screen.width,
            screenHeight: screen.height,
            url: window.location.href
        },
		success: function( result ) {
            if ( result.success ) {
                /*
                var btnWrap = $( "#feedback" )
                    .html( "<div id=feedback-result-div>" +
                                "<span class=fb-sent>" + 
                                    "已经把你说的发送给了TeamCola团队，" + 
                                    "你可以随时通过 m2@teamcola.com 与他们联系，" +
                                    "谢谢你的反馈 :)" + 
                                "</span>" +
                                "</div>" )
                    .parents( "lightbox-content" )
                    .next( "lightbox-buttons" );

                $( "<a id=feedback-close-btn class=fb-close" + 
                        " href='#!/feedback/close/" + profile.nickname + 
                        "'>不用客气，关闭窗口</a>" )
                    */

                $.lightbox({
                        content: "<div id=feedback class=feedback>" + 
                                    "<div id=feedback-result-div>" +
                                        "<span class=fb-sent>" + 
                                            "已经把你说的发送给了TeamCola团队，" + 
                                            "你可以随时通过 m2@teamcola.com 与他们联系，" +
                                            "谢谢你的反馈 :)" + 
                                        "</span>" +
                                    "</div></div>",
                        buttons: [{
                            type: "link",
                            text: "不用客气，关闭窗口",
                            handler: function() {
                                $.lightbox( "hide" );
                            }
                        }],
                        width: 500
                });
			} else {
				smartMsg({
					cls: "error",
					msg: "反馈信息发送失败，请稍后再试"
				});
			}
		},
		error: function( error ) {
			smartMsg({
				cls: "error",
				msg: "反馈信息发送失败，请稍后再试"
			});
		},
		complete: function( jqXHR ) {
			btnResume( target );
		}
    });
};

})( jQuery );
