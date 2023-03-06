import React from "react";
import TeamMember from "../team_member/team_member"

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
        <div className="team-container">
            {props.name !== "Co Presidents" && <div className="team-divider"></div>}
            <div className="team-info-container">
                <h1 className="team-header-1">{props.name}</h1>
                <section className="team-member-list">
                    {teamMembers}
                </section>
            </div>
        </div>
    );
}

export default Team;