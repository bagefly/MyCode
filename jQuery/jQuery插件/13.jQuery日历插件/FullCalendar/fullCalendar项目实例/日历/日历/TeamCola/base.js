;( function( $ ) {

function evtShowSubProject( e ) {
	e.preventDefault();
	e.stopPropagation();

	var target = $( this );

	if ( target.next().is( ":visible" ) ) {
		target.parent().removeClass( "active" );
		$( document.body ).unbind( "click" );
	} else {
        $( "div.nav div.nav-item.active" ).removeClass( "active" );
		target.parent().addClass( "active" );
		$( document.body ).click( evtHideSubProject );
	}
}

function evtHideSubProject( e ) {
    var target = $( e.target );

    while ( !target.is( "#team-nav-sub" )
            && !target.is( "ul.nav-sub" ) 
            && !target.is( "body" ) ) {
        target = target.parent();
    }

    if ( target.is( "body" ) ) {
        $( "div.nav div.nav-item.active" ).removeClass( "active" );
        $( document.body ).unbind( "click" );
    }
}

$( function() {
	//$( "img.avatar, .avatar img" ).setAvatar();
    $( "#project-sub, #team-sub" ).click( evtShowSubProject );

    if ( !window.Member ) {
        window.Member = {

            members: window.members,

            get: function( guid ) {
                return $.grep( this.members, function( n, i ) {
                    return n.guid == guid
                })[0];
            },

            getAll: function() {
                return this.members
            },

            getGuidArray: function() {
                return $.map( this.members, function( n, i ) {
                    return n.guid
                });
            }

        };
    }

    if ( !window.Team ) {
        window.Team = {
            
            logs:{},

            getLogs: function( date ) {
                return this.logs[ date ]
            },

            storeLogs: function( date, logs ) {
                this.logs[ date ] = logs;
            }
        }
    }

    if ( !window.Project ) {
        window.Project = {

            projects: $.merge( 
                $.merge( 
                    $.merge( [], projects.myProjects ), 
                    projects.teamProjects
                ),
                $.merge( 
                    $.merge( [], projects.doneProjects ), 
                    projects.otherProjects
                )
            ),

            get: function( guid ) {
                return $.grep( this.projects, function( n, i ) {
                    return n.guid == guid
                })[0];
            },

            getColor: function( guid ) {
                return this.get( guid ).color
            },

            size: function() {
                return this.projects.length
            },

            getAll: function() {
                return this.projects
            }

        }
    }
})
/*
 window.Colors = ["#3388cc","#99be35","#ee8800","#55aabb","#dd5049","#4d67e1","#5c9e45","#a65dcb","#aa8877","#49659b","#44aaaa","#aaaaaa","#dab327","#6fc88a","#6fc5c8","#5cbcc0","#d88fcf","#aa4632","#777777","#8f672d"];*/

window.Colors = [
    "#ee8800",
    "#dd5049",
    "#aa4632",
    "#8f672d",
    "#aa8877",
    "#dab327",
    "#93b23e",
    "#768f32",
    "#5c9e45",
    "#61c2c2",
    "#2c9db4",
    "#3388cc",
    "#3757ea",
    "#36599d",
    "#5b5cab",
    "#8f6ed9",
    "#c55dcb",
    "#d980ce",
    "#9f9f9f",
    "#777777"
];

/*
window.Colors = [
    "#4572A7", 
    "#AA4643", 
    "#89A54E", 
    "#80699B", 
    "#3D96AE", 
    "#DB843D", 
    "#92A8CD", 
    "#A47D7C", 
    "#B5CA92"
];
*/
})( jQuery )
