;( function( $ ) {

window.reg = {
	bold: /\*[\s\S]+\*/ig,
	italic: /_[\s\S]+_/ig,
	face: /:-\||:-O|:-x|:-P|:-D|;-\)|:-\(|:-\)|B-\)|'\(|:\||:O|:x|:P|:D|:\)|:\(|:\)/ig,
	url: /(?:https?:\/\/)?(?:[\da-z\.-]+)\.(?:[a-z\.]{2,6})(?:[\/\w\.-]*)*\/?/ig,

	replaceURL: function( s ) {
		s = s.replace( this.url, function() {
			var match = arguments[0];
			return "<a href='" + match + "' target=_blank>" + match + "</a>";
		});

		return s;
	},

	replaceBold: function( s ) {
  		s = s.replace( this.bold, function() {
			var match = arguments[0];
			match = match.substring( 1, match.length - 1 );
			return "<b>" + match + "</b>";
		});

		return s;
	},

	replaceItalic: function( s ) {
  		s = s.replace( this.italic, function() {
			var match = arguments[0];
			match = match.substring( 1, match.length - 1 );
			return "<i>" + match + "</i>";
		});

		return s;
	},

	replaceFace: function( s ) {
		s = s.replace( this.face, function() {
			var match = arguments[0];
			return "<span class=face>" + match + "</span>";
		});

		return s;
	},

	replace: function( s, opt ) {
		var opt = $.extend( {
			url: true,
			bold: true,
			italic: true,
			face: true
		}, opt );

		if ( opt.bold ) {
			s = this.replaceBold( s );
		}

		if ( opt.italic ) {
			s = this.replaceItalic( s );
		}

		if ( opt.face ) {
			s = this.replaceFace( s );
		}

		if ( opt.url ) {
			s = this.replaceURL( s );
		} 

		return s;
	}
};
				
//parse yyyy-mm-dd to GMT ms
window.parseDate = function( s ) {
	var arr = s.split( "-" ),
		d = new Date( arr[0], arr[1] - 1, arr[2] );

	return d.getTime()
}

window.formatDate = function( ms, format ) {
	var date = new Date( ms ),
		year = date.getFullYear(),
		m = mm = date.getMonth() + 1,
		d = dd = date.getDate(),
		day = date.getDay(),
		week = [ "星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ],
        s = "";

	if ( m < 10 ) mm = "0" + m;
	if ( d < 10 ) dd = "0" + d;

	if ( format == "yyyy-mm-dd" ) {
		s = year + "-" + mm + "-" + dd;
    } else if ( format == "mm-dd" ) {
        s = mm + "-" + dd;  
    } else if ( format == "M:D" ) {
        s = m + "月" + d + "日";  
    } else if ( format == "yyyy-mm-dd W" ) {
		s =  year + "-" + mm + "-" + dd + " " + week[ day ];
	} else if ( format == "YYYY:MM:DD" ) {
		s = year + "年" + mm + "月" + dd + "日";
	} else if ( format == "YYYY:MM:DD W" ) {
		s = year + "年" + mm + "月" + dd + "日 " + week[ day ];
	} else if ( format == "YYYY:M:D W" ) {
		s = year + "年" + m + "月" + d + "日 " + week[ day ];
	} else if ( format == "W" ) {
		s = week[ day ];
    } else if ( format == "w" ) {
        s = day;
    } else if ( format == "nW" ) {
        var date = new Date( year, 0, 1);

        s = ms - date.getTime();
        s = s / 7 / 24 / 3600000;
        s = "第" + Math.ceil( s ) + "周";
    } else if ( format == "~" ) {
        var monday = ms - 7 * 86400000,
            sunday = ms - 86400000;

        var start = $( "#statistics-start" ).datepicker( "getDate" ).getTime();

        if ( monday < start ) {
            monday = start;
        }

        monday = formatDate( monday, "M:D" );
        sunday = formatDate( sunday, "M:D" );

        s = monday + "~" + sunday;
    }

	return s;
}

window.getPassedTime = function( ms ) {
	var now = new Date(),
		d = new Date( ms ),
		delta = ( now.getTime() - d.getTime() ) / ( 3600000 * 24 ),
		str;

		if ( delta < 0.04 ) {
			str = "刚刚";
		} else if ( delta <= 1 ) {
			str = "今天";
		} else if ( delta <= 2 ) {
			str = "昨天";
		} else if ( delta <= 3 ) {
			str = "前天";
		} else if ( delta <= 7 ) {
			str = "本周";
		} else if ( delta <= 14 ) {
			str = "一周前";
		} else {
			str = d.getFullYear() + "年" + ( d.getMonth() + 1 ) + "月" + d.getDate() + "日";
		}

		return  str;
}

window.smartMsg = function( opt ) {
	if ( opt == "close" ) {
		$( "#smartMsg" ).hide();
	} else {
		var opt = $.extend( {
			cls: "notice",
			msg: "",
			duration: 5000
		}, opt );

		var smartMsg = $( "#smartMsg" ),
			msg = smartMsg.find( "span" );

		smartMsg.removeClass( "notice, error, success" );
		smartMsg.addClass( opt.cls );
		msg.text( opt.msg );

		//updat position
		smartMsg.css( "left", $( window ).width() / 2 - smartMsg.width() / 2 );

		smartMsg.show();
		
		if ( opt.duration != false ) {
			setTimeout( function(){
				smartMsg.fadeOut( "fast" );
			}, opt.duration);
		}
	}
}

window.btnIndicate = function( $btn, opt ) {
	var opt = $.extend( {
			type: "btn"
		}, opt ),
		target = $btn,
        w = target[0].offsetWidth;

	
	if ( opt.type == "btn" ) {
		target.css({
			"background": "url('/assets/images/icon_loading_bgw.gif') no-repeat 10% center",
            "width": w,
			"outline": "none"
		})

		target.addClass( "disable" );
        target.attr({ "disabled": "disabled" });
        target.attr({ "value": " " });

		target.blur();
	} else if ( opt.type == "origin" ) {
		target.hide();
		target.after ( "<img class=loading-indicator src='/assets/images/icon_loading_bgw.gif' />" );
	}
}

window.btnResume = function( $btn, opt ) {
	var opt = $.extend( {
			txt: "保存",
			type: "btn"
		}, opt ),
		target = $btn;
	
	if ( opt.type == "btn" ) {
        target.css( "background", "#2277cc" )
            .removeClass( "disable" )
            .attr({
                "disabled": "",
                "value": opt.txt
            });
	} else if ( opt.type == "origin" ) {
		target.next( "img.loading-indicator" ).remove();
		target.show();
	}
}

window.isIpad = function() {
	var ua = navigator.userAgent.toLowerCase();

	return ua.match(/iPad/i) == "ipad" ? true : false
}

window.getZeroTime = function( date ) {
	var y = date.getFullYear(),
		m = date.getMonth(),
		d = date.getDate(),
		zero = new Date( y, m, d );

	return zero.getTime();
}

window.getArraySum = function( data ) {
    var sum = 0;
    $.each( data, function( i, o ) {
        sum += o;
    });
    return sum
}

Array.prototype.max = function() {
    return Math.max.apply( {}, this );
}

Array.prototype.min = function() {
    return Math.min.apply( {}, this );
}

window.RGBToHex = function( rgb ) {
    var regexp = /^rgb\(([0-9]{0,3})\,\s([0-9]{0,3})\,\s([0-9]{0,3})\)/g;
    var re = rgb.replace(regexp, "$1 $2 $3").split(" ");//利用正则表达式去掉多余的部分  

    if ( re.length == 1 ) {
        return rgb
    }

    var hexColor = "#";  
    var hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];  

    for ( var i = 0; i < 3; i++ ) {  
        var r = null;  
        var c = re[i];  
        var hexAr = [];  

        while (c > 16) {  
            r = c % 16;  
            c = (c / 16) >> 0;  
            hexAr.push(hex[r]);
        }

        hexAr.push(hex[c]);
        if ( hexAr.length == 1 ) hexAr.push( 0 );
        hexColor += hexAr.reverse().join('');
    }  

    return hexColor;
}

})( jQuery )
