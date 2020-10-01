import React from 'react';

function Card(props){
    return (
            <div className="col-sm-3 card">
                <img src={props.imgurl} alt={props.title} className="card__img" />
                <div className="card__info">
                    <span className="card__category">
                        NETFLIX ORIGINAL SERIES
                    </span>
                    <h3 className="card__title"> {props.title} </h3>
                    <a href={props.link} target="_blank">
                        <button>WATCH NOW</button>
                    </a>
                </div>
            </div>
        );
}

export default Card;