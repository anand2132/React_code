import React from 'react';
import Data from './Data';
import Card from './Card';

function Cards(){
    return (
    <>
        <div className="container">
            <div className="col-sm-12 card-body">
                <div className="col-sm-12 row">
                    <Card imgurl={Data[0].imgurl} title={Data[0].title} link={Data[0].link} />
                    <Card imgurl={Data[1].imgurl} title={Data[1].title} link={Data[1].link} />
                    <Card imgurl={Data[2].imgurl} title={Data[2].title} link={Data[2].link} />
                </div>
            </div>
        </div>
    </>)
}

export default Cards;