console.log("Pet Spoon Game Loaded!");
//get html elements
var button = document.getElementById('feed');
var pizzaButton = document.getElementById('pizza');
var donutButton = document.getElementById('donut');
var info = document.getElementById('info');
var container = document.getElementById('container');
var diedcontainer = document.getElementById('diedcontainer');
var feedDiv = document.getElementById('feedwhat');
var playAgainButton = document.getElementById('again');
button.addEventListener('click', showFeedOptions);
//Play again
playAgainButton.addEventListener('click', playAgain);
function playAgain() {
    health = 100;
    hunger = 100;
    localStorage.setItem("health", health.toString());
    localStorage.setItem("hunger", hunger.toString());
    diedcontainer.style.display = 'none';
    container.style.display = 'block';
    updateInfo();
}
//info
var health = Number(localStorage.getItem("health")) || 100;
var hunger = Number(localStorage.getItem("hunger")) || 100;
function updateInfo() {
    if (hunger <= 0) {
        if (health <= 0) {
            if (container) {
                container.style.display = 'none';
            }
            if (diedcontainer) {
                diedcontainer.style.display = 'block';
            }
        }
        health--;
    }
    else {
        hunger--;
    }
    if (info) {
        info.innerText = "Health: ".concat(health, " | Hunger: ").concat(hunger);
    }
    localStorage.setItem("health", health.toString());
    localStorage.setItem("hunger", hunger.toString());
}
function loadInfo() {
    if (info) {
        info.innerText = "Health: ".concat(health, " | Hunger: ").concat(hunger);
        if (health <= 0) {
            if (container) {
                container.style.display = 'none';
            }
            if (diedcontainer) {
                diedcontainer.style.display = 'block';
            }
        }
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
setInterval(function () {
    updateInfo();
}, 10000);
