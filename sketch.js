var showHelp;
var pen;
var state;
var playerName, customColor;
var start, cyan, red, black;

function setup(){
    if(windowWidth > windowHeight){createCanvas(windowHeight, windowHeight);}
    else{createCanvas(windowWidth, windowWidth);}


    db = firebase.database();


    showHelp = true;


    playerName = createInput("Insert Name");
    playerName.position(width*0.35, height*0.4);
    playerName.size(width*0.3, height*0.05);
    playerName.style('font-size', height*0.05+'px');

    start = createButton("Start");
    start.position(width/2, height/1.5);
    start
}
function draw(){
    //console.log(height, windowHeight);
    if(windowWidth > windowHeight){
        if(windowHeight != height){
            createCanvas(windowHeight, windowHeight);
            playerName.position(width*0.35, height*0.4);
            playerName.size(width*0.3, height*0.05);
            playerName.style('font-size', height*0.05+'px');
        }
    }else{
        if(windowWidth != width){
            createCanvas(windowWidth, windowWidth);
            playerName.position(width*0.35, height*0.4);
            playerName.size(width*0.3, height*0.05);
            playerName.style('font-size', height*0.05+'px');
        }
    }

    background(225, 255, 255);


    if(showHelp){
        textSize(height/30);
        text("Click and drag to draw.", 5, height/60+10);
        text("Press BACKSPACE to undo.", 5, height/20+10);
        text("Press R to reset.", 5, height/12+10);
        text("Press H to see this later.", 5, height/8.5+10);
    }


    updateState();

    switch(state){
        case "drawing":
            pen.position = {x: mouseX/width, y: mouseY/height};

            pen.render()
        break;
    }
}


function mousePressed(){
    switch(state){
        case "drawing":
            pen.down = true;
        break;
    }
}
function mouseReleased(){
    switch(state){
        case "drawing":
            pen.down = false;
        break;
    }
}

function keyPressed(){
    switch(state){
        case "drawing":
            switch(keyCode){
                case 8:
                    pen.drawn.pop();
                break;
                case 72:
                    showHelp = true;
                break;
                case 82:
                    pen.drawn = [];
                break;
                default:
                    console.log(key, keyCode);
                break;
            }
        break;
    }
}
function keyReleased(){
    switch(state){
        case "drawing":
            switch(keyCode){
                case 72:
                    showHelp = false;
                break;
            }
        break;
    }
}