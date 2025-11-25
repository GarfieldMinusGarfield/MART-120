// x and y for my character
var characterX = 100;
var characterY = 100;

// define the key codes for each letter
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// shape and shape color variables
var shapeX = 30;
var shapeY = 50;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

var shapeRs = [];
var shapeGs = [];
var shapeBs = [];

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
var mouseShapeR = 120;
var mouseShapeG = 130;
var mouseShapeB = 140;

function setup() {
    createCanvas(500, 600);
    // random speed when it starts
    for (var i = 0; i < 50; i++) {
        // random speed for shapes
        var sx = Math.floor(Math.random() * 7) - 3;
        if (sx === 0) sx = 1;
        var sy = Math.floor(Math.random() * 7) - 3;
        if (sy === 0) sy = 1;
        shapeXSpeeds[i] = sx;
        shapeYSpeeds[i] = sy;
        shapeXs[i] = getRandomNumber(500);
        shapeYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);
        // random color for shapes
        shapeRs[i] = Math.floor(Math.random() * 256);
        shapeGs[i] = Math.floor(Math.random() * 256);
        shapeBs[i] = Math.floor(Math.random() * 256);
    }

    createCharacter(200, 350);
}

function draw() {
    background(120, 45, 78);
    stroke(0);
    fill(0);

    // call createBorders function
    createBorders(10);

    // exit message
    textSize(16);
    text("EXIT", width - 50, height - 50)

    //createCharacter(200,350);
    drawCharacter();
    characterMovement();


    // draw the shapes with random colors
    for (var i = 0; i < shapeXs.length; i++) {
        fill(shapeRs[i], shapeGs[i], shapeBs[i]);
        // draw the shape
        circle(shapeXs[i], shapeYs[i], diameters[i]);




        // move the shape
        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];
        // check to see if the shape has gone out of bounds
        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }
    }
    // check to see if the character has left the exit
    if (characterX > width && characterY > width - 50) {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win... but with arrays this time!", width / 5 - 50, height / 5 - 50);
    }
}

function characterMovement() {
    // handle the keys
    if (keyIsDown(w)) {
        characterY -= 10;
    }
    if (keyIsDown(s)) {
        characterY += 10;
    }
    if (keyIsDown(a)) {
        characterX -= 10;
        console.log("movement: " + characterX);
    }
    if (keyIsDown(d)) {
        characterX += 10;
    }
}

function createCharacter(x, y) {
    characterX = x;
    characterY = y;
}

function drawCharacter() {
    fill(23, 40, 123);
    circle(characterX, characterY, 25);
}

function createBorders(thickness) {
    // top border
    rect(0, 0, width, thickness);
    // left border
    rect(0, 0, thickness, height);
    // bottom border
    rect(0, height - thickness, width, thickness);
    // right upper border
    rect(width - thickness, 0, thickness, height - 50);
}

function mouseClicked() {
    // create moving shape
    shapeXs.push(mouseX);
    shapeYs.push(mouseY);
    diameters.push(25);
    
    //random shape color for mouse click shape
    shapeRs.push(Math.floor(Math.random() * 256));
    shapeGs.push(Math.floor(Math.random() * 256));
    shapeBs.push(Math.floor(Math.random() * 256));
    // random speed for mouse click shape
    var sx = Math.floor(Math.random() * 7) - 3; 
    if (sx === 0) sx = 1;
    var sy = Math.floor(Math.random() * 7) - 3; 
    if (sy === 0) sy = 1;
    shapeXSpeeds.push(sx);
    shapeYSpeeds.push(sy);
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}