import React from 'react';

function Card(props){
    return (
        // <div className="col-sm-3 service-body">
        //     <a href={props.link}>
        //         <p><img className="service_image" src={props.imgurl} /></p>
        //         <h3>{props.title}</h3>
        //         <h3><a href={props.link}>Watch Now</a></h3>
        //     </a>
        // </div>
        <div className="cards">
            <div className="card">
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
        </div>
    );
}

export default Card;