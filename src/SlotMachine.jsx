import React from 'react';
import Match from './Match';


const emoji = ["😀", "😂", "😎", "🤣", "🤗", "🤩", "😆"];
let x,y,z;
let r;
let hi_score = 300;
function Fun(v=""){
    for (var i=0;i<3;i++){
        let random = Math.floor(Math.random() * emoji.length);
        if(i == 0){
            x = emoji[random];
        }else if(i == 1){
            y = emoji[random];
        }else{
            z = emoji[random];
        }
    }
    //console.log(x,y,z);
    
    return x;
    
}
let count = 0;
let score = 0;
let maxCount = 100;
let hit = 0;
let flag = 0;
let res1,res2,res3;
let pass2,pass3 = 0;
let result;
function myFunction() {
    var x = document.getElementById("msg");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } 




function call(){
    //console.log(flag);
    document.getElementById("hi_score").innerHTML = hi_score;
document.getElementById("count").innerHTML = count;
document.getElementById("score").innerHTML = score;
    
    if(count == 0){
        document.getElementById("btn").innerHTML = "PLAY";
        myFunction();
    }

    if(flag == 0){
        res1 = <Match x={Fun(1)} y={Fun(1)} z={Fun(1)} />;
    }else if(flag == 1){
        res2 = <Match x={Fun(1)} y={Fun(1)} z={Fun(1)} />;
    }else{
        res3 = <Match x={Fun(1)} y={Fun(1)} z={Fun(1)} />;
    }
    

    count += 1;
    hit += 1;
    document.getElementById("count").innerHTML = count;
    document.getElementById("score").innerHTML = score;
    

    if(count > maxCount){
        count = 0;
        stop_btn = document.getElementById("stop_btn");
        run_btn = document.getElementById("btn");
        if (stop_btn.style.display === "block") {
            stop_btn.style.display = "none";
            run_btn.style.display = "block";
            run_btn.style.margin = "10px auto";
            run_btn.innerHTML = "Play Again";
        }
        //document.getElementById("btn").innerHTML = "Play Again";
        document.getElementById("count").innerHTML = count;
        myFunction();
        hit -= 1
        if (score > hi_score){
            result = document.getElementById("msg").innerHTML = "😎 Congratulation! You Won the Game 😎<br />Your Total Score is : " + score + "<br />Your Total Hits : " + hit;
        }else{
            var result = document.getElementById("msg").innerHTML = "😭 You Lose the Game! 😭<br />Your Total Score is : " + score + "<br />Your Total Hits : " + hit;
        }
        
        score = 0;
        hit = 0;
        flag = 0;
        clearInterval(r);

        return result;
    }
    if(flag === 0){
        if(pass2 === 1){
            pass2 = 0;
            document.getElementById("f2").innerHTML = Fun(1) + " " + Fun(1) + " " + Fun(1) + "<br />" + "This is Not Matching"
            if(pass3 === 1){
                pass3 = 0;
                document.getElementById("f3").innerHTML = Fun(1) + " " + Fun(1) + " " + Fun(1) + "<br />" + "This is Not Matching"
            }
        }
        if (res1.props.x === res1.props.y && res1.props.y === res1.props.z && res1.props.z === res1.props.x){
            flag = 1;
            return document.getElementById("f1").innerHTML = res1.props.x + " " + res1.props.y + " " + res1.props.z + "<br />" + "This is Matching";
        }else{
            return document.getElementById("f1").innerHTML = res1.props.x + " " + res1.props.y + " " + res1.props.z + "<br />" + "This is Not Matching";
        }
    }
    

    if(flag == 1){
        if (res2.props.x === res2.props.y && res2.props.y === res2.props.z && res2.props.z === res2.props.x){
            flag = 2;
            pass2 = 1;
            return document.getElementById("f2").innerHTML = res2.props.x + " " + res2.props.y + " " + res2.props.z + "<br />" + "This is Matching";
        }else{
            return document.getElementById("f2").innerHTML = res2.props.x + " " + res2.props.y + " " + res2.props.z + "<br />" + "This is Not Matching";
        }
    }

    

    if(flag == 2){
        if (res3.props.x === res3.props.y && res3.props.y === res3.props.z && res3.props.z === res3.props.x){
            flag = 0; 
            pass3 = 1;
            count = 0;
            score += 100;
            document.getElementById("btn").innerHTML = "Continue";
            
            return (document.getElementById("f3").innerHTML = res3.props.x + " " + res3.props.y + " " + res3.props.z + "<br />" + "This is Matching",
            myFunction(),
            document.getElementById("msg").innerHTML = "😎 Congratulation! You Won the Game 😎"
            );
        }else{
            return document.getElementById("f3").innerHTML = res3.props.x + " " + res3.props.y + " " + res3.props.z + "<br />" + "This is Not Matching";
        }
    }

}

var stop_btn,run_btn;
function RunGame(t='') {
    
    r = setInterval(call, 180);
    stop_btn = document.getElementById("stop_btn");
    run_btn = document.getElementById("btn");
    if (stop_btn.style.display === "none") {
        stop_btn.style.display = "block";
        run_btn.style.display = "none";
    } else {
        stop_btn.style.display = "none";
        run_btn.style.display = "block";
    }
}

function StopGame(){
    clearInterval(r);
    stop_btn = document.getElementById("stop_btn");
    run_btn = document.getElementById("btn");
    if (stop_btn.style.display === "block") {
        stop_btn.style.display = "none";
        run_btn.style.display = "block";
    } else {
        stop_btn.style.display = "block";
        run_btn.style.display = "none";
    }
}



const SlotM = () => {
    return (
        <>
        <h1 className="heading">GAMES</h1>
        <h1 className="para1">🎰 Welcome to Slot Machine 🎰</h1>
        <div className="slot_machine">
            <p className="para1" style={ {backgroundColor:"#fff"} } id="msg"></p>
            <h5 className="heading2" style={ {display:"block-ruby"} }>
                <div className="turn">
                    Your Turn : <p className="para1" id="count">{count}</p>
                </div>
                <div className="score">
                    Your Score : <p className="para1"  id="score">{score}</p>
                </div>
                <div className="hi_score">
                    Hi-Score : <p className="para1"  id="hi_score">{hi_score}</p>
                </div>
            </h5>

            <h1 className="slot_inner" id="f1"><Match x={Fun(1)} y={Fun(1)} z={Fun(1)} /></h1>
            <h1 className="slot_inner" id="f2"><Match x={Fun(1)} y={Fun(1)} z={Fun(1)} /></h1>
            <h1 className="slot_inner" id="f3"><Match x={Fun(1)} y={Fun(1)} z={Fun(1)} /></h1>
            <button className="btn btn-success slot_btn" id="btn" onClick={() => RunGame('')}>PLAY</button>
            <button className="btn btn-success slot_btn" id="stop_btn" style={ {display:"none"} } onClick={StopGame}>STOP</button>
        </div>
        </>
    );
}

export default SlotM;