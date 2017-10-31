function Food(){
 
    const cols = floor(width/scale);
    const rows = floor(height/scale);

    this.pickLocation =()=>{
        this.food = createVector(floor(random(cols)), floor(random(rows)) );
        this.food.mult(scale);
    }





    this.show =()=>{
        fill(255, 0, 100);
        rect(this.food.x+(scale/4), this.food.y+(scale/4), scale/2, scale/2);
    }


}