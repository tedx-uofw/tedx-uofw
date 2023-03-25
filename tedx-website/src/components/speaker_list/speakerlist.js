import React from "react";
import PageTitle from "../page_title/page_title";
import speakersData from "../../data/speakers_data";
import Speaker from "../speaker/speaker";
import "./speakerlist.css"

function SpeakerList() {
    const speakers = speakersData;

    return (
        <div className="speakers-page-container">
          <div className="speakers-header">
            <PageTitle title="Speakers"/>
            <div className="speakers-divider">
              {speakers.map(speaker => (
                <Speaker
                  key={speaker.id}
                  img={speaker.img}
                  name={speaker.name}
                  position={speaker.position}
                  description={speaker.description}
                />
              ))}
            </div>
            </div>
        </div>
      );
    }

export default SpeakerList;
