import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Home from "./Home.js";
import React from "react";
import Main from "./Main";

function App() {
    return (
        <>
            <div>
                <Main/>
            </div>
        </>
    );
}

export default App;
