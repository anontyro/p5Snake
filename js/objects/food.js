function Food(){
 
    const cols = floor(width/scale);
    const rows = floor(height/scale);
    this.food = createVector(floor(random(cols)), floor(random(rows)) );
    

    this.show =()=>{
        fill(255, 0, 100);
        rect(this.food.x, this.food.y, scale, scale);
    }


}