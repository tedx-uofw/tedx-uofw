import React from 'react';
import './our_sponsors.css';
import sponsorData from "../../data/our_sponsors_data"

function OurSponsors(props) {
    const sponsors = sponsorData.map((item, i)=>{
        return (
            <img className="our-sponsors-img" src={item.img} alt={item.altText} />
        )
    })

    return (
        <div className="our-sponsors-page page-container">
             <div className="our-sponsors-container">
                {sponsors}
            </div>
        </div>
    );
}

export default OurSponsors;