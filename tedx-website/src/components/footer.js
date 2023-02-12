import React from 'react';
import './footer.css';

import instagramlogo from '../assets/instagram-logo.svg';
import linkedinlogo from '../assets/linkedin-logo.svg';
import facebooklogo from '../assets/facebook-logo.svg';
import mailicon from '../assets/mail.svg';

function Footer(props){
    return (
        <div id="footer">
            <p id = "left-content">© TEDxUofW 2023 | Seeing The Invisible</p>
            <div id= "right-content">
                <a className ="icons" href="mailto:tedxuofw@uw.edu">
                    <img className="img" src={mailicon} alt=""></img>
                </a>
                <a className ="icons" href= "https://www.facebook.com/TEDxUofW/">
                    <img className="img" src={facebooklogo} alt=""></img>
                </a>
                <a className ="icons" href="https://www.instagram.com/tedxuofw/?hl=en">
                    <img className="img" src={instagramlogo} alt=""></img>
                </a>
                <a  className ="icons" href="https://www.linkedin.com/company/tedxuofw/about/">
                    <img className="img" src={linkedinlogo} alt=""></img>
                </a>
             </div>
        </div>
    )
}
export default Footer;