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
let maxCount = 50;
function call(){
    let res = <Match x={Fun(1)} y={Fun(1)} z={Fun(1)} />
    count += 1;
    document.getElementById("count").innerHTML = count;
    if(count > maxCount){
        count = 0;
        document.getElementById("btn").innerHTML = "Play Again";
        return document.getElementById("count").innerHTML = "😭 You Lose the Game! 😭";
    }
    if (res.props.x == res.props.y && res.props.y == res.props.z && res.props.z == res.props.x){
        count = 0;
        document.getElementById("btn").innerHTML = "Play Again";
        return (document.getElementById("f1").innerHTML = res.props.x + " " + res.props.y + " " + res.props.z + "<br />" + "This is Matching",
        document.getElementById("f2").innerHTML = res.props.x + " " + res.props.y + " " + res.props.z + "<br />" + "This is Matching",
        document.getElementById("f3").innerHTML = res.props.x + " " + res.props.y + " " + res.props.z + "<br />" + "This is Matching",
        document.getElementById("count").innerHTML = "😎 Congratulation! You Won the Game 😎"
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
            <h5 className="heading">Your Turn : <p className="para1" id="count"></p></h5>
            <h1 className="slot_inner" id="f1"><Match x={Fun(1)} y={Fun(1)} z={Fun(1)} /></h1>
            <h1 className="slot_inner" id="f2"><Match x={Fun(1)} y={Fun(1)} z={Fun(1)} /></h1>
            <h1 className="slot_inner" id="f3"><Match x={Fun(1)} y={Fun(1)} z={Fun(1)} /></h1>
            <button className="btn btn-success slot_btn" id="btn" onClick={call}>HIT</button>
        </div>
        <h1 id="win_msg" className="para1"></h1>
        <h1 id="lose_msg" className="para2"></h1>
        </>
    );
}

export default SlotM;