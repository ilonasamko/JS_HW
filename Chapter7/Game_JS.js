//
let words = [
    "word",
    "letter",
    "joke",
    "life"]

// random -> 0 and 1
// округлення в сторону меншого (2.8 -> 2)
let randomIndex = Math.floor(Math.random() * words.length);
let word = words[randomIndex];

console.log(word);  // just for testing


// create array of underscores
let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remainingLettersCount = word.length;
let isGameOver = false;

while (remainingLettersCount > 0) {
    alert(answerArray.join(" "));
    let guess = prompt("Enter the letter or press Cancel.");
    console.log("You have entered: " + guess);
    if (guess == null) {
        isGameOver = true;
        break;
    } else if (guess.length !== 1) {
        alert("Please enter 1 letter.");
    } else {
        guess = guess.toLowerCase();
        if (!answerArray.join("").includes(guess)) {
            for (let j = 0; j < word.length; j++) {
                if (word[j] === guess) {
                    answerArray[j] = guess;
                    remainingLettersCount--;
                }
            }
        }
    }
}

if (!isGameOver) {
    alert('Good job. The word was: ' + word);
}






