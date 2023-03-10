import React from "react";
import PageTitle from "../page_title/page_title";
import speakersData from "../../data/speakers_data"
import Speaker from "../speaker/speaker"

function SpeakerList(props) {
    const speakers = speakersData;

    return (
        <div className="speakers-page page-container">
            <PageTitle title="Speakers" />
            {props.map(speakers => (
              <Speaker
                key={speakers.id}
                img={speakers.img}
                name={speakers.name}
                position={speakers.position}
                description={speakers.description}
              />
            ))}
        </div>
      );
    }

export default SpeakerList;