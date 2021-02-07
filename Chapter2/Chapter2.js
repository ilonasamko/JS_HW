// operators *=, /=

var ballons = 100;
ballons *= 2;
console.log(ballons) // 200

var ballons = 100;
ballons /= 8;
console.log(ballons) // 12.5

//converting strings to uppercase and lowercase

var justString = "эЙ, кАК деЛА?";
var lowerString = justString.toLowerCase();
var firstCharacter = lowerString[0];
var firstCharacterUpper = firstCharacter.toUpperCase();
var restOfString = lowerString.slice(1);
var correctString = firstCharacterUpper + restOfString;
console.log(correctString);

// Try exercise p47

// Input parameters
var age = 11;
var accompanied = true;

// Result
var shouldToPass;

// if/else construction to check condition
if (age >= 12){
    shouldToPass = true;
} else if (age < 12 && accompanied == true){
    shouldToPass = true;
} else {
    shouldToPass = false;
}
console.log(shouldToPass);