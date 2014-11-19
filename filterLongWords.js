var words = ["Super", "Smash", "Bros", "3DS"];

var maxLength = 5;

var newArray = [];

for (var i = 0; i < words.length; i++) {
	if (words[i].length < maxLength) {
		newArray.push(words[i]);
	};
}

console.log(newArray);