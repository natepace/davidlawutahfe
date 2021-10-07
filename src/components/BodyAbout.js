import React from 'react'
import { Link } from 'react-router-dom'
export const BodyAbout = () => {
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
                            <h1 className="page-title">The Pace Law Firm, Attorneys and Counselors at Law</h1>
                            <article className="content">
                                <div class="content-0">
                                    <h3>A Salt Lake City, Utah, Law Firm That Meets Your Expectations</h3>
                                    <p>The idea of choosing a lawyer may seem daunting and overwhelming — especially if your legal matter may drastically affect your future. At The Pace Law Firm, Attorneys and Counselors at Law, we recognize that this decision may be difficult but are here to reassure you that it can be an easy decision if you work with our firm.</p>

                                    <p>Our firm is located in Salt Lake City, Utah, and represents clients throughout the state of Utah in family law, business law, real estate, personal injury, civil rights, judgment enforcement, wrongful death, bankruptcy litigation, and appellate matters. <Link to='/Our-Attorneys'>Our attorneys</Link> are very experienced, knowledgeable and understanding. We are caring and committed to meeting our clients' needs and continually aim to provide the best possible representation. When you work with us, you can expect:</p>

                                    <ul>
                                        <li><strong>Dedication to your case</strong></li>
                                        <li><strong>Individualized and personalized representation</strong></li>
                                        <li><strong>Knowledgeable legal advice</strong></li>
                                        <li><strong>Support from your attorney</strong></li>
                                        <li class="last-child"><strong>Aggressive action to accomplish your goals</strong></li>
                                    </ul>

                                    <h3>Experience and Knowledge That Really Matters</h3>
                                    <p>Our legal team is very focused on accomplishing your goals and works to find the best solution with your family law, business law, real estate, personal injury, civil rights, judgment enforcement, wrongful death, bankruptcy litigation, and appellate matters. Whether you have needs concerning alimony, child custody, child support or adoption, a serious injury, a real estate transaction, or collecting a judgment, we keep your goals in the forefront the entire time.</p>
                                    <p class="callOut">We work in a very collaborative yet aggressive environment and are very knowledgeable of the local judges, commissioners, and legal system. We use our knowledge to inform our clients of different strategies for their cases and provide legal advice that will likely achieve the best results. No matter what your situation is when you come to us — we are here to listen and provide the best possible legal service and advice.
                                    </p>
                                    <h3>Contact Us Today</h3>
                                    <p>Contact us toll free at <strong>801-355-9700</strong> or feel free to
                                        <strong> contact us below!</strong> We accept all major credit cards as payment, and offer payment plans as well as Spanish language services.
                                    </p>
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
