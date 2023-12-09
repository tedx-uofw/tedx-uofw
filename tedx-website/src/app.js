import React from 'react';
import Footer from "./components/footer/footer";
import TedRoutes from "./ted_routes"
import TedNavBar from './components/ted_navbar/ted_navbar'
import Popup from './components/popup/Popup';

import { useState, useEffect } from 'react';

import './app.css'
import 'bootstrap/dist/css/bootstrap.css';
import './variables.css'

function App() {
    const [timedPopup, setTimedPopup] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTimedPopup(true);
        }, 0);
    }, []);
    return (
        <div className="App">
            <TedNavBar />
            <TedRoutes />
            <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
                <h3>Coming Soon</h3>
                <br></br>
                <p>TEDxUofW's conference will be held on April 13th, 2024.</p>
                <p>The theme will be announced soon.</p>
                <p>In the meantime, check out our website from last years conference!</p>
            </Popup>
            <Footer />
        </div>
    );
}

export default App;