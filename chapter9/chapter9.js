// #1. Перечислите своих друзей (и сделайте их лучшими!)
$("heading").text("My friends: ");

const friends = ["Max", "Alex", "Kris"];

for (let i = 0; i < friends.length; i++) {
    $("body").append("<p>" + friends[i] + "</p>");
    $("p")
        .last()
        .hide()
        .fadeIn((i + 1) * 5000);
}

$("p").append(" the best");

//#2. Мигающий заголовок

let fadeTime;
for (let i = 0; i < 5; i++) {
    fadeTime = (i + 1) * 1000;
    $("#heading")
        .fadeOut(fadeTime / 2)
        .fadeIn(fadeTime / 2);
}

// // #3. Отложенная анимация
$("#heading").text("My friends:");

const friends = ["Max", "Alex", "Kris"];

for (let i = 0; i < friends.length; i++) {
    $("body").append("<p>" + friends[i] + "</p>");
    $("p")
        .last()
        .hide()
        .delay((i + 1) * 2000)
        .fadeIn(2000);
}

$("p").append(" the best");