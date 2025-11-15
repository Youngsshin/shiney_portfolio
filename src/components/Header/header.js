import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css'; 

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // 페이지 이동 시 메뉴 닫기
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // 메뉴 열릴 때 스크롤 막기
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleContactClick = (e) => {
        e.preventDefault();
        setIsMenuOpen(false);
        
        // 홈 페이지가 아니면 홈으로 이동 후 스크롤
        if (location.pathname !== '/') {
            window.location.href = '/#contact';
        } else {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <div>
            {/* header */}
            <header className="header">
                <nav className="nav">
                    <Link to="/" className="logo">SHINEY</Link>
                    
                    {/* 데스크탑 메뉴 (769px 이상) */}
                    <div className="nav-links desktop-menu">
                        <Link to="/about">ABOUT</Link>
                        <span className="nav-dot"></span>
                        <a href="#contact" onClick={handleContactClick}>CONTACT</a>
                    </div>

                    {/* 햄버거 버튼 (768px 이하) */}
                    <button 
                        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                        aria-label="메뉴"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </nav>
            </header>

            {/* 모바일 풀스크린 메뉴 */}
            <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                <div className="mobile-menu-content">
                    <Link to="/about" className="mobile-menu-link">ABOUT</Link>
                    <a href="#contact" onClick={handleContactClick} className="mobile-menu-link">CONTACT</a>
                </div>
            </div>
        </div>
    )
}

export default Header;