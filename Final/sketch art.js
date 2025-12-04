//variables for art piece
var starXPos = [];
var starYPos = [];
var starRadius = [];
var starYSpeed = [];
var starXSpeed = []; 
var starXSpeeds = []; 
var starBaseAlpha = []; // twinkle effect variable!
var twinklePhase = []; // another twinkle effect variable but for phasing
var NUM_STARS = 80; 
// dark squares spawned by clicks
var squareX = [];
var squareY = [];
var squareSize = [];
var squareVX = [];
var squareVY = [];
function setup() {
    createCanvas(600, 430);
    //star code
    for (var i = 0; i < NUM_STARS; i++) {
        starXPos[i] = Math.floor(Math.random() * width);
        starYPos[i] = Math.floor(Math.random() * height);
        starRadius[i] = Math.floor(Math.random() * 8) + 4; 
        starYSpeed[i] = Math.floor(Math.random() * 4) + 1; 
        // stars move diagonally
        var sx = Math.floor(Math.random() * 5) - 2;
        if (sx === 0) sx = 1;
        starXSpeed[i] = sx;
        // twinkle effect settings
        starBaseAlpha[i] = Math.floor(Math.random() * 100) + 155; 
        twinklePhase[i] = Math.random() * TWO_PI;
    }
}

function draw() {
    // aurora borealis gradient 
    var c1 = color(0, 0, 0);
    var c2 = color(30, 180, 120);
    var c3 = color(120, 40, 180);
    for (var gy = 0; gy < height; gy++) {
        var t = gy / height;
        var col;
        if (t < 0.5) {
            col = lerpColor(c1, c2, t / 0.5);
        } else {
            col = lerpColor(c2, c3, (t - 0.5) / 0.5);
        }
        stroke(col);
        line(0, gy, width, gy);

    text("'Starry Night' if it sucked, Nohl Griffin", 25, 25);
    }

    noStroke();

    // draw the stars and make 'em move around
    for (var i = 0; i < starXPos.length; i++) {
        // twinkle phase and alpha variable stuff
        twinklePhase[i] += 0.08;
        var twinkle = 0.6 + 0.4 * Math.sin(twinklePhase[i]);
        var alpha = Math.floor(starBaseAlpha[i] * twinkle);
        fill(255, 220, 80, alpha);

        drawStar(starXPos[i], starYPos[i], starRadius[i]);

        // horizontal movement and wrapping effect
        if (starXPos[i] + starXSpeed[i] > width) {
            starXPos[i] = 0;
        } else if (starXPos[i] + starXSpeed[i] < 0) {
            starXPos[i] = width;
        } else {
            starXPos[i] += starXSpeed[i];
        }

        // vertical movement and wrapping effect
        if (starYPos[i] + starYSpeed[i] > height) {
            starYPos[i] = 0;
        } else {
            starYPos[i] += starYSpeed[i];
        }
    }

    // dark square code for mouse click function
    rectMode(CENTER);
    fill(20);
    for (var j = squareX.length - 1; j >= 0; j--) {
        rect(squareX[j], squareY[j], squareSize[j], squareSize[j]);
        // update
        squareX[j] += squareVX[j];
        squareY[j] += squareVY[j];
        if (squareX[j] < -squareSize[j] || squareX[j] > width + squareSize[j] || squareY[j] < -squareSize[j] || squareY[j] > height + squareSize[j]) {
            squareX.splice(j, 1);
            squareY.splice(j, 1);
            squareSize.splice(j, 1);
            squareVX.splice(j, 1);
            squareVY.splice(j, 1);
        }
    }
}

// draw star function
function drawStar(cx, cy, radius) {
    // couldnt figure out how to draw an actual star, so I just used a glowing rectangle cross thing, woe is me
    rectMode(CENTER);
    ellipse(cx, cy, radius * 0.6, radius * 0.6);
    // rectagle beam code
    var beamW = radius * 0.22;
    var beamH = radius * 1.4;
    var offset = radius * 0.6 + beamH / 2;
    // up
    rect(cx, cy - offset, beamW, beamH, radius * 0.1);
    // right
    rect(cx + offset, cy, beamH, beamW, radius * 0.1);
    // down
    rect(cx, cy + offset, beamW, beamH, radius * 0.1);
    // left
    rect(cx - offset, cy, beamH, beamW, radius * 0.1);
}

// square jumpscare AAAHHHHHH
function mouseClicked() {
    var burst = 8;
    for (var b = 0; b < burst; b++) {
        squareX.push(mouseX);
        squareY.push(mouseY);
        squareSize.push(Math.floor(Math.random() * 10) + 6); 
        var angle = Math.random() * TWO_PI;
        var speed = Math.random() * 8 + 8; 
        squareVX.push(Math.cos(angle) * speed);
        squareVY.push(Math.sin(angle) * speed);
    }
}

