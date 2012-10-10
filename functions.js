

$(window).load(function() {
	 set_frame_height();	 

	 $("body").swipe({
       swipeLeft:function(event, direction, distance, duration, fingerCount) {
         $('.bfd a.quip').trigger('click');
         var window_width = $(window).width();
         if ( window_width <= 768 ) {
     		$('#frames .left-corner, #frames .right-corner').fadeOut(function() {
     			$(this).delay(300).fadeIn();
     		})
     	 }else {
     	 	$('#frames .left-corner, #frames .right-corner').fadeOut();
     	 };
       }, 
       swipeRight:function(event, direction, distance, duration, fingerCount) {
           $('.bfd a.quip').trigger('click');
       }
    });


})

$(window).resize(function() {
	 set_frame_height();
})

function set_frame_height() {
	var frame_height = $('.frame').height();
	var frame_corners = $('.frame .text').outerHeight();
	$('#frames').css({
		height : frame_height
	});
	$('.left-corner, .right-corner').css({
		height : frame_corners
	});
}


