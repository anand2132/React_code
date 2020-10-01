import React from 'react';
import Data from './Data';
import Card from './Card';

function Cards(){
    return (
    <>
    <div className="container">
            <div className="cards">
                {Data.map((val) => <Card imgurl={val.imgurl} title={val.title} link={val.link} />)}
            </div>
    </div>    
    </>)
}

export default Cards;