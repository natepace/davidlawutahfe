import React from 'react'
import { Link } from 'react-router-dom'
export const BodyInjury = () => {
    return (
        <div className="changing-body">
            <div className="about-pages-wrapper">
                <div className="practice-areas-nav">
                    <ul>
                        <li>
                            <Link className="family-law-nav" to="/Family-Law">
                                <span>Family Law</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="appeals-law-nav" to="/other-practice-areas/Appeals">
                                <span>Appeals</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="business-law-nav" to="/other-practice-areas/Business-Litigation">
                                <span>Business Litigation</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="civil-law-nav" to="/other-practice-areas/Civil-Rights">
                                <span>Civil Rights</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="judgement-law-nav" to="/other-practice-areas/Judgment-Enforcement">
                                <span>Judgement Enforcement</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="injury-law-nav" to="/other-practice-areas/Personal-Injury">
                                <span>Personal Injury</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="estate-law-nav" to="/other-practice-areas/Real-Estate">
                                <span>Real Estate</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="under-nav-page">
                    <div className="column-main-wrapper">
                        <div className="column-main">
                            <h1 className="page-title">Personal Injury</h1>
                            <article class="content" id="content">
                                <div class="content-0">
                                    <p>Car accidents, bike accidents, unforeseen death, and harmful medical care often devastate the families and individuals involved.</p><p>The serious issues of how to pay bills, recuperate, deal with insurance companies and deal with the pain of the loss of a loved one are psychologically trying. Every area of your life is thrown into upheaval when you are injured and unable to take care of life's day to day problems. We understand this. We take the heat and the burdens for you, and let you breathe again.</p><p>We take on difficult injury cases on a contingency fee basis, which means that if we take on your case, you will owe us nothing for our services, unless or until we collect the money that you are entitled to. Our fee for representation is typically only one-third of anything we are able to collect for you. When you contact our office we will be able to go into more detail with you about our fee agreements.</p><p>Our first goal in your case will be to completely understand the unique aspects of your situation. We will develop a comprehensive strategy based upon your goals and priorities. We seek the positive outcomes you need and never surrender your dignity or safety during the process.</p><p>When conflict comes with the insurance company or the party that may be responsible for your injury, we bring it hard, with no apologies. When you need protection, the only, effective method is to go hard, get results, and get out — leaving you free to get back to putting your life back together.</p><p>We are thoroughly skilled and comfortable in all areas of case assessment, negotiation, mediation, arbitration, trial and appellate practice. We never forget that how we perform at the negotiating table or in the courtroom has the single biggest effect on the outcome of your case.</p><p>If you are in need of help, contact us today. We will sit down with you for free, sort through your situation, and give you an honest and straightforward assessment of how we can collect the money you deserve leaving you to get better with more peace of mind.</p><p>Contact our Salt Lake City lawyers today for a free consultation about your case. Call us at 801-355-9700 or <strong> contact us below!</strong></p>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="column-menu-wrapper">
                        <nav className="practice-areas-col">

                            <Link className="subnavs" to="/Family-Law">
                                <p>
                                    Family Law
                                </p>
                            </Link>

                            <Link className="subnavs" to="/other-practice-areas/Appeals">
                                <p>
                                    Appeals
                                </p>
                            </Link>

                            <Link className="subnavs" to="/other-practice-areas/Business-Litigation">
                                <p>
                                    Business Litigation
                                </p>

                            </Link>

                            <Link className="subnavs" to="/other-practice-areas/Civil-Rights">
                                <p>
                                    Civil Rights
                                </p>

                            </Link>

                            <Link className="subnavs" to="/other-practice-areas/Judgment-Enforcement">
                                <p>
                                    Judgement Enforcement
                                </p>
                            </Link>
                            <Link className="subnavs" to="/other-practice-areas/Personal-Injury">
                                <p>
                                    Personal Injury
                                </p>
                            </Link>
                            <Link className="subnavs" to="/other-practice-areas/Real-Estate">
                                <p>
                                    Real Estate
                                </p>
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
