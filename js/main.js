$(function() {
	$('nav a').on('click', function(event) {
		event.preventDefault();
		var elem = $(this).attr('href');

	    $('html, body').animate({
	        scrollTop: $(elem).offset().top
	    }, 1000);
	});
});