import React from 'react';

const ToDoListItem = (props) => {

    return <li id={`myitem${props.id}`} onClick={() => {
                props.onChange(props.id);
            }}>{props.text}<span 
    className="close" 
    onClick={() => {
                props.onSelect(props.id);
            }} >×</span></li>;
}

export default ToDoListItem;