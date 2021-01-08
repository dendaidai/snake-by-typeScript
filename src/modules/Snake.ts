//蛇类
class Snake {
    //表示Snake的元素
    element: HTMLElement;

    //表示蛇身体的数组
    bodies: HTMLCollection;

    //走的方向,默认向右
    direction: string = "right";

    //默认速度
    speed: number = 10;

    constructor(){
        this.element = document.getElementById("snake")!;
        this.bodies = this.element.getElementsByTagName("div");
    }

    //设置蛇头的set和get
    set X(value: number){
        //as表示断言，告诉解释器变量是什么类型
        (this.bodies[0] as HTMLElement).style.left = value+"px";
    }

    get X(): number{
        return (this.bodies[0] as HTMLElement).offsetLeft;
    }

    set Y(value: number){
        (this.bodies[0] as HTMLElement).style.top = value+"px";
    }

    get Y(): number{
        return (this.bodies[0] as HTMLElement).offsetTop;
    }

    //移动的方法
    move(){

      //得到当前蛇头的位置
      let x = this.X;
      let y = this.Y;

       switch (this.direction) {
           case "up":
               y -= this.speed;
               break;

           case "right":
               x += this.speed;
               break;

           case "down":
               y += this.speed;
               break;

           case "left":
               x -= this.speed;
               break;
       }


       //检测是否撞墙,撞则抛出错误，否则修改蛇头位置
        if((x>290 || x<0) || (y>290 || y<0)){
            this.dealHitWall();
        }else{
            //更新身体的位置
            for(let i=this.bodies.length-1;i>0;i--){
                (this.bodies[i] as HTMLElement).style.left = (this.bodies[i-1] as HTMLElement).offsetLeft+"px";
                (this.bodies[i] as HTMLElement).style.top = (this.bodies[i-1] as HTMLElement).offsetTop+"px";
            }

            this.X = x;
            this.Y = y;

            //检测是否撞到自己的身体
            for(let i=this.bodies.length-1;i>0;i--){
                let flag1 = (this.bodies[i] as HTMLElement).offsetLeft===this.X;
                let flag2 = (this.bodies[i] as HTMLElement).offsetTop===this.Y;
                if(flag1 && flag2){
                    this.dealHitWall();
                }
            }
        }

    }


    //蛇撞墙处理函数
    dealHitWall(){
        throw new Error("蛇撞墙了，GAME OVER!");
    }

    //蛇增加身体并显示增加的身体
    addBodies(){
        let element = this.element;
        let bodies = this.bodies;

        let newEle = document.createElement("div");
        newEle.style.left = (bodies[bodies.length-1] as HTMLElement).offsetLeft+"px";
        newEle.style.top = (bodies[bodies.length-1] as HTMLElement).offsetTop+"px";

        element.appendChild(newEle);

    }

}

export default Snake;
