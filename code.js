"use strict"

//var
let body = document.getElementsByTagName("body")[0];

let data = ["rock", "paper", "scissor"];

let icons = document.getElementById("icons");

let result = document.getElementById("result");

let massage = document.getElementById("message");

let resset = document.getElementById("resset");
let you_score = 0;
let cpu_score = 0;
//fun
let get_random_int = (max) => { return Math.floor(Math.random() * max); };

let test_rock = (you, cpu) => {
    if (you === "rock" && cpu === "rock") {
        return "draw";
    }
    else if (you === "rock" && cpu === "paper") {
        return "lose";
    }
    else if (you === "rock" && cpu === "scissor") {
        return "win";
    }
}
let test_paper = (you, cpu) => {
    if (you === "paper" && cpu === "rock") {
        return "win";
    }
    else if (you === "paper" && cpu === "paper") {
        return "draw";
    }
    else if (you === "paper" && cpu === "scissor") {
        return "lose";
    }
}
let test_scissor = (you, cpu) => {
    if (you === "scissor" && cpu === "rock") {
        return "lose";
    }
    else if (you === "scissor" && cpu === "paper") {
        return "win";
    }
    else if (you === "scissor" && cpu === "scissor") {
        return "draw";
    }
}
let get_result = (you, cpu) => {
    if (you === "rock") {
        return test_rock(you, cpu);
    }
    else if (you === "paper") {
        return test_paper(you, cpu);
    }
    else {
        return test_scissor(you, cpu);
    }
}

let update_result = (p, y_score, c_score) => {
    p.innerText = `You ${y_score} : ${c_score} Computer`;
}

//event

icons.addEventListener("click", (e) => {
    let cpu = data[get_random_int(2)];
    let res = get_result(e.target.id, cpu);
    if (res === "win") {
        you_score++;
        body.style.backgroundColor = "#2a9d8f";
    }
    else if (res === "lose") {
        cpu_score++;
        body.style.backgroundColor = "#e63946";
    }
    else {
        massage.innerHTML = "its a draw";
        body.style.backgroundColor = "#1d1d1d";
        return;
    }
    update_result(result, you_score, cpu_score);
    massage.innerHTML = `you ${res} because cpu used ${cpu}`;
})

resset.addEventListener('click', () => {
    you_score = 0;
    cpu_score = 0;
    update_result(result, you_score, cpu_score);
    body.style.backgroundColor = "#1d1d1d";
    massage.innerHTML = "Make a play";
})