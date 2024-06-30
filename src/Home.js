import './Home.css';
import imgAustria from './assets/Austria.jpg'
import React from "react";
import {Link} from "react-router-dom";

function Home() {
    return (
        <>
            <div className="Home">
                <header>
                    <h1>The Vorobyevs</h1>
                </header>
            </div>
            <div className="banner">
                <img className="img" src={imgAustria} alt="Abby and Ilya in Austria"/>
                <div className="text">
                    <p className="names">Abby Gandert</p>
                    <p className="mid">and</p>
                    <p className="names">Ilya Vorobyev</p>
                </div>
            </div>
            <div className="announce">
                <p className="statement">We're Getting Married!</p>
                <p className="date">8.16.2025</p>
            </div>
        </>
    );
}

export default Home;