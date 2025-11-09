//x and y for character
var characterX = 100;
var characterY = 100;

//character key codes
var w = 87;
var s = 83;
var a = 65;
var d = 68;
// shape dimension
var shapeV = 32;
var shapeW = 64;
var shapeVSpeed;
var shapeWSpeed;
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

//mouse click event shape
var mouseShapeX;
var mouseShapeY;

function setup()
    {
        createCanvas(500,600);
        //random speed
        shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    }
    function draw()
    {
        background(130,240,170);
        stroke(0);
        fill(0);
        //top border
        rect(0,0,width,10);
        //left border
        rect(0,0,10,height);
        //bottom border
        rect(0,height-10,width,10);
        //right upper border
        rect(width-10,0,10,height-50);

        //EXIT message
        textSize(20);
        text("EXIT", width-70,height-80);

        //character
        fill(23,35,120)
        circle(characterX,characterY,25);

        //key handling
        if(keyIsDown(w))
        {
            characterY -= 5;
        }
         if(keyIsDown(s))
        {
            characterY += 5;
        }
         if(keyIsDown(a))
        {
            characterX -= 5;
        }
         if(keyIsDown(d))
        {
            characterX += 5;
        }


           //enemy 1
           fill(54, 165, 654);
           circle(shapeV, shapeW, 31);
           
           //random speed
           shapeVSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
           shapeWSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

           //move shape
           shapeV -= shapeVSpeed;
           shapeW += shapeWSpeed;

           //shape OOB check
           if(shapeV > width)
            {
                shapeV = 0;
            }
            if(shapeV < 0)
            {
                shapeV = width;
            }
            if(shapeW > height)
            {
                shapeW=0;
            }
            if(shapeW < 0)
            {
                shapeW=height;
            }

           //enemy 2
           fill(5, 320, 65);
           circle(shapeX, shapeY, 16);
        
            //random speed
            shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
            shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

            //move shape
            shapeX += shapeXSpeed;
            shapeY += shapeYSpeed;
            //shape OOB check
            if(shapeX > width)
            {
                shapeX = 0;
            }
            if(shapeX < 0)
            {
                shapeX = width;
            }
            if(shapeY > height)
            {
                shapeY=0;
            }
            if(shapeY < 0)
            {
                shapeY=height;
            }

            //character EXIT check
            if(characterX > width && characterY > width-50)
            {
                fill(0);
                stroke(5);
                textSize(30);
                text("Congrats, You Win!!", width/2-60, height/2-60);
            }

            //Create MouseClick shape
            fill(50,60,70);
            circle(mouseShapeX,mouseShapeY,34);

         }
         
         function mouseClicked()
         {
            mouseShapeX = mouseX
            mouseShapeY = mouseY
         }
