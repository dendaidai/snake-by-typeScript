//分数面板类
class ScorePanel{

    //表示分数面板的元素
    element: HTMLElement;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    //分数
    score: number = 0;

    //等级
    level: number = 1;

    //多少分升级
    upScore: number;

    constructor(upScore: number = 5){
        this.element = document.getElementById("scorePanel")!;
        this.scoreEle = document.getElementById("score")!;
        this.levelEle = document.getElementById("level")!;
        this.upScore = upScore;

    }

    //分数提升
    addScore(){
        this.scoreEle.innerText = ++this.score+"";

        //看是否可以升级
        this.addLevel();
    }

    //等级提升
    addLevel(){
        if(this.level<=10 && this.score % this.upScore === 0){
            this.levelEle.innerText = ++this.level+"";
        }
    }
}

export default ScorePanel;