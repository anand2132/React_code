import React from 'react';

function Calculator(a,b){
    return a+b;
}

function Sub(a,b){
    return a-b;
}

function Mul(a,b){
    return a*b;
}

function Div(a,b){
    return (a/b).toFixed(2);
}

export default Calculator;

export {Sub,Mul,Div};