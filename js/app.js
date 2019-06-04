$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');

		$( ".menu" ).slideToggle( "slow", function() {
	    // Animation complete.
	  	});

	});

	$('.language').click(function(){
		$(this).toggleClass('open');

		$( ".language__down" ).slideToggle( "slow", function() {
	    // Animation complete.
	  	});

	});

	$('.search button').click(function(){
		$(this).toggleClass('open');

		$( ".search input" ).slideToggle( "slow", function() {
	    // Animation complete.
	  	});

	});

});