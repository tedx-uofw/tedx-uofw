import React from 'react';
import './landing.css';
import redX from '../assets/redCrop.png';
import tedContent from '../assets/MaskGroup.png';
import kaneHall from '../assets/KaneHall.png'

function Landing(props){
    return (
        <div className = "landing-container grid page-container">
            <div className = "landing-event-info-container">
                <div>
                    <div>
                        <h1 className = "landing-title">SEEING THE INVISIBLE</h1>
                    </div>
                    <div className = "landing-eventContent">
                        <p>04.22.2023</p>
                        <p>9 AM - 4 PM @ <a className="landing-kane-hall-text" href="https://goo.gl/maps/nGRm4o1LVxASLjPE7" target = "blank">Kane Hall</a></p>
                        <a href = "https://linktr.ee/tedxuofw22" target = "blank"><button className = "landing-buyTickets-button">Get Tickets</button></a>
                    </div>
                </div>
                <div className = "landing-redX-image-container">
                    <img className = "landing-redX-image" src = {redX} alt = "Red X of TEDx Organization"></img>
                </div>
            </div>
            <div className = "landing-about-tedx-container row mt-60">
                <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <h1>About TEDx</h1>
                    <p>TEDxUofW is established to bring<br></br>
                        inspirational and informative TED style<br></br>
                        talks to the University of Washington.</p>
                </div>
                <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <img className = "landing-brand-image" src  ={tedContent} alt= "TEDx Brand"></img>
                </div>
            </div>
            <div className = "landing-seeing-the-invisible-container row mt-60">
                <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <h1>Seeing the Invisible</h1>
                </div>
                <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <p>
                        The theme “Seeing the Invisible” places the
                        spotlight on ideas, experiences, and passions that
                        are not typically noticed in our daily lives or
                        recognized by the majority of society.
                        <br></br><br></br>
                        Through surrounding this year's TEDxUofW
                        conference around this theme, we hope to
                        illuminate some of the beautiful accomplishments
                        and perspectives our community and the world may
                        not have realized before.
                    </p>
                </div>            
            </div>
            <div className = "landing-schedule-container row mt-60">
                <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <h1>Conference Schedule</h1>
                </div>
                <div className = "row">
                    <div className="col">
                        <p id="landing-left-schedule">
                        9:00 am: Doors open<br></br>
                        10:10 am: How negative emotions can lead to a better life! by Nazila Sawhney<br></br>
                        10:30 am: The Power of Belonging in Nature by Dr. Pooja Tandon<br></br>
                        10:50 am: UW Comedy Club<br></br>
                        11:10 am: Seeing ADHD for what it is, an epidemic by Christian Murphy<br></br>
                        11:30 am: Raffle drawing<br></br>
                        11:40 am: Invisible Work: The things we do that no one will ever see by Michael Huang<br></br>
                        12:00 pm: Lunch<br></br>
                        </p>
                    </div>
                    <div className="col">
                        <p>
                        1:00 pm: Accelerating Scientific Discovery with Machine Learning by Professor Nathan Kutz<br></br>
                        1:20 pm: UW Traditional Chinese Dance<br></br>
                        1:40 pm: Deconstructing Leadership by Patricia Allen<br></br>
                        2:00 pm: Listen to Learn by Matt Crevin<br></br>
                        2:20 pm: Raffle drawing<br></br>
                        2:30 pm: 4 Keys to Achieving Your Dream by Dr. Susie Sharpe<br></br>
                        2:50 pm: Speakers Q & A<br></br>
                        3:30 pm: Networking session<br></br>
                        4:00 pm: Conference concludes<br></br>
                        </p>
                    </div>         
                </div>
            </div>
            <div className = "landing-venue-container row mt-60">
                <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <h1>The Venue</h1>
                </div>
                <img className = "landing-kaneHall-image" src = {kaneHall} alt="Kane Hall"></img>
                <div className = "row mt-20">
                    <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                        <p className = "landing-venue-content">Our venue for this year's conference will be Kane Hall,
                            which houses an auditorium style room that
                            can seat up to 700 people. This room has the
                            technological capability to record high quality
                            video and audio of the stage.<br></br><br></br>
                            Kane Hall is also in a centralized location on
                            campus, providing easy access to our intended
                            audience. Additionally, the venue provides
                            adequate accommodations for those in need of
                            wheelchair seating or closed captions.
                        </p>
                    </div>       
                </div>
            </div>
        </div>
    )
}
export default Landing;