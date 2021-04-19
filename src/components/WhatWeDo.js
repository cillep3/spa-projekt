import React from 'react'
import './Pages.scss';
import sideBarPic from '../assets/front-desktop/what-we-do-page.png'

const WhatWeDo = ({ items }) => {

    return (
    <>
    <div className="wrapper" style={{ backgroundColor: "#abcfe6"}}>
        <div className="sideBar">
            <img src={sideBarPic} alt="What we do" />
        </div>
        <div className="text">
            <h1>Design is the <span className="about">matter of choise </span>...</h1>
            <p>I'm baby normcore blog brunch, subway tile you probably haven't heard of them austin dreamcatcher blue bottle forage brooklyn messenger bag celiac. Kombucha umami vaporware beard. Shabby chic whatever humblebrag vegan crucifix lomo marfa celiac. Microdosing asymmetrical single-origin coffee stumptown keffiyeh art party</p>
                
            <p>gochujang lumbersexual hella disrupt poke forage banh mi meditation cardigan. Offal brunch artisan green juice, williamsburg kombucha polaroid selfies PBR&B pok pok palo santo semiotics. Readymade next level chambray, gastropub listicle DIY pickled godard deep v ramps 90's chia slow-carb food truck mustache.</p>

            <p>I'm baby normcore blog brunch, subway tile you probably haven't heard of them austin dreamcatcher blue bottle forage brooklyn</p>
        </div>
        <div className='breadcrum'>
            <button>WhatWeDo</button>
        </div>
    </div>    
    </>

    )//END RETURN

} //END RETURN

export default WhatWeDo;