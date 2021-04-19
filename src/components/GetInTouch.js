import React from 'react'
import './Pages.scss';
import { Card } from 'react-bootstrap';

import sideBarPic from '../assets/front-desktop/front-getintouch-page.png'
import staffOne from '../assets/front-desktop/whatwedo-small.png'
import staffTwo from '../assets/front-desktop/maintainable-small.png'
import staffTree from '../assets/front-desktop/getintouch-small.png'



const GetInTouch = () => {

    return (
    <>
    <div className="wrapper" style={{ backgroundColor: "#ffb472"}}>
        <div className="sideBar">
            <img src={sideBarPic} alt="What we do" />
        </div>
        <div className="text">
            <h1>There for you and <span className="contact">care for you </span>...</h1>
            <p>santo shaman next level air plant messenger bag street art blue bottle semiotics lyft bitters four dollar toast. Single-origin coffee taxidermy authentic 90's heirloom butcher tilde austin microdosing man bun jianbing. I'm baby normcore blog brunch, subway tile you probably haven't.Brunch vape narwhal fam, mumblecore chia lumbersexual helvetica. </p>
                
            <p>Four dollar toast scenester neutra brunch bitters affogato, literally thundercats dreamcatcher health goth VHS typewriter artisan heirloom. Fanny pack bitters la croix chia brooklyn. Jean shorts four loko.</p>
        </div>

        <div className="staff">
            <Card className="stafOne">
                <Card.Img variant="top" src={staffOne} />
                <Card.Body>
                    <Card.Title>it@coolish.com</Card.Title>
                </Card.Body>
            </Card>
            <Card className="stafTwo">
                <Card.Img variant="top" src={staffTwo} />
                <Card.Body>
                    <Card.Title>pr@coolish.com</Card.Title>
                </Card.Body>
            </Card>
            <Card className="stafTree">
                <Card.Img variant="top" src={staffTree} />
                <Card.Body>
                    <Card.Title>mn@coolish.com</Card.Title>
                </Card.Body>
            </Card>
        </div>


        <div className='breadcrum'>
            <button>GetInTouch</button>
        </div>
    </div>    
    </>

    )//END RETURN

} //END RETURN

export default GetInTouch;