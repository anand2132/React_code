import React from 'react';

const ToDoListItem = (props) => {
    
    return <li id={`myitemli${props.id}`}><span id={`myitemli${props.id}`} onClick={() => {props.onChange(props.id);}}>{props.text}</span> 
    <span className="close" style={{padding:"16px"}}onClick={() => {props.onSelect(props.id);}} >×</span></li>; 
}

export default ToDoListItem;