//Try it p.101

const myName = "Ilona";
const momName = "Vita";
const dadName = "Oleg";

const name = "Kristen";

if (name === myName){
    console.log("Hello me");
} else if (momName === momName){
    console.log("Hello, Mom!");
} else if (name === dadName){
    console.log("Hi Dad!");
} else {
    console.log("Hello stranger")
}



//Try it p.107

//for

for (let x = 3; x < 10000; x = x * 3){
    console.log(x)
}


//while

let animals2 = 3;
while (animals2 < 10000){
    console.log(animals2)
    animals2 = animals2 * 3;
}
console.log(animals2);



//#1

let animals = ["Cat", "Fish", "Lemur", "Koala"];
for (let i = 0; i < animals.length; i++){
    console.log(animals[i] + " beautiful animal" + "!");
}



//#2

const alphabet = "abcdefghijklmnopqrstuvwxyz";
let randomString = ""

while (randomString.length < 6){
    randomString = randomString + alphabet[Math.floor(Math.random() * alphabet.length)]
}
console.log(randomString);



