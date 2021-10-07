import React from 'react'
import { Link } from 'react-router-dom'
export const BodyCivil = () => {
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
                            <h1 className="page-title">Civil Rights</h1>
                            <article class="content" id="content">
                                <div class="content-0">
                                    <p>America stands for truth and justice, based on the individual rights guaranteed by the constitution. Sometimes the people we entrust to uphold the constitution break it. When that happens, the courts serve as the fortress of justice, protecting those who don't have the power to defend themselves.</p><p>We have extensive experience battling the state when bad actors within it violate people's rights. This is a complex area of law that requires specific legal knowledge and an intense commitment to having truth prevail. &nbsp;We're not afraid to battle the city, the state, the police, prisons, and even the U.S. government when any of them decide to trample the rights of its citizens.</p><p>We are thoroughly skilled and comfortable in all areas of case assessment, negotiation, mediation, arbitration, trial and appellate practice. We never forget that how we perform at the negotiating table or in the courtroom has the single biggest effect on the outcome of your case.</p><p>If you are in need of help, contact us today. We will sit down with you, sort through your situation, and give you an honest and straightforward assessment of how we can solve your legal problem. When we move forward on a case, our intent is to win.</p><p>Contact our Salt Lake City lawyers today for a free consultation about your case. Call us at 801-355-9700 or complete and <a href="/web/20201001035042/https://www.pacelawutah.com/Contact.shtml">submit our online contact form</a> today.</p>
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
