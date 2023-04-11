import React from 'react';
import "./sponsor.css";

function Sponsor({img, name, description}) {
  return (
    <section className="sponsor-container">
      <div className="sponsor-content">
        <img className="sponsor-img" src={img} alt={name}></img>
        <p className="sponsor-description">{description}</p>
      </div>
      {name !== "Aladdin Gyro-Cery & Deli" && <div className="sponsor-divider"></div>}
    </section>
  );
}

export default Sponsor;
