import React from 'react';
import './footer.css'; 

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <div>
            {/* footer */}
            <footer className="footer">
                <div className="footer-info">
                    <span>Copyright © KYSHIN 2024</span>
                    <button className="scroll-top" onClick={scrollToTop}>
                        <span className="material-icons">arrow_upward</span>
                    </button>
                </div>

                <div className="scrolling-text">
                    <div className="scrolling-content">
                        <div className="scrolling-item">SHINEY</div>
                        <div className="scrolling-item">GROWING DEVELOPER</div>
                        <div className="scrolling-item">NEVER STOP LEARNING</div>
                        <div className="scrolling-item">AI & WEB</div>
                        <div className="scrolling-item">KYSHIN 2024</div>
                        <div className="scrolling-item">SHINEY</div>
                        <div className="scrolling-item">GROWING DEVELOPER</div>
                        <div className="scrolling-item">NEVER STOP LEARNING</div>
                        <div className="scrolling-item">AI & WEB</div>
                        <div className="scrolling-item">KYSHIN 2024</div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;