var showHelp;
var pen;
var state, selectedColor;
var playerName, customColor;
var start, redColor, greenColor, blueColor, blackColor;
var playerInfo;
var index;

function setup(){
    if(windowWidth > windowHeight){createCanvas(windowHeight, windowHeight);}
    else{createCanvas(windowWidth, windowWidth);}


    db = firebase.database();


    showHelp = true;

    state = "joining";


    playerName = createInput("Insert Name");
    playerName.position(width*0.365, height*0.4);
    playerName.size(width*0.27, height*0.05);
    playerName.style('font-size', height*0.05+'px');

    customColor = createInput("Insert Hex Code");
    customColor.position(width*0.32, height*0.5)
    customColor.size(width*0.36, height*0.05);
    customColor.style('font-size', height*0.05+'px');

    start = createButton("Start");
    start.mousePressed();
    start.position(width*0.35, height*0.75);
    start.size(width*0.3,height*0.1);
    start.style('font-size', height*0.08+'px');

    redColor = createColor(100, 100, "#ff00ff");
}
function draw(){
    if(windowWidth > windowHeight){
        if(windowHeight != height){
            createCanvas(windowHeight, windowHeight);


            playerName.position(width*0.365, height*0.4);
            playerName.size(width*0.27, height*0.05);
            playerName.style('font-size', height*0.05+'px');

            customColor.position(width*0.32, height*0.5);
            customColor.size(width*0.36, height*0.05);
            customColor.style('font-size', height*0.05+'px');

            start.position(width*0.35, height*0.75);
            start.size(width*0.3,height*0.1);
            start.style('font-size', height*0.08+'px');
        }
    }else{
        if(windowWidth != width){
            createCanvas(windowWidth, windowWidth);


            playerName.position(width*0.365, height*0.4);
            playerName.size(width*0.27, height*0.05);
            playerName.style('font-size', height*0.05+'px');

            customColor.position(width*0.32, height*0.5)
            customColor.size(width*0.36, height*0.05);
            customColor.style('font-size', height*0.05+'px');

            start.position(width*0.45, height*0.75);
            start.size(width*0.1,height*0.1);
            start.style('font-size', height*0.035+'px');
        }
    }

    background(225, 255, 255);


    if(showHelp){
        fill(0);
        textSize(height/30);
        text("Click and drag to draw.", 5, height/60+10);
        text("Press BACKSPACE to undo.", 5, height/20+10);
        text("Press R to reset.", 5, height/12+10);
        text("Press H to see this later.", 5, height/8.5+10);
    }


    if(state != "joining"){
        updateState();
    }

    switch(state){
        case "joining":
            if(selectedColor){fill(selectedColor);}
            else{noFill();}
            circle(width*0.2, height*0.8, width*0.2);


            if(customColor.value().slice(0, 1) === "#" && customColor.value().length === 7){
                selectedColor = customColor.value();
            }
        break;
        case "drawing":
            pen.position = {x: mouseX/width, y: mouseY/height};

            pen.render();
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
        case "joining":
            switch(keyCode){
                default:
                    console.log(key, keyCode);
                break;
            }
        break;
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