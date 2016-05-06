var catOpen = document.getElementById("catOpen");
var catClosed = document.getElementById("catClosed");
var DEFAULT_DISPLAY = catOpen.style.display;

catOpen.addEventListener("mousedown", closeTheCatsEyes);
catClosed.addEventListener("mouseup", openTheCatsEyes);

function closeTheCatsEyes() {
    // make the catOpen display disappear
    catOpen.style.display = 'none';

    // make the catClosed appear
    catClosed.style.display = DEFAULT_DISPLAY;
}

function openTheCatsEyes() {
    catOpen.style.display = DEFAULT_DISPLAY;
    catClosed.style.display = 'none';
}