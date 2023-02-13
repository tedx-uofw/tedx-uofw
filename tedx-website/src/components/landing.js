import React from 'react';
import './landing.css';

//import instagramlogo from '../assets/instagram-logo.svg';


function Landing(props){
    return (
        <div>
            <div className ="grid-container">
                <div className = "grid-item item1">
                    <p className="title">SEEING ———</p>
                    <p className="title">THE INVISIBLE</p>
                </div>
                <div className = "grid-item item2">
                    <div className = "content">
                        <p>04.16.23</p>
                        <p>5:00 pm</p>
                        <p>Get Tickets</p>
                    </div>
                </div>
                <div className = "grid-item item3">3</div> 
            </div>

        </div>
    )
}
export default Landing;