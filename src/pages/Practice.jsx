import React, { useState } from "react";
import balaji from "../../src/images/Bangalore/balaji.jpeg";
import cinepolis from "../../src/images/Bangalore/cinepolis.jpeg";
import "../../src/styles/Practice.css";
import garuda from "../images/Bangalore/garuda.jpeg";
import sandhya from "../images/Bangalore/sandhya.jpeg";
import sharadha from "../images/Bangalore/sharadha.jpeg";
import AGS from "../images/Chennai/AGS.jpeg";
import Anna from "../images/Chennai/Anna.png";
import idream from "../images/Chennai/idream.jpeg";
import ksi from "../images/Chennai/ksi.jpg";
import pvrsatyam from "../images/Chennai/pvr satyam.jpg";
import devi from "../images/Hyderabad/devi.jpeg";
import prasad from "../images/Hyderabad/prasad.jpg";
import sandhyahyd from "../images/Hyderabad/sandhya.jpg";
import sudarshan from "../images/Hyderabad/sudarshan.jpeg";
import alka from "../images/Pune/alka.avif";
import inoxpune from "../images/Pune/inox.jpeg";
import lakshmi from "../images/Pune/lakshmi.jpeg";
import neelam from "../images/Pune/neelam.jpeg";
import victory from "../images/Pune/victory.jpeg";
import gokul from "../images/Vizag/gokul.jpeg";
import jagadamba from "../images/Vizag/jagadamba.jpeg";
import kanya from "../images/Vizag/kanya.jpeg";
import leela from "../images/Vizag/leela.jpeg";
import svc from "../images/Vizag/svc.jpg";
import eylex from "../images/common/eylex.jpg";
import imax from "../images/common/imax.webp";
import marati from "../images/common/maratamandir.jpg";
import raj from "../images/common/raj.jpg";
import pvr from "../images/pvr.jpeg";

const Practice = () => {

    const[isopen, setisopen] = useState(false);
    const [selectedcity, setselectedcity]   = useState(null);
    const cities = ["Bangalore", "Hyderabad", "Chennai", "Pune", "Vizag"];
    const theatres = {
        Bangalore:[
            {name:"Balaji", photo:balaji},
            {name:"Cinepolis", photo:cinepolis},
            {name:"Garuda", photo:garuda, address:"fcgv"},
            {name:"Sandhya", photo:sandhya, address:"tyg"},
            {name:"sharada", photo:sharadha, address:"fcv"},
        ],
        Chennai:[
            {name:"AGS", photo:AGS, address:"drtf"},
            {name:"Anna theatre", photo:Anna, address:"fcgv"},
            {name:"IDream", photo:idream, address:"fcgv"},
            {name:"ksi", photo:ksi, address:"tyg"},
            {name:"PVR satyam", photo:pvrsatyam, address:"fcv"},
        ],
        Hyderabad:[
            {name:"Devi", photo:devi, address:"drtf"},
            {name:"prasad", photo:prasad, address:"fcgv"},
            {name:"sandhya", photo:sandhyahyd, address:"fcgv"},
            {name:"sudarshan", photo:sudarshan, address:"tyg"}
            
        ],
        Pune:[
            {name:"Alka", photo:alka, address:"drtf"},
            {name:"Inox", photo:inoxpune, address:"fcgv"},
            {name:"Lakshmi", photo:lakshmi, address:"fcgv"},
            {name:"Nellam", photo:neelam, address:"tyg"},
            {name:"victory", photo:victory, address:"fcv"},
        ],
        Vizag:[
            {name:"Gokul", photo:gokul, address:"drtf"},
            {name:"Jagadhamba", photo:jagadamba, address:""},
            {name:"Kanya", photo:kanya, address:"fcgv"},
            {name:"leela", photo:leela, address:"tyg"},
            {name:"SVC", photo:svc, address:"fcv"},
        ]
    };

    const togglemenu = () => {
        setisopen(!isopen);
    };

    const closetogglemenu = () => {
        setisopen(false);
    };

    const handlecityselected = (e) => {
        setselectedcity(e.target.value);
    };


    return(
        <>
            <div className="nav-bar">
                <div className="nav-header">
                    <button className="hamburger" onClick={togglemenu}>
                        &#9776;
                    </button>
                    <h1>Book The Show  &#127909;
                    &#x1F3A5;</h1>
                    <h3>Across all the Cities &#x1F4CD;</h3>
                </div>
                <div className={`nav-bar-links ${isopen ? 'open' : ''}`}>
                    <p onClick={closetogglemenu} className="closehamburger">X</p>
                    <p>Home</p>
                    <p>Place</p>
                    <p>Contact</p>
                </div>
            </div>

            <div className="search-bar">
                <h1>Select the City</h1>
                <select className="search" onChange={handlecityselected}>
                    <option value="">Select a city</option>
                    {/* {cities.map((city, index) => {
                        <option key={index} value={city}>{city}</option>
                    })} */}

                    {cities.map((city, index) => (
                        <option key={index} value={city}>{city}</option>
                    ))}
                </select>

                {selectedcity && (
                    <div className="theatre-container">
                        {theatres[selectedcity].map((theatre, index) => (
                            <div className="theatre-list" key={index}>
                            <h1>{theatre.name}</h1>
                            <img className="city-theatre" src={theatre.photo} alt="" />
                            <button>Book Now</button>
                            </div>
                        ))}
                    </div>
                )}
                    <div className="divs">
                    <h2>Some top Picks</h2>
                        <div className="row">
                            
                            <div className="theatre">
                                <img src={eylex} alt="" />
                                <h3>Eylex cinemas</h3>
                                <p>Jamshedpur</p>
                            </div>

                            <div className="theatre">
                            <img src={imax} alt="" />
                                <h3>IMAX</h3>
                                <p>Hyderabad</p>
                            </div>

                            <div className="theatre">
                            <img src={marati} alt="" />
                                <h3>Marati mandir</h3>
                                <p>Maharastra</p>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="theatre">
                            <img src={raj} alt="" />
                                <h3>Raj Cinemas</h3>
                                <p>Rajasthan</p>
                            </div>
                            <div className="theatre">
                            <img src={sudarshan} alt="" />
                                <h3>Sudharshan</h3>
                                <p>Hyderabad</p>
                            </div>
                            <div className="theatre">
                            <img src={pvr} alt="" />
                                <h3>PVR Cinemas</h3>
                                <p> Bengaluru</p>
                            </div>
                        </div>
                    </div>
                
            </div>
        </>
    );
};


export default Practice;