import React from 'react'
import './PagesMobil.scss';

import topPic from "../../assets/front-mobil/maintainable.png";
import logo from "../../assets/logo-a.png";




const Maintainable = () => {

    return (
        <>
            <div className="wrapperMobil" style={{ backgroundColor: "#bfddef" }}>

                <div className="topPic">
                    <img src={topPic} alt="What we do" />
                </div>
                <div className="textMobil">
                    <h1>Keeping your all <span className="maintainable">up to date </span>...</h1>
                    <p>Meh retro pinterest hoodie crucifix. Shoreditch gochujang waistcoat </p>

                    <p>santo shaman next level air plant messenger bag street art blue bottle semiotics lyft bitters four dollar toast. Single-origin coffee taxidermy authentic 90's heirloom butcher tilde austin microdosing man bun jianbing. I'm baby normcore blog brunch, subway tile you probably haven't</p>

                    <p>Four dollar toast scenester neutra brunch bitters affogato, literally thundercats dreamcatcher health goth VHS typewriter artisan heirloom. Fanny pack bitters la croix chia brooklyn. Jean shorts four loko cliche mumblecore meggings.</p>
                </div>

                <div className="logo">
                    <img src={logo} alt="Logo blå" />
                </div>
            </div>
        </>
    )
}

export default Maintainable;