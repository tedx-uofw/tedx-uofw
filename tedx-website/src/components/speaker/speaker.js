import React from 'react';

function Speaker(props) {
  return (
    <div className="speaker">
      <img className="speaker-img" src={props.img} alt={props.name}></img>
      <p className="speaker-name">{props.name}</p>
      <p className="speaker-position">{props.position}</p>
      <p className="speaker-description">{props.description}</p>
    </div>
  );
}

export default Speaker;
