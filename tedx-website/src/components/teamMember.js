import React from "react";
import "./teamMember.css";



function TeamMember (props){
    return (
        <div>
            <img src={props.img} alt={`${props.name}`}></img>
            <p>{props.name}</p>
            <p>{props.major}</p>
        </div>
    );
    
}

export default TeamMember;