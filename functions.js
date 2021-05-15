function createColor(x, y, color){
    var button = createButton("");
    button.position(x, y);
    button.size(0.15*width, 0.15*height);
    button.style('background-color', ''+color);
    button.mousePressed(()=>{selectedColor = button.color});
    button.color = color;
    return(button);
}