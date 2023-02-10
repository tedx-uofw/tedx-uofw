import React from "react";
import "./team.css"
import TeamMember from "./teamMember"

let team ="";

function Team (props){ 
    if(props.name === "Co Presidents"){
        team = "coPres";
    } else {
        team =""
    }
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
            <hr className={`TeamDivider ${team}`}></hr>
            <h1>{props.name}</h1>
            <section className="teamMember-list">
                {teamMembers}
            </section>
        </div>
    );
    
}

export default Team;