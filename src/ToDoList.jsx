import React, { useState } from 'react';
import ToDoListItem from './TodoListItem';



function ToDoList(){
    let c = 0;
    let c_id;
    const [inputList, setInputList] = useState("");
    const [Item, setItem] = useState([]);

    const itemAdd = (event) => {
        setInputList(event.target.value);
    };

    const addItem = () => {
        setItem( (oldItem) => {
            return [...oldItem, inputList];
        });
        setInputList('');
    }

    const deleteItem = (id) => {
        c = 1;
        //console.log('delete');
        c_id = id;
        setItem( (oldItem) => {
            return oldItem.filter( (arrElement, index) => {
                return index !== id;
            });
        });
    }

    const crossItem = (id) => {
        // setItem( (oldItem) => {
        //     console.log(oldItem[id]);
        //     //document.getElementById(`myitem${id}`).innerHTML = oldItem[id];
        //     return oldItem.map( (arrElement, index) => {
        //         //console.log(arrElement);
        //         document.getElementById(`myitem${id}`).innerHTML = oldItem[id];
        //         return document.getElementById(`myitem${id}`).classList.toggle("checked");
        //             //arrElement.toggle('checked')
                
        //     });
        // });
        //console.log(Item[id]);
        //document.getElementById(`myitem${id}`).innerHTML = oldItem[id];
        //console.log(c);
        
        if(c !== 1 && c == 2 || c == 0){
            //console.log("cross");
            return Item.map( (arrElement, index) => {
                //console.log(arrElement);
                c = 2;
                if(arrElement == Item[id]){
                    //console.log(id,index);
                    return document.getElementById(`myitem${id}`).classList.toggle("checked");
                }
            });
        }else if(c == 1){
            //console.log(Item[c_id]);
            return Item.map( (arrElement, index) => {
                //console.log(arrElement);
                
                if(arrElement == Item[c_id]){
                    
                    //console.log(id,index);
                    return document.getElementById(`myitem${c_id}`).classList.remove("checked");
                }
            });
        }
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