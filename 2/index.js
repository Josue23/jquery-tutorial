$(document).ready(function() {
	$('#notready').fadeOut(1000);
});

$(document).ready(function() {
	$('button').mouseenter(function() {
		$('button').fadeTo('slow', 1);
	});
	$('button').mouseleave(function() {
		$('button').fadeTo('fast', .5);
	});
});


