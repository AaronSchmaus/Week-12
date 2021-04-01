// x and y for my character
var characterX = 50;
var characterY = 10;
const newLocal = 20;
// define the key codes for each letter
var w = 87; 
var s = 83;
var a= 65;
var d = 68;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(500, 600);
    // get a random speed when the it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    createCharacter(10,10);
}

function draw()
{
    background(100,100,100);
    stroke(0);
    fill(0);
    
    // call createBorders function
    createBorders(5);

    // exit message
    textSize(16);
    text("EXIT", width-50,height-50)

    //createCharacter(100, 100);
    drawCharacter();
    characterMovement();


    // potential enemy
    fill(120,45,14);
    // draw the shape
    square(shapeX, shapeY, 10);

     // get a random speed when the it first starts
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move the shape
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    // check to see if the shape has gone out of bounds
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
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }

    


    // check to see if the character has left the exit
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }
    // check to see if the character has gone out of bounds
    if(characterX > width && characterY<height-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("Out of Bounds!", width/2-50, height/2-50);
    }

    if(characterX < 0 )
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("Out of Bounds!", width/2-50, height/2-50);
    }

    if(characterY < 0 )
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("Out of Bounds!", width/2-50, height/2-50);
    }

    if(characterY > height )
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("Out of Bounds!", width/2-50, height/2-50);
    }

    // create the shape based on the mouse click
    fill(120,75,190);
    square(mouseShapeX, mouseShapeY, 50);
}

function characterMovement()
{
    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
        console.log("movement: " + characterX);
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }
}
function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
    //character
    
   // circle(characterX,characterY,25);
}

function drawCharacter()
{
    fill(23,40,123);
    square(characterX,characterY,25);
}
function createBorders(thickness)
{
    // top border
    rect(0,0,width,thickness);
    // left border
    rect(0,0,thickness,height);
    // bottom border
    rect(0, height-thickness,width, thickness);
    // right upper border
    rect(width-thickness,0,thickness,height-50);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
/*
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        characterX -= 10;
    } 
    else if (keyCode === RIGHT_ARROW) {
        characterX += 10;
    }
    else if (keyCode === UP_ARROW) {
        characterY -= 10;
    }
    else if (keyCode === DOWN_ARROW) {
        characterY += 10;
    }
  }
  */
