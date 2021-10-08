import React from 'react'
import brandlogo from '../assets/brandlogo.png'
import { Link } from 'react-router-dom'
import { scroller } from 'react-scroll';
export const Header = () => {

    const scrollToForm = () => {
        scroller.scrollTo("form-wrapper", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    }
    return (
        <div className="header-wrap">
            <header className="header-page">
                <div className="logo-nav-container">
                    <div className="brand-logo">
                        {/* <a href="#" > */}
                        <img src={brandlogo} alt="brand-logo" />
                        {/* </a> */}

                    </div>
                    <div className="head-nav">
                        <nav>
                            <ul>
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/about'>About</Link>
                                </li>
                                <li>
                                    <Link to='/Our-Attorneys'>Attorneys</Link>
                                </li>
                                <li>
                                    <Link to='/contact' onClick={scrollToForm}>Contact</Link>
                                </li>
                            </ul>

                        </nav>
                    </div>
                    <div className="head-call">
                        <div className="call-text">Call Today for Your Complimentary Consultation</div>
                        <div className="call-num">801-355-9700</div>
                    </div>
                </div>
                <div className="tagline">
                    <h1>Aggressive Representation <br />
                        <span> Individualized for Every Client</span>
                    </h1>
                </div>
                {/* <div className="practice-areas-nav">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div> */}
            </header>
        </div>
    )
}
