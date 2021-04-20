import React, { useState } from 'react'
import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false)


    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <NavLink to='/' className="navbar-logo">
                        <img src={logo} alt="Logo" onClick={closeMobileMenu} />
                    </NavLink>
                    <div className='mobile-menu-ikon' onClick={handleClick}>
                        {click ? <FaTimes color='#1c2237' /> : <FaBars color='#1c2237' />}
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item-home">
                            <NavLink exact to='/' activeClassName="home-active" className="nav-links" onClick={closeMobileMenu}>
                                HOME
                            </NavLink>
                        </li>

                        <li className="nav-item-whatwedo">
                            <NavLink exact to='/about' activeClassName="whatwedo-active" className="nav-links" onClick={closeMobileMenu}>
                                WHATWEDO
                            </NavLink>
                        </li>

                        <li className="nav-item-maintainable">
                            <NavLink exact to='/maintainable' activeClassName="maintainable-active" className="nav-links" onClick={closeMobileMenu}>
                                MAINTAINABLE
                            </NavLink>
                        </li>

                        <li className="nav-item-contact">
                            <NavLink exact to='/contact' activeClassName="contact-active" className="nav-links" onClick={closeMobileMenu}>
                                GETINTOUCH
                            </NavLink>
                        </li>
                    </ul>



                </div>

            </div>
        </>
    )
}

export default Navbar
