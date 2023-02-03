import React from "react";
import "./team.css"
import TeamMember from "./teamMember"
import coPresData from "../assets/coPresData";



function Team (props){

    const teamMembers = coPresData.map(item => {
        return (
            <TeamMember 
                name={item.name}
                major={item.major}
                img={item.img}
            />
        )
    })
    return (
        <div>
            <hr className="TeamDivider"></hr>
            <h1>{props.name}</h1>
            <section className="teamMemeber-list">
                {teamMembers}
            </section>
        </div>
    );
    
}

export default Team;