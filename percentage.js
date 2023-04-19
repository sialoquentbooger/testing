var canvas;
var graphics;
var pixelSize;
window.onload = init;

function draw(){
    //makes the canvas go from -10 to 10 left to right and down to up
    //applyWindowToViewportTransformation(-20, 20, -10, 10, true);

    var centerX = canvas.width / 2; 
    var centerY = canvas.height / 2; 

    var radius = canvas.width / 4;
    var percentage = 60 * 3.6; 

    // I think these values are the angles for the bottom half - otherwise use other values
    var startingAngle = -Math.PI/2;
    var endingAngle = (-Math.PI/2) + (percentage * -Math.PI/180);
    var counterclockwise = true;


   

    graphics.beginPath();
    graphics.lineWidth = 4;
    graphics.strokeStyle = "#7ed957";
    graphics.arc(centerX, centerY, radius, startingAngle,
        endingAngle, counterclockwise);
    graphics.stroke();

    endingAngle = 2 * Math.PI;
    startingAngle = 0;
    radius = radius - 5;

    graphics.beginPath();
    graphics.lineWidth = 2;
    graphics.strokeStyle = "#919191";
    graphics.arc(centerX, centerY, radius, startingAngle,
        endingAngle, counterclockwise);
    graphics.stroke();

    radius = radius + 10;

    graphics.beginPath();
    //graphics.lineWidth = 2;
    //graphics.strokeStyle = "#919191";
    graphics.arc(centerX, centerY, radius, startingAngle,
        endingAngle, counterclockwise);
    graphics.stroke();


    //THIS IS WHERE BAR GRAPHIC BEGINS
    graphics.beginPath();
    var startX = 5; 
    var startY = 5; 
    graphics.roundRect(startX, startY, 300, 50, [20]);
    //graphics.fillRect(startX, startY, 150, 100);
    graphics.stroke();

    graphics.beginPath();
    startX = startX + 5; 
    startY = startY + 5; 
    var width = .6 * 290;
    graphics.fillStyle = "#7ed957";
    graphics.roundRect(startX, startY, width, 40, [20]);
    //graphics.fillRect(startX, startY, 150, 100);
    graphics.stroke();
    graphics.fill();
    
    

}

function applyWindowToViewportTransformation(left,right,bottom,top,preserveAspect) {
    let displayAspect, windowAspect;
    let excess;
    let pixelwidth, pixelheight;
    if (preserveAspect) {
        // Adjust the limits to match the aspect ratio of the drawing area.
        displayAspect = Math.abs(canvas.height / canvas.width);
        windowAspect = Math.abs(( top-bottom ) / ( right-left ));
        if (displayAspect > windowAspect) {
            // Expand the viewport vertically.
            excess = (top-bottom) * (displayAspect/windowAspect - 1);
            top = top + excess/2;
            bottom = bottom - excess/2;
        }
        else if (displayAspect < windowAspect) {
            // Expand the viewport vertically.
            excess = (right-left) * (windowAspect/displayAspect - 1);
            right = right + excess/2;
            left = left - excess/2;
        }
    }
    graphics.scale( canvas.width / (right-left), canvas.height / (bottom-top) );
    graphics.translate( -left, -top );
    pixelwidth =  Math.abs(( right - left ) / canvas.width);
    pixelheight = Math.abs(( bottom - top ) / canvas.height);
    pixelSize = Math.max(pixelwidth,pixelheight);
}  // end of applyWindowToViewportTransformation()

function init(){
    try{
        canvas = document.getElementById("canvas1");
        graphics = canvas.getContext("2d");
    }catch(e) {
        //put something here to display when something goes wrong
    }
    draw();
}