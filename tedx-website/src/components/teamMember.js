import React from "react";
import "./teamMember.css";
import Image from 'react-bootstrap/Image'



function TeamMember (props){
    return (
        <div>
            <Image className = "rounded memberImg" src={props.img} alt={`${props.name}`} ></Image>
            <p className="">{props.name}</p>
            <p className="memberMajor">{props.major}</p>
        </div>
    );
    
}

export default TeamMember;