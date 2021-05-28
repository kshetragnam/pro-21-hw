var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound(music.mp3);
}


function setup(){
    canvas = createCanvas(1000,1000);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(590,580,200,30);
    block3.shapeColor = "red";
    
    block4 = createSprite(885,580,200,30);
    block4.shapeColor = "pink";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.x = World.mouseX;
    ball.y = World.mouseY;
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        ball.x = 0;
        ball.y = 0;
        music.stop();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
        music.play();
    }


    if(block4.isTouching(ball)){
        ball.shapeColor = "orange";
        ball.x = 0;
        ball.y = 0;
        music.stop();
    }

    drawSprites();
}
