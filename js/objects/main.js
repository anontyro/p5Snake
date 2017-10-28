
function Snake(){
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.difficulty = 5;

    this.direction =(x,y)=>{
        this.xspeed = x;
        this.yspeed = y;
    }

    this.difficultyIncrease = () =>{
        if(!this.difficulty <= 1){
            this.difficulty--;            
        }
    }

    this.update = ()=>{
        this.x = this.x + ((this.xspeed*scale)/this.difficulty);
        this.y = this.y + ((this.yspeed*scale)/this.difficulty);

        this.x = constrain(this.x, 0, width -scale);
        this.y = constrain(this.y, 0, height-scale);
    }

    this.show =()=>{
        fill(255);
        rect(this.x, this.y, scale, scale);
    }
}