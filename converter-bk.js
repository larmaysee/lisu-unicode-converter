'use strict';
var byatoNgwa = function(output) {
	var rules = [{
		"from": "a",
		"to": "ꓮ"
	}, {
		"from": "A",
		"to": "ꓯ"
	}, {
		"from": "b",
		"to": "ꓐ"
	}, {
		"from": "B",
		"to": "ꓭ"
	}, {
		"from": "c",
		"to": "ꓚ"
	}, {
		"from": "C",
		"to": "ꓛ"
	}, {
		"from": "d",
		"to": "ꓓ"
	}, {
		"from": "D",
		"to": "ꓷ"
	}, {
		"from": "e",
		"to": "ꓰ"
	}, {
		"from": "E",
		"to": "ꓱ"
	}, {
		"from": "f",
		"to": "ꓝ"
	}, {
		"from": "F",
		"to": "ꓞ"
	}, {
		"from": "g",
		"to": "ꓖ"
	}, {
		"from": "G",
		"to": "ꓨ"
	}, {
		"from": "h",
		"to": "ꓧ"
	}, {
		"from": "i",
		"to": "ꓲ"
	}, {
		"from": "I",
		"to": "꓾"
	}, {
		"from": "j",
		"to": "ꓙ"
	}, {
		"from": "J",
		"to": "ꓩ"
	}, {
		"from": "k",
		"to": "ꓗ"
	}, {
		"from": "K",
		"to": "ꓘ"
	}, {
		"from": "l",
		"to": "ꓡ"
	}, {
		"from": "L",
		"to": "ꓶ"
	}, {
		"from": "m",
		"to": "ꓟ"
	}, {
		"from": "n",
		"to": "ꓠ"
	}, {
		"from": "o",
		"to": "ꓳ"
	}, {
		"from": "O",
		"to": "_"
	}, {
		"from": "p",
		"to": "ꓑ"
	}, {
		"from": "P",
		"to": "ꓒ"
	}, {
		"from": "r",
		"to": "ꓣ"
	}, {
		"from": "R",
		"to": "ꓤ"
	}, {
		"from": "s",
		"to": "ꓢ"
	}, {
		"from": "t",
		"to": "ꓔ"
	}, {
		"from": "T",
		"to": "ꓕ"
	}, {
		"from": "u",
		"to": "ꓴ"
	}, {
		"from": "U",
		"to": "ꓵ"
	}, {
		"from": "v",
		"to": "ꓦ"
	}, {
		"from": "V",
		"to": "ꓥ"
	}, {
		"from": "w",
		"to": "ꓪ"
	}, {
		"from": "x",
		"to": "ꓫ"
	}, {
		"from": "y",
		"to": "ꓬ"
	}, {
		"from": "z",
		"to": "ꓜ"
	}, {
		"from": "\\[",
		"to": "ꓹ"
	}, {
		"from": ",",
		"to": "ꓹ"
	}, {
		"from": "H",
		"to": "ꓺ"
	}, {
		"from": "Y",
		"to": "ꓻ"
	}, {
		"from": ";",
		"to": "ꓼ"
	}, {
		"from": ":",
		"to": "ꓽ"
	}, {
		"from": "=",
		"to": "꓿"
	}, {
		"from": " ",
		"to": " "
	}, {
		"from": "Q",
		"to": "ꓺꓽ"
	}, {
		"from": "S",
		"to": "ꓸꓼ"
	}, {
		"from": "W",
		"to": "ꓹꓼ"
	}, {
		"from": "q",
		"to": "ꓻꓽ"
	}, {
		"from": "`",
		"to": "ꓺꓼ"
	}, {
		"from": "\\.",
		"to": "ꓸ"
	}];

	return replace_with_rule(rules, output);
};

function replace_with_rule(rule, output) {
	var max_loop = rule.length;
	for (var i = 0; i < max_loop; i++) {
		var data = rule[i];
		var from = data["from"];
		var to = data["to"];

		var from_regex = new RegExp(from, "g");
		output = output.replace(from_regex, to);
	}
	return output;
}

jQuery(document).ready(function($) {

	$('#convert').on("click", function() {
		var id = $('#number').val();

		$.getJSON('data/book_' + id + '.json', function(json, textStatus) {
			var data = json.chapter_verse;
			var chapter_verse = [];
			data.forEach(function(item) {
				chapter_verse.push({
					"chapter_id": item.chapter_id,
					"verse_id": item.verse_id,
					"verse_text": byatoNgwa(item.verse_text)
				});
			});

			var convertData = {
				"chapter_verse": chapter_verse
			};
			document.getElementById('json').innerHTML = JSON.stringify(convertData);
		});
	});

	$('#reset').on("click", function() {
		$('#number').val('');
		document.getElementById('json').innerHTML = '';
	});

});
