import React from 'react';
import Heading from './Heading';
import List from './List';
import Gallery from './Gallery';
import Para from './Paragraph';
import Greeting,{roll} from './Greeting';
import Add,{Sub,Mul,Div} from './Calculator';
import Card from './Cards';


function App(){
  return (
    <>
      <Greeting />
      <Card />
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