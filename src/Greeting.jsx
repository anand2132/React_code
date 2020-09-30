import React from 'react';

let time = new Date();
let hour = time.getHours();
let cssStyle = {};
let greeting = '';

if (hour > 1 && hour < 12){
    greeting = "Good Morning";
    cssStyle.color = "green";
}else if(hour >= 12 && hour < 17){
    greeting = "Good Afternoon";
    cssStyle.color = "red";
}else if(hour >= 17 && hour < 20){
    greeting = "Good Evening";
    cssStyle.color = "pink";
}else{
    greeting = "Good Night";
    cssStyle.color = "black";
}


function Greeting(){
    return (<div className="greeting"><h1>Hello sir, <span style={cssStyle}>{greeting}</span></h1></div>);
}

const roll = "Admin";


export default Greeting;
export {roll}