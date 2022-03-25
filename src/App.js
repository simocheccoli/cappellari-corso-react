import './App.css';
import Navbar from "./Components/Navbar/Navbar.js";
import React from "react";
import Router from "./Router";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Router/>
        </div>
    );
}

export default App;
