import React from "react";
import "./teamMember.css";

function TeamMember (props){
    return (
        <div>
            <img className="member-img" src={props.img} alt={props.name}></img>
            <p className="memberName">{props.name}</p>
            <p className="memberMajor">{props.major}</p>
        </div>
    );
}

export default TeamMember;