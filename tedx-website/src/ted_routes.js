import { Routes, Route } from 'react-router-dom'
import AboutTeam from './components/about_team/about_team'
import OurSponsors from './components/our_sponsors/our_sponsors';
import Landing from "./components/landing"
import AboutTedX from './components/about_tedx/about_tedx';


function TedRoutes() {
    /* To add a new route, add the following inside <Routes></Routes>.
       Make sure to change /your-path to the desired path and <MyComponent /> to your component.
       <Route path="/your-path" element = { <MyComponent /> } /> */
    return (
        <Routes>
            <Route path="/" element = { <Landing /> } />
            <Route path="/meet-the-team" element = { <AboutTeam /> } />
            <Route path="/sponsors" element = { <OurSponsors /> } />
            <Route path="/about-tedx" element = { <AboutTedX /> } />
        </Routes>
    
    );
}

export default TedRoutes;