//Try it p.130

let drawCats = function (howManyTimes) {
    for (let i = 0; i < howManyTimes; i++) {
        console.log(i + "=^.^=")
    }
}
drawCats(100)

// HW #1 p140

function add (a, b) {
    return a + b;
}

function multiply (a, b) {
    return a * b;
}

console.log(add(multiply(36325,9824), 777));

// #2
let areArraysSame = function (array1, array2) {
    if (array1.length !== array2.length) {
        return false
    }
    for (i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false
        }
    }
    return true
}
console.log(areArraysSame([1, 2, 3], [4, 5, 6]));
console.log(areArraysSame([1, 2, 3], [1, 2, 3]));
console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));

// #3
let pickWord = function () {
    let words = [
        "work",
        "letter",
        "joke",
        "life",
        "sun"
    ]

    words = words[Math.floor(Math.random() * words.length)]
    return words
}
let word = pickWord()
console.log(word)

let setupAnswerArray = function (word) {
    let  answerArray = []
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_"
    }
    return answerArray
}
let answerArray = setupAnswerArray(word)
console.log(answerArray)

let remainingLetters = word.length

let showPlayerProgress = function (array) {
    alert(array.join(" "))
}

let getGuess = function () {
    return prompt("Enter the letter or press Cancel.")
}

let updateGameState = function (guess, word, answerArray) {
    let guessNumber = 0;
    for (let j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess
            guessNumber ++
        }
    }
    return guessNumber
}

let showAnswerAndCongratulatePlayer = function (answerArray) {
    alert(answerArray.join(" "))
    alert("Good job. The word was: " + word)
}

while (remainingLetters > 0) {
    showPlayerProgress(answerArray)

    let guess = getGuess()
    console.log(guess)
    if (guess === null) {
        break
    } else if (guess.length !== 1) {
        alert("Please enter 1 letter.")
    } else {
        let correctGuesses = updateGameState(guess, word, answerArray)
        remainingLetters -= correctGuesses
    }
}

showAnswerAndCongratulatePlayer(answerArray)