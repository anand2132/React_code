import React from 'react';
import Card from './Cards';
import Navbar from './Navbar';
import SlotM from './SlotMachine';
import ToDoList from './ToDoList';
import Top from './Top';


function App(){
  return (
    <>
      <Navbar />
      <Top />
      <Card />
      <SlotM />
      <ToDoList />
      {/* <Heading />
      <Para />
      <Gallery />
      <List />
      <h1>{roll}</h1>
      <ul>
        <li>Sum of two num is : {Add(12,12)}</li>
        <li>Subtract of two num is : {Sub(20,5)}</li>
        <li>Multiple of two num is : {Mul(5,5)}</li>
        <li>Division of two num is : {Div(100,3)}</li>
      </ul> */}
      
    </>
  )
}

export default App;