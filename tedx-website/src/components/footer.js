import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';

import instagramlogo from '../assets/instagram-logo.svg';
import linkedinlogo from '../assets/linkedin-logo.svg';
import facebooklogo from '../assets/facebook-logo.svg';
import mailicon from '../assets/mail.svg';

function Footer(props){
    return (
        <div>
            <div id="root"> </div>
            <div id="footer">
                <p id = "leftContent">© TEDxUofW 2022 | SEE THE INVISIBLE</p>
                <div id= "rightContent">
                    <a className ="icons" href="mailto:tedxuofw@uw.edu">
                        <img src={mailicon}></img>
                    </a>
                    <a className ="icons" href="https://www.instagram.com/tedxuofw/?hl=en">
                        <img src={instagramlogo}></img>
                    </a>
                    <a className ="icons" href= "https://www.facebook.com/TEDxUofW/">
                        <img src={facebooklogo}></img>
                    </a>
                    <a  className ="icons" href="https://www.linkedin.com/company/tedxuofw/about/">
                        <img src={linkedinlogo}></img>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Footer;