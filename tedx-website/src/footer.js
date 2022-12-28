import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';

function Footer(props){
    return (
        <div>

        <div id="root"> </div>
        <div id="footer">
            <p id = "leftContent">© TEDxUofW 2022 | SEE THE INVISIBLE</p>
            <div id= "rightContent">
                <a className ="icons" href="https://www.instagram.com/tedxuofw/?hl=en">
                    <img src = "brand-instagram.png"></img>
                </a>
                <a className ="icons" href= "https://www.facebook.com/TEDxUofW/">
                    <img src= "brand-facebook.png"></img>
                </a>
                <a  className ="icons" href="https://www.linkedin.com/company/tedxuofw/about/">
                    <img src="brand-linkedin.png"></img>
                </a>
            </div>
        </div>
        
        </div>
    )
}
export default Footer;