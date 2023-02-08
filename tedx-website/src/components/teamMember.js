import React from "react";
import "./teamMember.css";
import Image from 'react-bootstrap/Image'



function TeamMember (props){
    return (
        <div>
            <Image className = "memberImg" src={props.img}rounded alt={props.name} ></Image>
            <p className= "memberName">{props.name}</p>
            <p className="memberMajor">{props.major}</p>
        </div>
    );
    
}

export default TeamMember;