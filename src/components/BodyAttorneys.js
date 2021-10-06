import React from 'react'
import { Link } from 'react-router-dom'
export const BodyAttorneys = () => {
    return (
        <div className="changing-body">
            <div className="column-main-wrapper">
                <div className="column-main">
                    <h1 className="page-title">Attorneys</h1>
                    <article class="content" id="content">
                        <div class="content-0">
                            <h2>Salt Lake City, Utah, Lawyer</h2><p>At The Pace Law Firm, Attorneys and Counselors at Law, we work closely together to assist individuals and families with legal matters. Located in Salt Lake City, Utah, we provide legal advice for people in the areas of family law, adoptions, business law, personal injury and appellate law.</p><p>With over 20 years of experience, our attorneys have proven expertise in many areas of law and continually work to achieve the most favorable results for our clients. To read more about each of our attorneys' legal backgrounds, please follow the links below.</p>
                            <ul>
                                <li class="itemOnly last-child">
                                    <Link to="/Our-Attorneys/David-S-Pace">David S. Pace</Link>
                                </li>
                            </ul>
                            <h3>Contact The Pace Law Firm, Attorneys and Counselors at Law, Today</h3><p>When legal matters affect your life in any way, know that you will be well cared for at our firm because we care about the outcome of your case. Please <a href="/web/20201001032437/https://www.pacelawutah.com/Contact.shtml">contact us</a> today at <strong>866-780-9641</strong> to schedule a complimentary consultation with us.</p>
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
    )
}
