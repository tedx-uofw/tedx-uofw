import React from "react";
import TeamMember from "./teamMember"

import "./team.css"

function Team(props) { 
    const teamMembers = props.data?.map((item, i)=>{
        return (
            <TeamMember 
                key={item.name}
                name={item.name}
                major={item.major}
                img={item.img}
            />
        )
    })
      
    return (
        <div>
            {props.name !== "Co Presidents" && <hr className="team-divider"></hr>}
            <h1>{props.name}</h1>
            <section className="team-member-list">
                {teamMembers}
            </section>
        </div>
    );
}

export default Team;