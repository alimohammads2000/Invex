import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.jpg';
import './Header.scss';

const Header = () => {
    const [dropDownOpen, setdropDownOpen] = useState(null);
    const [isActive, setisActive] = useState(false);

    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleDropdown = (dropdownName) => {
        setdropDownOpen((prev) => (prev === dropdownName ? null : dropdownName));
    };

    const handleClickOutside = (event) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            buttonRef.current &&
            !buttonRef.current.contains(event.target)
        ) {
            setdropDownOpen(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleCollapse = () => {
        setisActive((prev) => !prev);
    };

    const handleDropdownItemClick = () => {
        setdropDownOpen(null);
    };

    return (
        <header>
            <div className="container">
                <div className={`flex items-center justify-between min-h-[70px] ${isActive ? 'show' : ''}`}>
                    <div className="logo-wrapper">
                        <Link to="/">
                            <img src={Logo} alt="Logo" />
                        </Link>
                    </div>

                    <div className="button-collapse">
                        <button className="svg-wrapper" onClick={handleCollapse}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#FFFFFF">
                                <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                            </svg>
                        </button>
                    </div>

                    <div className="menu-wrapper">
                        <Link to="/">Home</Link>
                        <Link to="/about" onClick={handleDropdownItemClick}>About Invex</Link>

                        {/* <div className="dropdownMenu">
                            <button
                                ref={buttonRef}
                                onClick={() => toggleDropdown('menu1')}
                                className={`flex ${dropDownOpen === 'menu1' ? 'active' : ''}`}
                            >
                                About Us
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z" />
                                    </svg>
                                </span>
                            </button>

                            {dropDownOpen === 'menu1' && (
                                <ul ref={menuRef}>
                                    <li>
                                        <Link to="/about" onClick={handleDropdownItemClick}>About Invex</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog" onClick={handleDropdownItemClick}>Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="/news" onClick={handleDropdownItemClick}>News</Link>
                                    </li>
                                    <li>
                                        <Link to="/awards" onClick={handleDropdownItemClick}>Awards</Link>
                                    </li> 
                                </ul>
                            )}
                        </div> */}

                        <Link to="/blog">Blog</Link>
                        <Link to="/contact">Contact Us</Link>
                    </div>

                    <div className="button-wrapper">
                        <Link className="signin-btn" to="/login">Sign In</Link>
                        <Link className="signup-btn" to="/signup">Sign Up</Link>
                    </div>

                    <div className='mobileNav'>
                        <div className='menu-wrapper'>
                            <Link to="/">Home</Link>
                            <Link to="/about">About INVEX</Link>
                            <Link to="/">Blog</Link>
                            <Link to="/">Contact Us</Link>
                        </div>
                        <div className='button-wrapper'>
                        <Link className='signin-btn' to={'/login'}>Sign In</Link>
                        <Link className='signup-btn'>Sign Up</Link>
                    </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
