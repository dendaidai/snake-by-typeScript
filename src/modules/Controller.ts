import Food from "./Food"
import Snake from "./Snake"
import ScorePanel from "./ScorePanel"

//控制器类
class Controller {
    food: Food;
    snake: Snake;
    scorePanel: ScorePanel;

    constructor(){

        this.food = new Food();
        this.snake = new Snake();
        this.scorePanel = new ScorePanel();

        //初始化
        this.init();


    }

    //初始化方法
    init(){
        //键盘事件监听
        document.addEventListener("keydown",this.keyDownHandler.bind(this));

        //设置定时器，执行run方法,刷新舞台
        setTimeout(this.run.bind(this),300-((this.scorePanel.level-1)*30));

    }

    //键盘监听
    keyDownHandler(event: KeyboardEvent){
        //ArrowUp、Up
        //ArrowDown、Down
        //ArrowRight、Right
        //ArrowLeft、Left
        //console.log(event.key);

        let direction = event.key;
        let oldDirection = this.snake.direction;
        let newDirection = "";

        switch (direction) {
            case "ArrowUp":
            case "Up":
                if(oldDirection==="down"){
                    return;
                }
                newDirection = "up";
                break;

            case "ArrowDown":
            case "Down":
                if(oldDirection==="up"){
                    return;
                }
                newDirection = "down";
                break;

            case "ArrowLeft":
            case "Left":
                if(oldDirection==="right"){
                    return;
                }
                newDirection = "left";
                break;

            case "ArrowRight":
            case "Right":
                if(oldDirection==="left"){
                    return;
                }
                newDirection = "right";
                break;
        }

        this.snake.direction = newDirection;

         // console.log(this.snake.direction);
        }

        //刷新的方法
    run(){
        //调用snake的移动方法
        try {
            this.snake.move();
        }catch (e) {
            alert(e.message);
        }

        //蛇吃食物
        this.snakeEatFood();


        //设置定时器，执行run方法,刷新舞台
        setTimeout(this.run.bind(this),300-((this.scorePanel.level-1)*30));
    }

    //蛇吃到食物
    snakeEatFood(){
        let food_x = this.food.X;
        let food_y = this.food.Y;
        let snake_x = this.snake.X;
        let snake_y = this.snake.Y;

        if(food_x===snake_x && food_y===snake_y){
            this.scorePanel.addScore();
            this.food.changePosition();
            this.snake.addBodies();
        }

    }

}

export default Controller;