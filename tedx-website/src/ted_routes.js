import { Routes, Route } from 'react-router-dom'
import Landing from "./components/landing"
function TedRoutes() {
    /* To add a new route, add the following inside <Routes></Routes>.
       Make sure to change /your-path to the desired path and <MyComponent /> to your component.
       <Route path="/your-path" element = { <MyComponent /> } /> */
    return (
        <Routes>
            <Route path="/" element = { <Landing /> } />
        </Routes>
    );
}

export default TedRoutes;