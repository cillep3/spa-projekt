import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';


const Navbar = () => {
    

    return (
      
            <div className="nav">
                <nav>
                    <ul>
                        <li className='nav-item-about'>
                            <Link to='/about'>Home</Link>
                        </li>
                        <li className='nav-item-Maintainable'>
                            <Link to='/Maintainable'>Main</Link>
                        </li>
                        <li className='nav-item-contact'>
                            <Link to='/contact'>Con</Link>
                        </li>
                    </ul >
                </nav >
            </div >

    );
}

export default Navbar;