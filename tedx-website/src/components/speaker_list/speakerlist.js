import React from "react";
import PageTitle from "../page_title/page_title";
import speakersData from "../../data/speakers_data";
import performersData from "../../data/performer_data";
import Speaker from "../speaker/speaker";
import "./speakerlist.css"

function SpeakerList() {
    const speakers = speakersData;
    const performers = performersData;

    return (
        <div className="speakers-page-container page-container">
          <div className="speakers-header">
            <PageTitle title="Speakers"/>
            {speakers.map(speaker => (
              <Speaker
                key={speaker.id}
                img={speaker.img}
                name={speaker.name}
                position={speaker.position}
                description={speaker.description}
                divider={speaker.name !== "Michael Huang"}
              />
            ))}
            </div>
            <PageTitle title="Performers"/>
            {performers.map(performer => (
              <Speaker
                key={performer.id}
                img={performer.img}
                name={performer.name}
                description={performer.description}
                divider={performer.name !== "UW Comedy Club"}
              />
            ))}
        </div>
      );
    }

export default SpeakerList;
