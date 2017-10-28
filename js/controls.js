keyPressed=()=>{
    if(keyCode === UP_ARROW){
        snake.direction(0,-1);
    }else if(keyCode === DOWN_ARROW){
        snake.direction(0,1);        
    }else if(keyCode === LEFT_ARROW){
        snake.direction(-1,0);        
    }else if(keyCode === RIGHT_ARROW){
        snake.direction(1,0);        
    }
}