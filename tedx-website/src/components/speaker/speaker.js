import React from 'react';
import "./speaker.css";

function Speaker(props) {
  return (
    <section className="speaker-container">
      <div className="speaker-content">
        <img className="speaker-img" src={props.img} alt={props.name}></img>
        <div className="speaker-profile">
          <p className="speaker-name">{props.name}</p>
          <p className="speaker-position">{props.position}</p>
        </div>
        <p className="speaker-description">{props.description}</p>
      </div>
      {props.name !== "Patricia Allen" && <div className="speaker-divider"></div>}
    </section>
  );
}

export default Speaker;
