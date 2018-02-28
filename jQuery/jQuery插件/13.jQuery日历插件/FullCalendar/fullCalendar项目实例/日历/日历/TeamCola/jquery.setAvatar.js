;( function( $ ) {

$.fn.setAvatar = function(options){
	var opt = $.extend({}, $.fn.setAvatar.options, options);

	return this.each(function(){
		var $this = $(this),
			email = $this.attr("email"),
			hasAvatar = $this.attr("src") == "" || $this.attr("src") == "/assets/images/avatar.png" ? false : true;

		if( email && !hasAvatar ){
			var gavatar = hex_md5(email),
				gavatarURL = "http://www.gravatar.com/avatar/" + 
							gavatar + "?d=monsterid&s=" + opt.size;
			
			this.onerror = function(){
				$this.attr( "src", "/assets/images/avatar.png" );
			}
			this.src = gavatarURL;
		}
	});
}

$.fn.setAvatar.options = {
	size: 50 //set img size
}

})( jQuery );
