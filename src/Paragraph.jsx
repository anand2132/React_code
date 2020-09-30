import React from 'react';

const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

function Paragraph(){
    return ([<p className="para1">Today date is : {`${date}`}</p>,

<p className="para2">Current time is : {`${time}`}</p>]);
}

export default Paragraph;