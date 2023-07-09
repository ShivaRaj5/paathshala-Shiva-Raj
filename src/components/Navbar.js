import React, { useContext, useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import instagram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'

import { UserContext } from '../App';
const Navbar = () => {
    const { state, dispatch } = useContext(UserContext)
    const RenderMenu = () => {
        if (state) {
            return (
                <>
                    <li><Link style={{ textDecoration: 'none', color: 'gray', fontWeight: 'bold' }} to='/'>Home</Link></li>
                    <div className="dropdown">
                        <li className="dropbtn"><Link style={{ textDecoration: 'none', color: 'gray', fontWeight: 'bold' }} to='/categories'>Categories</Link></li>
                        <div className="dropdown-content" style={{ zIndex: '100' }}>
                            <Link to="/categories/sports">Sports</Link>
                            <Link to="/categories/entertainment">Entertainment</Link>
                            <Link to="/categories/music">Music</Link>
                            <Link to="/categories/lifestyle">Lifestyle</Link>
                            <Link to="/categories/historical">Historical</Link>
                            <Link to="/categories/politics">Politics</Link>
                            <Link to="/categories/other">Other</Link>
                        </div>
                    </div>
                    <li><Link style={{ textDecoration: 'none', color: 'gray', fontWeight: 'bold' }} to='/blog'>Blog</Link></li>
                    <li><Link style={{ textDecoration: 'none', color: 'gray', fontWeight: 'bold' }} to='/about'>About</Link></li>
                    <li><Link style={{ textDecoration: 'none', color: 'gray', fontWeight: 'bold' }} to='/contact'>Contact</Link></li>
                    <li><Link style={{ textDecoration: 'none', color: 'gray', fontWeight: 'bold' }} to='/profile'>My Profile</Link></li>
                    <li><Link style={{ textDecoration: 'none', color: 'gray', fontWeight: 'bold' }} to='/logout'>Logout</Link></li>
                </>
            )
        }
        else {
            return (
                <>
                    <li><Link style={{ textDecoration: 'none', color: 'gray', fontWeight: 'bold' }} to='/'>Home</Link></li>
                    <div className="dropdown">
                        <li className="dropbtn"><Link style={{ textDecoration: 'none', color: 'gray', fontWeight: 'bold' }} to='/categories'>Categories</Link></li>
                        <div className="dropdown-content" style={{ zIndex: '100' }}>
                            <Link to="/categories/sports">Sports</Link>
                            <Link to="/categories/entertainment">Entertainment</Link>
                            <Link to="/categories/music">Music</Link>
                            <Link to="/categories/lifestyle">Lifestyle</Link>
                            <Link to="/categories/historical">Historical</Link>
                            <Link to="/categories/politics">Politics</Link>
                            <Link to="/categories/other">Other</Link>
                        </div>
                    </div>
                    <li><Link style={{ textDecoration: 'none', color: 'gray', fontWeight: 'bold' }} to='/blog'>Blog</Link></li>
                    <li className='aboutclass'><Link style={{ textDecoration: 'none', color: 'gray', fontWeight: 'bold' }} to='/about'>About</Link></li>
                    <li className='contactClass'><Link style={{ textDecoration: 'none', color: 'gray', fontWeight: 'bold' }} to='/contact'>Contact</Link></li>
                    <li><Link style={{ textDecoration: 'none', color: 'gray', fontWeight: 'bold' }} to='/signup'>Sign Up</Link></li>
                    <li><Link style={{ textDecoration: 'none', color: 'gray', fontWeight: 'bold' }} to='/login'>Log IN</Link></li>
                </>
            )
        }
    }

    return (
        <>
            <header>
                <div className="imghsearch">
                    <div className="headerimg">
                        <a href="https://www.facebook.com/shiva.raaj.73" target="_blank">
                            <img src={facebook} alt="logo" />
                        </a>
                        <a href="https://twitter.com/abShivaRaj" target="_blank">
                            <img src={twitter} alt="logo" />
                        </a>
                        <a href="https://www.instagram.com/shiva_raj_5/" target="_blank">
                            <img src={instagram} alt="logo" />
                        </a>
                        <a href="https://linkedin.com/in/shiva-raj-6033b71a3" target="_blank">
                            <img src={linkedin} alt="logo" />
                        </a>
                    </div>
                    <h1 className='h1style'>iCoder Blog.</h1>
                    
                </div>
                <h2 className='h2style'>iCoder Blog.</h2>
                <hr id='hrStyling'  />
                <nav>
                    <ul>
                        <RenderMenu />
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar