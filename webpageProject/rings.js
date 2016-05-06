/**
 * A simple script that, when a point on the canvas is clicked,
 * it will draw concentric circles around the point.
 *
 * There are better, cleaner, and more efficient ways to write
 * this code. But this way is fairly straightforward.
 */

/*
 * First we need to get the canvas we want to draw on.
 * As you may recall, we created it in the HTML page with a <canvas> tag.
 * The tag tells the browser to create what is called an "element",
 * so we have our program ask the browser for that:
 */
var canvasElement = document.getElementById('canvasNumberOne');

/*
 * Now, we want to have our program do something when we click on the
 * canvas. We will need to use something called an "event listener".
 * It "listens" to the element, and when a certain something happens,
 * the element will invoke the function we give it.
 *
 * So, we tell the canvas element that we want to add an event listener.
 * The event we want is "mousedown", for when someone pushes the mouse button
 * down. Then we give it a function. We can use any function we want, so I
 * will give it a function called "drawManyCircles".
 */
canvasElement.addEventListener('mousedown', drawManyCircles, false);

/*
 * Of course, that function needs to be created! So, I will do so here.
 * I make sure to put some kind of variable in its argument list.
 * When a mouse click happens, the canvas will send an object describing
 * the event -- the mouse click -- to this function. So I'm going to call
 * that variable "event".
 */
function drawManyCircles(event) {
    /* The event object has all sorts of useful information
     about what happened. What I'm interested in is where the
     user clicked. So I'm going to extract the X-Y coordinates.
     */
    var x = event.pageX - canvasElement.offsetLeft;
    var y = event.pageY - canvasElement.offsetTop;
    /* Something you might notice is that the coordinates it
     gives are for the ENTIRE webpage: pageX, pageY. We want
     the coordinates to be relative to the top-left corner
     of our canvas, which is why I subtract those offsets.
     */
    /* Next, I'm going to draw the circles, centered on
     the point of the mouse click.

     It's going to be a lot of circles, so we want to
     use a loop.

     I could set up the loop so that it creates a certain
     number of circles. Maybe 10 circles. Then it would look like:

     for (var count = 0; count <= 10; count += 1)

     But I want it to draw circles until they are a certain size.
     So I use "r" for radius, start it at radius 1, and go until the
     radius is over 100, in increments of 5:
     */
    for (var r = 1; r <= 100; r += 5) {
        var delay = r * 2;
        drawCircle(canvasElement, x, y, r, delay);
    }
}

/**
 * A separate function for drawing a circle.
 * In this function, I am going to include documentation.
 * It's not something you have to do, but it can help others
 * understand your code, and it can help you remember when you
 * look at it in the future.
 *
 * @param canvas {HTMLCanvasElement}
 * @param x {Number} - the x-coordinate where the circle will be centered
 * @param y {Number} - the y-coordinate where the circle will be centered
 * @param radius {Number} - How far from its center the arc of the circle will be drawn
 * @param delayInMilliseconds {Number} - How long to wait before drawing the circle
 */
function drawCircle(canvas, x, y, radius, delayInMilliseconds) {
    /* I want it to be animated, so that the circles don't appear all
     at once. So I set a timeout, using the delay I passed in as an
     argument. After the milliseconds have been passed, the function
     I give it will be called.
     */
    setTimeout(seriouslyDrawThatCircleNow, delayInMilliseconds);

    /* And here I create the function.
     */
    function seriouslyDrawThatCircleNow() {
        /* I start by getting the context of the canvas.
         This is an object that has information about
         how and where to draw... don't worry about it too much.
         */
        var context = canvas.getContext("2d");
        /* I start a new path. This is a math term; lines and
         curves together make a "path".
         */
        context.beginPath();
        /* Now I draw the curve of the circle. It's a perfect arc,
         centered at the x-y coordinates, and with the radius I
         give. It starts at 0 radians, and continues around to
         2-pi radians, making a complete circle.
         */
        context.arc(x, y, radius, 0, 2 * Math.PI, true);
        /* The path won't show up if the line width stays at zero.
         */
        context.lineWidth = 1;
        /* And if there's no color, it won't show up no matter
         how wide it is.
         */
        context.strokeStyle = 'black';
        /* The path is ready! Now we apply the stroke, and it draws
         out the path we described.
         */
        context.stroke();
    }
}
