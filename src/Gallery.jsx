import React from 'react';

const img_url1 = "https://picsum.photos/300/300";
const img_url2 = "https://picsum.photos/302/300";
const img_url3 = "https://picsum.photos/305/300";

function Gallery(){
    return ([<div className="imgdiv">
    <img src={`${img_url1}`} />
    <img src={`${img_url2}`} />
    <img src={`${img_url3}`} />
  </div>]);
}

export default Gallery;