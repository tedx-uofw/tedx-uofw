import { Routes, Route } from 'react-router-dom'
import AboutTeam from './components/about_team/about_team'
import OurSponsors from './components/our_sponsors/our_sponsors';
import SpeakerList from './components/speaker_list/speakerlist';

function TedRoutes() {
    /* To add a new route, add the following inside <Routes></Routes>.
       Make sure to change /your-path to the desired path and <MyComponent /> to your component.
       <Route path="/your-path" element = { <MyComponent /> } /> */
    return (
        <Routes>
            <Route path="/meet-the-team" element = { <AboutTeam /> } />
            <Route path="/sponsors" element = { <OurSponsors /> } />
            <Route path="/speakers" element = { <SpeakerList />} />
        </Routes>
    );
}

export default TedRoutes;