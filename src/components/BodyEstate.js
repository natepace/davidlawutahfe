import React from 'react'
import { Link } from 'react-router-dom'
export const BodyEstate = () => {
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
                            <h1 className="page-title">Real Estate</h1>
                            <article class="content" id="content">
                                <div class="content-0">
                                    <p>Real Estate is the single largest asset of most individuals and businesses. Managing and protecting real estate and its use is of primary importance. No business or individual can operate at maximum effectiveness when they are worrying about litigation rather than life and productivity. Even successful lawsuits can paralyze you.</p><p>Our goal is to direct our clients' lives so they can work and live without worrying about legal troubles. We spend our time in the courtroom with the intent of keeping our clients as far away from it as possible. However, conflicts occasionally arise.</p><p>When conflict comes, we bring it hard, with no apologies. When you need protection, the only effective method is to go hard, get results, and get out — leaving you free to get back to the business of life.</p><p>We are thoroughly skilled and comfortable in all areas of case assessment, negotiation, mediation, arbitration, trial and appellate practice. We never forget that how we perform at the negotiating table or in the courtroom has the single biggest effect on the outcome of your case.</p><p>If you are in need of help, contact us today. We will sit down with you, sort through your situation, and give you an honest and straightforward assessment of how we can solve your business problem.</p><p>Contact our Salt Lake City lawyers today for a free consultation about your case. Call us at 801-355-9700 or <strong> contact us below!</strong></p>
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
