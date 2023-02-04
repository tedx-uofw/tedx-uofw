import React from "react";
import "./team.css"
import TeamMember from "./teamMember"

function Team (props){ 
    const teamMembers = props.data?.map((item, i)=>{
        return (
            <TeamMember 
                key = {item.name}
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
            <section className="teamMember-list">
                {teamMembers}
            </section>
        </div>
    );
    
}

export default Team;