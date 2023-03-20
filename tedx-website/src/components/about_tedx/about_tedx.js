import React from 'react';
import './about_tedx.css';
import PageTitle from "../page_title/page_title"
import TedRedLogo from "../../assets/redLogo.png"
import TeamPhoto from "../../assets/teamPhoto.png"

import {Row,Col,Image} from 'react-bootstrap';

import TedOfficialLogo from "../../assets/officialTedLogo.png"
function AboutTedX(props) {
    return (
        <div className="about-tedx-page page-container">
            <PageTitle title="TED" />
            <Row className='about-tedx-tedXRow'>
                <Col lg="6">
                    <p>TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. </p>
                    <p>The two annual TED conferences invite the world's leading thinkers and doers to Vancouver, British Columbia to speak for 18 minutes or less.</p>
                </Col>
                <Col lg={{ span: 4, offset: 1 }}>
                <Image className="about-tedx-ted-official-logo img-fluid" src={TedOfficialLogo} alt="official ted logo"></Image>
                </Col>
            </Row>
            <Row className="about-tedx-tedXUofWInfo">
                <Col lg="6">
                <Image className="about-tedx-team-photo img-fluid" src={TeamPhoto} alt="group photo"></Image>
                </Col>
                <Col lg={{ span: 4, offset: 2 }} >
                    <h3 className='about-tedx-tedXUofWHeader'>TEDxUofW</h3>
                    <p>TEDxUofW is established to bring inspirational and informative TED style talks to the University of Washington. Since 2012, our organization has sought to give amazing speakers a receptive audience to share their passions with. </p>
                    <p>Its annual conference is made possible by a team of creative and hardworking undergraduate students. Our all student-run organization has put on a sold-out event for four years in a row, gathering a collection of great creative thinkers, scientific minds, community leaders, and much more.</p>
                </Col>
            </Row>
            <Row>
                <Col lg="6">
                    <img className="about-tedx-ted-red-logo" src={TedRedLogo} alt="tedx logo"></img>
                </Col>
            </Row>
        </div>
    );
}
export default AboutTedX;