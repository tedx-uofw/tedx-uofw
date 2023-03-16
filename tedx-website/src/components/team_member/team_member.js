import React from "react";
import "./team_member.css";

function TeamMember(props) {
    return (
        <div>
            <img className="team-member-img" src={props.img} alt={props.name}></img>
            <p className="team-member-name-p">{props.name}</p>
            <p className="team-member-major-p">{props.major}</p>
        </div>
    );
}

export default TeamMember;