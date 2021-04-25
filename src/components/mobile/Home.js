import React from 'react'
import './Home.scss';

import picOne from "../../assets/front-mobil/whatwedo.png";
import picTwo from "../../assets/front-mobil/maintainable.png";
import picTree from "../../assets/front-mobil/getintouch.png";





const Home = () => {

    return (
        <>
            <div className="allPictures">

                <div className="picOne">
                    <img src={picOne} alt="What we do" />

                </div>
                <div className="picTwo">
                    <img src={picTwo} alt="Maintainable" />

                </div>
                <div className="picTree">
                    <img src={picTree} alt="Get in touch" />

                </div>

                <div className='text'>
                    <button>And yet... more to come</button>
                </div>

            </div>
        </>
    )
}

export default Home;