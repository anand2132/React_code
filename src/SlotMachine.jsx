import React from 'react';
import Match from './Match';


const emoji = ["😀", "😂", "😎", "🤣", "🤗", "🤩", "😆"];
let x,y,z;

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
let maxCount = 50;
let hit = 0;

function myFunction() {
    var x = document.getElementById("msg");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } 


function call(){
    if(count == 0){
        document.getElementById("btn").innerHTML = "HIT";
        myFunction();
    }
    let res = <Match x={Fun(1)} y={Fun(1)} z={Fun(1)} />
    count += 1;
    hit += 1;
    document.getElementById("count").innerHTML = count;
    document.getElementById("score").innerHTML = score;
    
    if(count > maxCount){
        count = 0;
        document.getElementById("btn").innerHTML = "Play Again";
        document.getElementById("count").innerHTML = count;
        myFunction();
        hit -= 1
        var result = document.getElementById("msg").innerHTML = "😭 You Lose the Game! 😭<br />Your Total Score is : " + score + "<br />Your Total Hits : " + hit;
        score = 0;
        hit = 0;
        return result;
    }
    if (res.props.x == res.props.y && res.props.y == res.props.z && res.props.z == res.props.x){
        count = 0;
        score += 100;
        document.getElementById("btn").innerHTML = "Continue";
        return (document.getElementById("f1").innerHTML = res.props.x + " " + res.props.y + " " + res.props.z + "<br />" + "This is Matching",
        document.getElementById("f2").innerHTML = res.props.x + " " + res.props.y + " " + res.props.z + "<br />" + "This is Matching",
        document.getElementById("f3").innerHTML = res.props.x + " " + res.props.y + " " + res.props.z + "<br />" + "This is Matching",
        myFunction(),
        document.getElementById("msg").innerHTML = "😎 Congratulation! You Won the Game 😎"
        );
    }else{
        return (document.getElementById("f1").innerHTML = res.props.x + " " + res.props.y + " " + res.props.z + "<br />" + "This is Not Matching",
        document.getElementById("f2").innerHTML = res.props.x + " " + res.props.y + " " + res.props.z + "<br />" + "This is Not Matching",
        document.getElementById("f3").innerHTML = res.props.x + " " + res.props.y + " " + res.props.z + "<br />" + "This is Not Matching"
        );
    }
    
}




const SlotM = () => {
    return (
        <>
        <h1 className="heading">GAMES</h1>
        <h1 className="para1">🎰 Welcome to Slot Machine 🎰</h1>
        <div className="slot_machine">
            <p className="para1" style={ {backgroundColor:"#fff"} } id="msg"></p>
            <h5 className="heading2" style={ {display:"block-ruby"} }><div className="turn">Your Turn : <p className="para1" id="count" style={ {margin:"20px 55px 0px 50px" }}></p></div><div className="score">Your Score : <p className="para1"  id="score"></p></div></h5>
            <h1 className="slot_inner" id="f1"><Match x={Fun(1)} y={Fun(1)} z={Fun(1)} /></h1>
            <h1 className="slot_inner" id="f2"><Match x={Fun(1)} y={Fun(1)} z={Fun(1)} /></h1>
            <h1 className="slot_inner" id="f3"><Match x={Fun(1)} y={Fun(1)} z={Fun(1)} /></h1>
            <button className="btn btn-success slot_btn" id="btn" onClick={call}>HIT</button>
        </div>
        </>
    );
}

export default SlotM;