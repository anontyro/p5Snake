let snake, food;
const scale = 20;

setup =()=>{
    createCanvas(800, 600)
    snake = new Snake();
    food =  new Food();

    
}

draw =()=>{
    background(0)
    snake.update();
    snake.show();
    food.show();
    
}