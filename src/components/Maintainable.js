import React from 'react'
import './Pages.scss';
import sideBarPic from '../assets/front-desktop/maintainable.png'

const Maintainable = () => {

    return (
    <>
    <div className="wrapper" style={{ backgroundColor: "#bfddef"}}>
        <div className="sideBar">
            <img src={sideBarPic} alt="What we do" />
        </div>
        <div className="text">
            <h1>Keeping your all <span className="maintainable">up to date </span>...</h1>
            <p>Meh retro pinterest hoodie crucifix. Shoreditch gochujang waistcoat </p>
                
            <p>santo shaman next level air plant messenger bag street art blue bottle semiotics lyft bitters four dollar toast. Single-origin coffee taxidermy authentic 90's heirloom butcher tilde austin microdosing man bun jianbing. I'm baby normcore blog brunch, subway tile you probably haven't</p>

            <p>Four dollar toast scenester neutra brunch bitters affogato, literally thundercats dreamcatcher health goth VHS typewriter artisan heirloom. Fanny pack bitters la croix chia brooklyn. Jean shorts four loko cliche mumblecore meggings.</p>
        </div>
        <div className='breadcrum'>
            <button>MaintainAble</button>
        </div>
    </div>    
    </>

    )//END RETURN

} //END RETURN

export default Maintainable;