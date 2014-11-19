var inputString = "building";

var reverseArr = [];

// The for loop pushes the strings into the empty array reverseArr.
for (var i = inputString.length - 1; i >= 0; i--) {
	reverseArr.push(inputString[i]); 
};

// The var reverseString converts the array reverseArr into a string with 
// the .join() method. To rid of the ",", I used an empty seperator.

var reverseString = reverseArr.join('');

console.log(reverseString);