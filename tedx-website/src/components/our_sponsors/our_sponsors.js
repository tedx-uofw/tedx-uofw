import React from 'react';
import sponsorData from "../../data/our_sponsors_data"
import PageTitle from "../page_title/page_title"
import Sponsor from "../sponsor/sponsor"

function OurSponsors(props) {
    const sponsors = sponsorData.map((item, i) => {
        return (
            <Sponsor img={item.img} name={item.altText} description={item.description} />
        )
    })

    return (
        <div className="our-sponsors-page page-container">
            <PageTitle title="Our Sponsors" />
             <div className="our-sponsors-container">
                {sponsors}
            </div>
        </div>
    );
}

export default OurSponsors;