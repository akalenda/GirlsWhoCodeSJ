/**
 * A simple script that, when a point on the canvas is clicked,
 * it will draw concentric circles around the point.
 *
 * There are better, cleaner, and more efficient ways to write
 * this code. But this way is fairly straightforward.
 */

var canvasElement = document.getElementById('canvasNumberOne');
canvasElement.addEventListener('mousedown', drawManyCircles, false);

function drawManyCircles(event){
var x = event.pageX - canvasElement.offsetLeft;
var y = event.pageY - canvasElement.offsetTop;
for (var r = 1; r <= 100; r += 5) {
	var delay = r * 2;
	drawCircle(canvasElement, x, y, r, delay);
}

/**
  * A separate function for drawing a circle
  */
function drawCircle(canvas, x, y, radius, delayInMilliseconds){
    setTimeout(function(){
		var context = canvas.getContext("2d");
		context.beginPath();
		context.arc(x, y, radius, 0, 2 * Math.PI, true);
		context.lineWidth = 1;
		context.strokeStyle = 'black';
		context.stroke();
	}, delayInMilliseconds);
}
