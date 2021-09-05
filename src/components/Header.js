import React from 'react'
import brandlogo from '../assets/brandlogo.png'
export const Header = () => {
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
                            {/* <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Attorneys</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul> */}

                        </nav>
                    </div>
                    <div className="head-call">
                        <div className="call-text">Call Today for Your Complimentary Consultation</div>
                        <div className="call-num">801-355-9700</div>
                    </div>
                </div>
                <div className="tagline">
                    <h1>Aggressive Representation
                        <span> Individualized for Every Client</span>
                    </h1>
                </div>
                <div className="practice-areas-nav">
                    {/* <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul> */}
                </div>
            </header>
        </div>
    )
}
