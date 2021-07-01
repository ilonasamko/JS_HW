// operators *=, /=

let ballons = 100;
ballons *= 2;
console.log(ballons) // 200

ballons = 100;
ballons /= 8;
console.log(ballons) // 12.5

//converting strings to uppercase and lowercase

const str = "эЙ, кАК деЛА?";
console.log(str[0].toUpperCase() + str.slice(1).toLowerCase())

// // Try exercise p47

// Input parameters
let age = 11;
let accompanied = true;


// if/else construction to check condition
if (age >= 10 || accompanied) {
    console.log("Come in");
} else {
    console.log("Sorry, you can't go to this movie")
}