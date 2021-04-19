import React from 'react'
import './Index.scss';
import logo from "../assets/logo.png";
import picOne from "../assets/front-desktop/what-we-do.png"
import picTwo from "../assets/front-desktop/maintainable.png"
import picTree from "../assets/front-desktop/get-in-touch.png"


const Index = () => {

    return (
    <>
    <div className="container">

        <div className="logo">
            <a href="/"><img src={logo} alt="Logo" /></a>
        </div>

        <div className="picOne">
            <a href="/about"><img src={picOne} alt="What we do" /></a>
        </div>

        <div className="picTwo">
            <a href="/maintainable"><img src={picTwo} alt="What we do" /></a>
        </div>

        <div className="picTree">
            <a href="/contact"><img src={picTree} alt="What we do" /></a>
        </div>

        <div className='text'>
            <button>And yet... more to come</button>
        </div>

    </div>      
    </>
    )
}

export default Index;