import React from 'react';
import Footer from "./components/footer";
import TedRoutes from "./ted_routes"
import TedNavBar from './components/ted_navbar'

import './app.css'
import 'bootstrap/dist/css/bootstrap.css';
import './variables.css'

function App() {
    return (
        <div className="App">
            <TedNavBar />
            <TedRoutes />
            <Footer />
        </div>
    );
}

export default App;