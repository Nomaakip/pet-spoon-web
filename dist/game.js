"use strict";
console.log("Pet Spoon Game Loaded!");
const button = document.getElementById('feed');
const info = document.getElementById('info');
const container = document.getElementById('container');
const died = document.getElementById('died');
let health = 100;
let hunger = 100;
if (button) {
    button.addEventListener('click', () => {
        console.log('u feed pet spoon yaya');
    });
}
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
        info.innerText = `health: ${health} | hunger: ${hunger}`;
    }
}
setInterval(() => {
    updateInfo();
}, 10);
