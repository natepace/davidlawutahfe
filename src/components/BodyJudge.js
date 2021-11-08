import React from 'react'
import { Link } from 'react-router-dom'
export const BodyJudge = () => {
    document.title = "Judgment Enforcement | The Pace Law Firm | Salt Lake City"
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
                                <span>Judgment Enforcement</span>
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
                            <h1 className="page-title">Judgment Enforcement</h1>
                            <article class="content" id="content">
                                <div class="content-0">
                                    <p>A judgment is a piece of paper, representing a court order that someone pay you money. You don't receive any money in your pocket unless the person who owes you voluntarily pays, or you use the power given by your court order to take it. You need to effectively use the powers of the court to enforce your judgment.</p><p>Holding a judgment gives you tremendous legal power, but you need to know how to use that power, what those powers are, where to find hidden assets, and the most effective ways of using your resources to force people who owe you money to pay you.</p><p>Whether you have a judgment for child support, alimony, business debts, or any other source, we have the legal and practical knowledge to force your debtor to pay you. We know how to find hidden assets, to trace and undo fraudulent transfers, and to box in debtors who want to ignore their obligations.</p><p>We are thoroughly skilled and comfortable in all areas of case assessment, negotiation, mediation, arbitration, trial and appellate practice. We never forget that how we perform at the negotiating table or in the courtroom has the single biggest effect on the outcome of your case.</p><p>If you are in need of help, contact us today. We will sit down with you, sort through your situation, and give you an honest and straightforward assessment of how we can solve your judgment enforcement problem.</p><p>Contact our Salt Lake City lawyers today for a free consultation about your case. Call us at 801-355-9700 or <strong> contact us below!</strong></p>
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
                                    Judgment Enforcement
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
