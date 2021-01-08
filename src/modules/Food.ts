//食物类
class Food{
    //代表食物的元素
    element: HTMLElement;

    constructor(){
        //!代表确定不为空
        this.element = document.getElementById("food")!;
    }

    //设置set，get方法得到食物的X和Y
    set X(value: number){
        this.element.style.left = value+"px";
    }

    get X(): number{
        return this.element.offsetLeft;
    }

    set Y(value: number){
        this.element.style.top = value+"px";
    }

    get Y(): number{
        return this.element.offsetTop;
    }

    //改变位置的方法
    changePosition(){
        //生成整十的随机数X和Y
        let X = Math.round(Math.random()*29)*10;
        let Y = Math.round(Math.random()*29)*10;

        //改变位置
        this.X = X;
        this.Y = Y;

    }
}

export default Food;

