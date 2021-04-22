var mouseDown;
var pen;
var state;

function setup(){
    createCanvas(600, 600);


    db = firebase.database();


    mouseDown = false;


    pen = new Pen(300, 300, "red");
}
function draw(){
    background(225, 255, 255);


    updateState();


    pen.position = {x: mouseX, y: mouseY};

    pen.render();
}


function mousePressed(){
    mouseDown = true;
}
function mouseReleased(){
    mouseDown = false;
}

function keyPressed(){
    switch(keyCode){
        case 82:
            pen.drawn = [];
            break;
        default:
            console.log(key, keyCode);
            break;
    }
}