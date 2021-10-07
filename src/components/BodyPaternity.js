import React from 'react'
import { Link } from 'react-router-dom'
export const BodyPaternity = () => {
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
                            <h1 className="page-title">Salt Lake City Paternity Lawyers</h1>
                            <article class="content" id="content">
                                <div class="content-0">
                                    <h2>Upholding Your Parental Rights in Utah</h2><p>It's a common misconception that if you are not married, you do not have paternal rights if you do not remain in a relationship. Fathers <strong>do</strong> have paternal rights, however. In fact, a split from a long-term relationship can be similar to a divorce. Our Cottonwood Heights attorneys have advised many unmarried parents regarding their rights and obligations regarding their children.</p><p>At The Pace Law Firm, Attorneys and Counselors at Law, we provide assistance for individuals in paternity and family law matters in Salt Lake City, Utah, and throughout the surrounding areas. Our team of experienced legal professionals is kind, attentive and knowledgeable of the law. We dedicate time to listen to your situation and will keep you informed of your rights.</p><h3>Utah Child Support and Fathers' Rights Lawyers Working on Your Team</h3><p>A court order is required to determine paternal rights for parents who are not married. This is an important step for both mothers and fathers. Even if you have been in an ongoing and committed relationship, a paternity action is necessary to establish legal rights and responsibilities for a child born outside of marriage.</p><p class="callOut">A paternity action will provide protection for both parents concerning <Link to="/Family-Law/Child-Custody">child custody</Link> and with <Link to="/Family-Law/Child-Support">child support</Link> calculations. For mothers, it will establish a clear definition of what the father's rights are, and for fathers, it provides protection to prevent <Link to="/Family-Law/Adoptions">adoption</Link> and establish parent time.</p><h3>Salt Lake City Paternity Attorneys</h3><p>Call us at <strong>801-355-9700</strong> or <strong> contact us below </strong>to schedule a complimentary consultation. We look forward to hearing from you.</p>
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
                            {/* **FAMILY SUBLINKS ********************/}
                            <Link className="family-subnavs" to="/Family-Law/Divorces">
                                <div></div>
                                <p>
                                    Divorce
                                </p>
                            </Link>
                            <Link className="family-subnavs" to="/Family-Law/Asset-Division">
                                <div></div>
                                <p>
                                    Asset Division
                                </p>
                            </Link>
                            <Link className="family-subnavs" to="/Family-Law/Alimony">
                                <div></div>
                                <p>
                                    Alimony
                                </p>
                            </Link>

                            <Link className="family-subnavs" to="/Family-Law/Child-Custody">
                                <div></div>
                                <p>
                                    Child Custody
                                </p>
                            </Link>
                            <Link className="family-subnavs" to="/Family-Law/Visitation-Parenting-Time">

                                <div></div>
                                <p>
                                    Visitation
                                </p>
                            </Link>
                            <Link className="family-subnavs" to="/Family-Law/Child-Support">
                                <div></div>
                                <p>
                                    Child Support
                                </p>
                            </Link>
                            <Link className="family-subnavs-PRIM" to="/Family-Law/Paternity">
                                <div></div>
                                <p>
                                    Paternity
                                </p>
                            </Link>
                            <Link className="family-subnavs" to="/Family-Law/Adoptions">
                                <div></div>
                                <p>
                                    Adoptions
                                </p>
                            </Link>
                            <Link className="family-subnavs" to="/Family-Law/Modifications">
                                <div></div>
                                <p>
                                    Modifications
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
        </div >
    )
}
