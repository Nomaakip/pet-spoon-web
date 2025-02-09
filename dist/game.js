"use strict";
console.log("Pet Spoon Game Loaded!");
//get html elements
const button = document.getElementById('feed');
const pizzaButton = document.getElementById('pizza');
const donutButton = document.getElementById('donut');
const info = document.getElementById('info');
const container = document.getElementById('container');
const died = document.getElementById('died');
const feedDiv = document.getElementById('feedwhat');
button.addEventListener('click', showFeedOptions);
//info
let health = Number(localStorage.getItem("health")) || 100;
let hunger = Number(localStorage.getItem("hunger")) || 100;
function updateInfo() {
    if (hunger <= 0) {
        if (health <= 0) {
            if (container) {
                container.style.display = 'none';
            }
            if (died) {
                died.style.display = 'block';
            }
        }
        health--;
    }
    else {
        hunger--;
    }
    if (info) {
        info.innerText = `Health: ${health} | Hunger: ${hunger}`;
    }
    localStorage.setItem("health", health.toString());
    localStorage.setItem("hunger", hunger.toString());
}
function loadInfo() {
    if (info) {
        info.innerText = `Health: ${health} | Hunger: ${hunger}`;
    }
}
//feeding stuff
function showFeedOptions() {
    if (feedDiv.style.display == 'block') {
        feedDiv.style.display = 'none';
    }
    else {
        feedDiv.style.display = 'block';
    }
}
function feedPizza() {
    if (hunger < 100) {
        hunger += 20;
        if (hunger >= 100)
            hunger = 100;
        updateInfo();
    }
    if (health < 100) {
        health += 10;
        if (health >= 100)
            health = 100;
        updateInfo();
    }
}
function feedDonut() {
    if (hunger < 100) {
        hunger += 10;
        if (hunger >= 100)
            hunger = 100;
        updateInfo();
    }
    if (health < 100) {
        health += 5;
        if (health >= 100)
            health = 100;
        updateInfo();
    }
}
loadInfo();
pizzaButton.addEventListener('click', feedPizza);
donutButton.addEventListener('click', feedDonut);
setInterval(() => {
    updateInfo();
}, 10000);
