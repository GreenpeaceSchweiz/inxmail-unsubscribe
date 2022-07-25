jQuery(document).ready(function($)
{
	// add horizontal lines

	var line = '<hr>';
	$(line).insertAfter('#description_1');

	// add classes to the buttons

	$('input[type=submit]').addClass('btn btn-secondary');

	// load the sprite.symbol.svg

	$.get("https://files.greenpeace.ch/inxmail/unsubscribe/sprite.symbol.svg", function(data) {
		var div = document.createElement("div");
		div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
		document.body.insertBefore(div, document.body.childNodes[0]);
	});

	// replace the sprite.symbol.svg urls

	// search button
	$('svg:eq(3)').replaceWith('<svg viewBox="0 0 32 32" class="icon"><use xlink:href="#search"></use></svg>');

	// social footer
	$('svg:eq(4)').replaceWith('<svg viewBox="0 0 32 32" class="icon"><use xlink:href="#facebook"></use></svg>');
	$('svg:eq(5)').replaceWith('<svg viewBox="0 0 32 32" class="icon"><use xlink:href="#twitter"></use></svg>');
	$('svg:eq(6)').replaceWith('<svg viewBox="0 0 32 32" class="icon"><use xlink:href="#youtube"></use></svg>');
	$('svg:eq(7)').replaceWith('<svg viewBox="0 0 32 32" class="icon"><use xlink:href="#instagram"></use></svg>');

	// creative commons
	$('svg:eq(8)').replaceWith('<svg viewBox="0 0 32 32" class="icon"><use xlink:href="#creative-commons"></use></svg>');

	// hide the language selection for this site
	$('#nav-languages li:eq(1)').hide();
	$('#nav-languages li:eq(2)').hide();
});