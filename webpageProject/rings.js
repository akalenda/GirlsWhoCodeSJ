/**
 * A simple script that, when a point on the canvas is clicked,
 * it will draw concentric circles around the point.
 *
 * There are better, cleaner, and more efficient ways to write
 * this code. But this way is fairly straightforward.
 */

(function()

  var canvasElement = document.getElementById('canvasNumberOne');
  canvasElement.addEventListener('click', drawManyCircles, false);
  
  function drawManyCircles(event){
    var x = event.pageX - canvasElement.offsetLeft;
    var y = event.pageY - canvasElement.offsetTop;
  }

)();

/**
  * A separate function for drawing a circle
  */
function drawCircle(canvas){
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(200, 200, 93, Math.PI / 2, Math.PI, true);
    mainContext.lineWidth = 1;
    mainContext.strokeStyle = 'black';
    mainContext.stroke();
}
