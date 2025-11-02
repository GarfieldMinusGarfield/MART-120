var o = 90;
var p = 300;
var q = 238;
var r = 176;
var s = 120;
var t = 250;
var u = 300;
var v = 100;
var w = 214;
var x = 380;
var y = 380;
var movement = 9;
var ChangeDirection;
var ospeed = 4;
var pspeed = 8;
var size = 10;
var sizeDirection = 2;
var count = 0;
function setup()
{
    createCanvas(600, 430);
    movement = floor(random() * 10) + 1;
}
ChangeDirection = false

function draw()
    {
        background(153, 0, 61);
        fill(255, 153, 51)
        strokeWeight(3)
       
        o = o + ospeed;
        p = p + pspeed;

        //circle code
        circle(u, v, 150)
        v++;
        if(v >=430 || v <=30)
        {
            ChangeDirection = true
        }
        v += movement


        //point code
        strokeWeight(25);
        point(264, 90)
       
        point(332, 90)
        strokeWeight(4)
        fill(255, 140, 26);
        triangle(294, 110, 297, 100, 300, 110)
        strokeWeight(3)
        line(252, 70, 275, 65)
        line(320, 74, 343, 74)

        //body
        fill(0, 45, 179)
        rect(q, r, s, t)
        r - 1;
        if(r>=430 || r<=0)
        {
            ChangeDirection = true
        }
        r += movement


        //hands
        fill(300, 100, 150)
        ellipse(x, y, 60, 33);
        x - 1;
        if(x >=600 || x <=0)
        {
            movement*=-1
            ChangeDirection = true;
        }
        x += movement
        ellipse(w, y, 60, 33)
        w++;
        if(w >=600 || w <=0)
        {
            movement*=-1
            ChangeDirection = true;
        }

        w += movement

        //stars
        fill(255, 255, 102)
        square(25,14,5)

        square(o,p,5)
        o++;
        p++;
        if ((o >= 600) || (o <= 0)) {
    ospeed = ospeed * -1;
  }

        if ((p >= 430) || (p <= 0)) {
    pspeed = pspeed * -1;
  }

        square(72,170,5)
        square(390,132,5)
        square(120,50,5)
        square(43,75,5)
        square(100,130,5)
        square(200,160,5)
        square(173,250,5)
        square(160,114,5)
        square(84,16,5)
        square(548,22,5)
        square(507,37,5)
        square(410,145,5)
        square(462,100,5)
        square(370,208,5)
        square(559,200,5)
        square(587,368,5)
        square(520,425,5)

        //title text
        textFont('Snell')
        textSize(size);
        size += sizeDirection;
        count++;
        if(count > 5)
        {
            sizeDirection *=-1
            count = 0;
        }

        text("Ce n'est pas une personne, by Nohl Griffin", 20, 400)
    }

