var catOpen = document.getElementById("catOpen");
var catClosed = document.getElementById("catClosed");
var DEFAULT_DISPLAY = catOpen.style.display;

/* A "listener" is a function that you create and give to the program.
 It "listens" for an event of your choosing that happen on an HTML
 element that you choose. For example, here we listen for a "mousedown"
 event on the image with the cat's eyes open, and when that event happens
 the function to close the cat's eyes fires.
 */
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