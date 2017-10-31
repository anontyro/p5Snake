let snake, food;
const scale = 20;



setup =()=>{
    createCanvas(800, 600)
    snake = new Snake();
    food =  new Food();
    food.pickLocation();
    
}

draw =()=>{
    background(0)
    snake.death();
    snake.update();
    snake.show();
    food.show();


    if(snake.eat(food)){
        food.pickLocation();
    }


    
}