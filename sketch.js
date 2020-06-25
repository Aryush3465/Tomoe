var Tomoe;
var Hikaru;
var Rena;
var Yagami;

var form, game ;

function preload(){
    formB = loadImage("images/Formback.png");
}
function setup(){
    createCanvas(500,500);
    Tomoe.shapeColor = "white";
    Hikaru.shapeColor = "blue";
    Rena.shapeColor = "red";
    Yagami.shapeColor = "orange";
    form = new Form ;
}

function draw(){
    background("black");
    if(keyDown(LEFT_ARROW)){
        changePosition(-4,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(4,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-4);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+4);
    }
//    Rena.x = Tomoe.x + 15;
//    Rena.y = Tomoe.y + 26;
    
//    Hikaru.x = Tomoe.x - 15;
//    Hikaru.y = Tomoe.y + 25;

//    Yagami.x = Tomoe.x + 0;
//    Yagami.y = Tomoe.y - 25;

    drawSprites();
}

function changePosition(x,y){
    Tomoe.x = Tomoe.x + x;
    Tomoe.y = Tomoe.y + y;
}
//function changeNPCPosition(x,y){
//    if(keyDown(LEFT_ARROW))
//}