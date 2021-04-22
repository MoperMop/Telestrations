class Pen{
    constructor(x, y, color){
        this.position = {x: x, y: y};
        this.lastPosition = {x: x, y: y};

        this.color = color;


        this.drawn = [];
    }

    render(){
        if(this.position != this.lastPosition){
            if(mouseDown){
                this.drawn.push({x1: this.lastPosition.x, y1: this.lastPosition.y, x2: this.position.x, y2: this.position.y});
            }


            this.lastPosition = {x: this.position.x, y: this.position.y};
        }


        push();
          Pen.draw(this.drawn, this.color);


          fill(this.color);
          strokeWeight(1);
          stroke(0);

          circle(this.position.x, this.position.y, width/60);
        pop();
    }


    static draw(lines, color){
        for(var drawing in lines){
            strokeWeight(3);
            stroke(color);
            line(lines[drawing].x1, lines[drawing].y1, lines[drawing].x2, lines[drawing].y2);
        }
    }
}