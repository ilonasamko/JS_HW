// HW
// #2
const randomBodyParts = ["ears", "nose", "lips", "eyes", "face"];
const randomAdjectives = ["friendly", "happy", "beauty", "angry"];
const randomAnimals = ["cat", "horse", "hamster"];

const randomBodyPart = randomBodyParts[Math.floor(Math.random() * 5)];


const randomAdjective = randomAdjectives[Math.floor(Math.random() * 4)];


const randomAnimal = randomAnimals[Math.floor(Math.random() * 3)];

console.log(
    "You have " + randomBodyPart + " " + "like" + " " + randomAdjective + " " + randomAnimal);


//#3
let randomWordsArray = []
randomWordsArray.push("You have");
randomWordsArray.push(randomBodyParts);
randomWordsArray.push("the most");
randomWordsArray.push(randomAdjectives);
randomWordsArray.push("than");
randomWordsArray.push(randomAnimals);

console.log(randomWordsArray.join(" ") + "!");


//#4
console.log([3, 2, 1].join(" more ", " than "));


// Notes
//create arrays

// let dinosavrs = ["Тираннозавр", "Велоцираптор", "Стегозавр", "Трицерапторс", "Брахиозавр"];
// dinosavrs[0];
// dinosavrs[4];
// dinosavrs[0] = "Тираннозавр Рекс";
// console.log(dinosavrs);


//different data types in one arrays

// let dinosavrsAndNumbers = [3, "динозавр", ["трицерапторс", "стегозавр", 3627.5], 10];
// console.log(dinosavrsAndNumbers[2][0]);


//Push

// let animals = [];
//
// animals.push("cat");
// animals.push("dog");
// animals.push("fish");

// console.log(animals);
// console.log(animals.length);


//Unshift

// animals.unshift("cacatu");
// console.log(animals);
// animals.length;
// console.log(animals.length);
// animals[0];
// console.log(animals[0]);


//Pop

// let lastAnimal = animals.pop();
//
// console.log(lastAnimal);
// console.log(animals);
// animals.unshift(lastAnimal);
// console.log(animals);


// const furryAnimals = ["Resr", "Wewe", "Qaqa", "Popop"];
// const scalyAnimals = ["MMMM", "cvdvrr", "zasdvvvv"];
// const itemAnimals = ["boo", "slacki", "happy"];
// const allAnimals = furryAnimals.concat(scalyAnimals, itemAnimals);
// console.log(allAnimals);

// let colors = ["red", "green", "blue", "purple"];
// colors.indexOf("red");
// console.log(colors);
// console.log(colors.indexOf("red"));
// colors.indexOf("green");
// console.log(colors.indexOf("green"));

// let borringAnimals = ["cacatu", "coala", "hourse"];
// borringAnimals.join();
// console.log(borringAnimals.join(" and "));
//
// let myNames = ["Nicolas", "Duglas", "Rodion", "Mackwel"];
// myNames.join("  ");
// console.log(myNames.join(" "));


// let landMarks = [];
// landMarks.push("my house");
// landMarks.push("street to home");
// landMarks.push("Fonar");
// landMarks.push("gidrant");
// landMarks.push("cats");
// landMarks.push("school");
// landMarks.push("house my friend");
// console.log(landMarks);
// landMarks.pop();
// console.log(landMarks.pop());
// landMarks.pop();
// console.log(landMarks.pop());
// landMarks.pop();
// console.log(landMarks.pop());








