class Pen{
    constructor(x, y, color){
        this.position = {x: x, y: y};
        this.lastPosition = {x: x, y: y};

        this.color = color;


        this.drawn = [];


        this.down = false;
    }

    render(){
        if(this.position.x != this.lastPosition.x && this.position.y != this.lastPosition.y){
            if(this.down){
                this.drawn.push({x1: this.lastPosition.x, y1: this.lastPosition.y, x2: this.position.x, y2: this.position.y});
            }


            this.lastPosition = {x: this.position.x, y: this.position.y};
        }


        push();
          Pen.draw(this.drawn, this.color);


          fill(this.color);
          strokeWeight(1);
          stroke(0);

          circle(this.position.x*width, this.position.y*height, width/60);
        pop();
    }


    static draw(lines, color){
        for(var drawing in lines){
            strokeWeight(width/200);
            stroke(color);
            line(lines[drawing].x1*width, lines[drawing].y1*height, lines[drawing].x2*width, lines[drawing].y2*height);
        }
    }
}