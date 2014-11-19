var tempFar = 50;

var convertFtoC = Math.round((tempFar - 32) * (5/9));

var convertCtoF = Math.round((convertFtoC * (9 / 5)) + 32);

console.log(convertFtoC + "\u00B0" + "C" + " is " + convertCtoF + "\u00B0" + "F");

