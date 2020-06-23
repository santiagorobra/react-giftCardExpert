import React from 'react'

export const GifGridItem = ({title, img}) => {
  return (
    <div className="card animate__fadeInDown">
      <img src={img} alt={title}/>
      <p>{title}</p>
    </div>
  );
};
