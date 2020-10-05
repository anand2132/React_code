import React, { useState } from 'react';
import ToDoListItem from './TodoListItem';


function ToDoList(){
    const [inputList, setInputList] = useState("");
    const [Item, setItem] = useState([]);

    const itemAdd = (event) => {
        setInputList(event.target.value);
    };

    const addItem = () => {
        setItem( (oldItem) => {
            if(inputList != ""){
                return [...oldItem, inputList];
            }else{
                alert("Input task Field is required");
                return [...oldItem];
            }
        });
        setInputList('');
    }

    const deleteItem = (id) => {
        var elem = document.getElementById(`myitemli${id}`);
        return elem.parentNode.removeChild(elem);
    }

    const crossItem = (id) => {
        return document.getElementById(`myitemli${id}`).classList.toggle("checked");
    }

    return (
        <>
            <div id="todolist"></div>
            <h1 className="heading">TO DO LIST</h1>
            
            <div className="todolist container">
                <div id="myDIV" className="myheader">
                    <h2 style={{color:"#fff",margin:"5px"}}>My To Do List</h2>
                    <input type="text" value={inputList} className="myinput" onChange={itemAdd} placeholder="Add a Task..." />
                    <span className="addBtn" onClick={addItem}>Add</span>
                </div>

                <ul id="myUL" className="mylist">
                    {Item.map( (itemval, index) => {
                        return <ToDoListItem key={index} id={index} onSelect={deleteItem} onChange={crossItem} text={itemval} />;
                    })}
                </ul>
            </div>
        </>
    )
}

export default ToDoList;