import React from 'react'
import './PagesMobil.scss';

import topPic from "../../assets/front-mobil/whatwedo.png";
import logo from "../../assets/logo-a.png";




const WhatWeDo = () => {

    return (
        <>
            <div className="wrapperMobil" style={{ backgroundColor: "#abcfe6" }}>

                <div className="topPic">
                    <img src={topPic} alt="What we do" />
                </div>
                <div className="textMobil">
                    <h1>Design is the <span className="about">matter of choise </span>...</h1>
                    <p>I'm baby normcore blog brunch, subway tile you probably haven't heard of them austin dreamcatcher blue bottle forage brooklyn messenger bag celiac. Kombucha umami vaporware beard. Shabby chic whatever humblebrag vegan crucifix lomo marfa celiac. Microdosing asymmetrical single-origin coffee stumptown keffiyeh art party</p>

                    <p>gochujang lumbersexual hella disrupt poke forage banh mi meditation cardigan. Offal brunch artisan green juice, williamsburg kombucha polaroid selfies PBR&B pok pok palo santo semiotics. Readymade next level chambray, gastropub listicle DIY pickled godard deep v ramps 90's chia slow-carb food truck mustache.</p>

                    <p>I'm baby normcore blog brunch, subway tile you probably haven't heard of them austin dreamcatcher blue bottle forage brooklyn</p>
                </div>

                <div className="logo">
                    <img src={logo} alt="Logo blå" />
                </div>
            </div>
        </>
    )
}

export default WhatWeDo;