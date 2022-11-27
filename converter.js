'use strict';
var byatoNgwa = function (output) {
	var rules = [
		{
			from: 'a',
			to: 'ꓮ',
		},
		{
			from: 'A',
			to: 'ꓯ',
		},
		{
			from: 'b',
			to: 'ꓐ',
		},
		{
			from: 'B',
			to: 'ꓭ',
		},
		{
			from: 'c',
			to: 'ꓚ',
		},
		{
			from: 'C',
			to: 'ꓛ',
		},
		{
			from: 'd',
			to: 'ꓓ',
		},
		{
			from: 'D',
			to: 'ꓷ',
		},
		{
			from: 'e',
			to: 'ꓰ',
		},
		{
			from: 'E',
			to: 'ꓱ',
		},
		{
			from: 'f',
			to: 'ꓝ',
		},
		{
			from: 'F',
			to: 'ꓞ',
		},
		{
			from: 'g',
			to: 'ꓖ',
		},
		{
			from: 'G',
			to: 'ꓨ',
		},
		{
			from: 'h',
			to: 'ꓧ',
		},
		{
			from: 'i',
			to: 'ꓲ',
		},
		{
			from: 'I',
			to: '꓾',
		},
		{
			from: 'j',
			to: 'ꓙ',
		},
		{
			from: 'J',
			to: 'ꓩ',
		},
		{
			from: 'k',
			to: 'ꓗ',
		},
		{
			from: 'K',
			to: 'ꓘ',
		},
		{
			from: 'l',
			to: 'ꓡ',
		},
		{
			from: 'L',
			to: 'ꓶ',
		},
		{
			from: 'm',
			to: 'ꓟ',
		},
		{
			from: 'n',
			to: 'ꓠ',
		},
		{
			from: 'o',
			to: 'ꓳ',
		},
		{
			from: 'O',
			to: 'ˍ',
		},
		{
			from: 'p',
			to: 'ꓑ',
		},
		{
			from: 'P',
			to: 'ꓒ',
		},
		{
			from: 'r',
			to: 'ꓣ',
		},
		{
			from: 'R',
			to: 'ꓤ',
		},
		{
			from: 's',
			to: 'ꓢ',
		},
		{
			from: 't',
			to: 'ꓔ',
		},
		{
			from: 'T',
			to: 'ꓕ',
		},
		{
			from: 'u',
			to: 'ꓴ',
		},
		{
			from: 'U',
			to: 'ꓵ',
		},
		{
			from: 'v',
			to: 'ꓦ',
		},
		{
			from: 'V',
			to: 'ꓥ',
		},
		{
			from: 'w',
			to: 'ꓪ',
		},
		{
			from: 'x',
			to: 'ꓫ',
		},
		{
			from: 'y',
			to: 'ꓬ',
		},
		{
			from: 'z',
			to: 'ꓜ',
		},
		{
			from: '\\[',
			to: 'ʼ',
		},
		{
			from: ',',
			to: 'ꓹ',
		},
		{
			from: 'H',
			to: 'ꓺ',
		},
		{
			from: 'Y',
			to: 'ꓻ',
		},
		{
			from: ';',
			to: 'ꓼ',
		},
		{
			from: ':',
			to: 'ꓽ',
		},
		{
			from: '=',
			to: '꓿',
		},
		{
			from: ' ',
			to: ' ',
		},
		{
			from: 'Q',
			to: 'ꓺꓽ',
		},
		{
			from: 'S',
			to: 'ꓸꓼ',
		},
		{
			from: 'W',
			to: 'ꓹꓼ',
		},
		{
			from: 'q',
			to: 'ꓻꓽ',
		},
		{
			from: '`',
			to: 'ꓺꓼ',
		},
		{
			from: 'Z',
			to: '“',
		},
		{
			from: 'X',
			to: '”',
		},
		{
			from: '\\.',
			to: 'ꓸ',
		},
	];

	return replace_with_rule(rules, output);
};

function replace_with_rule(rule, output) {
	var max_loop = rule.length;
	for (var i = 0; i < max_loop; i++) {
		var data = rule[i];
		var from = data['from'];
		var to = data['to'];

		var from_regex = new RegExp(from, 'g');
		output = output.replace(from_regex, to);
	}
	return output;
}

jQuery(document).ready(function ($) {
	$('#nonUnicode').css('font-family', 'bya');

	$('#fromFont').on('change', function () {
		//
		var font = $('#fromFont').val();

		$('#nonUnicode').css('font-family', font);
	});

	$('#convert').on('click', function () {
		var inputText = $('#nonUnicode').val();
		var unicodeText = byatoNgwa(inputText);
		$('#unicode').val(unicodeText);
	});

	$('#reset').on('click', function () {
		$('#nonUnicode').val('');
		$('#unicode').val('');
	});

	// copy btn
	$('#copy-btn').on('click', function () {
		// Select the text field
		var copyText = $('#unicode').val();
		navigator.clipboard.writeText(copyText);
	});
});
