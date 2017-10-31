
function Snake(){
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.difficulty = 5;
    this.total = 0;
    this.tail = [];

    this.direction =(x,y)=>{
        this.xspeed = x;
        this.yspeed = y;
    }

    this.difficultyIncrease = () =>{
        if(!this.difficulty <= 1){
            this.difficulty--;            
        }
    }

    this.eat =(pos)=>{
        let distance = dist(this.x, this.y, pos.food.x, pos.food.y);
        // console.log(distance);
        if(distance < 10){
            this.total++;
            return true;
        }else{
            return false;
        }
    }

    this.death = () =>{
        for(let i=0; i < this.tail.length; i++){
            let position = this.tail[i];
            let distance = dist(this.x, this.y, position.x, position.y);
            if(distance < 1 && i > 10){
                console.log("hit");
            }
        }
    }

    this.update = ()=>{

        // if(this.total === this.tail.length){
        //     for(let i=0; i < this.tail.length-1; i++){
        //         this.tail[i] = this.tail[i+1];
        //     }
        // }
        // this.tail[this.total-1] = createVector(this.x, this.y)

        for(let i=0; i < this.tail.length-1; i++){
            this.tail[i] = this.tail[i+1];
        }
        if(this.total >= 1){
            this.tail[this.total-1] = createVector(this.x, this.y)
        }

        this.x = this.x + ((this.xspeed*scale)/this.difficulty);
        this.y = this.y + ((this.yspeed*scale)/this.difficulty);

        this.x = constrain(this.x, 0, width -scale);
        this.y = constrain(this.y, 0, height-scale);
    }

    this.show =()=>{
        fill(255);   
        for(let i =0; i < this.tail.length; i++){
            rect(this.tail[i].x, this.tail[i].y, scale, scale);
        }        
 
        rect(this.x, this.y, scale, scale);
    }
}