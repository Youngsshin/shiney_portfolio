import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css'; 

function Header() {
    return (
        <div>
            {/* header */}
            <header className="header">
                <nav className="nav">
                    <Link to="/" className="logo">SHINEY</Link>
                    <div className="nav-links">
                        <Link to="/about">ABOUT</Link>
                        <span className="nav-dot"></span>
                        <a href="#contact">CONTACT</a>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;