import React from 'react'
import './Index.scss';
import picOne from "../../assets/front-desktop/what-we-do.png"
import picTwo from "../../assets/front-desktop/maintainable.png"
import picTree from "../../assets/front-desktop/get-in-touch.png"


const Index = () => {

    return (
        <>
            <div className="background">


                <div className="picOne">
                    <img src={picOne} alt="What we do" />
                </div>

                <div className="picTwo">
                    <img src={picTwo} alt="What we do" />
                </div>

                <div className="picTree">
                    <img src={picTree} alt="What we do" />
                </div>


                <div className='text'>
                    <button>And yet... more to come</button>
                </div>

            </div>
        </>
    )
}

export default Index;