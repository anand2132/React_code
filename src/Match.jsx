import React from 'react';

const Match = (props) => {
    console.log("calling...");
    let {x,y,z} = props;
    if (props.x == props.y && props.y == props.z && props.z == props.x){
        console.log("success" + props.x,props.y,props.z);
        return <p>{props.x}{props.y}{props.z}<br />This is Matching</p>;
        
    }else{
        console.log("failed" + props.x,props.y,props.z);
        return <p>{props.x}{props.y}{props.z}<br />This is Not Matching</p>;
    };
}


export default Match;