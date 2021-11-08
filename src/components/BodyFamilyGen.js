import React from 'react'
import { Link } from 'react-router-dom'
export const BodyFamilyGen = () => {
    document.title = "Family Law Attorney Salt Lake City | Utah Divorce Lawyer"
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
                            <h1 className="page-title">Utah Family Law Attorneys</h1>
                            <article class="content" id="content">
                                <div class="content-0">
                                    <h2>Salt Lake City Divorce, Child Custody and Support Lawyer</h2>
                                    <p>The Pace Law Firm, Attorneys and Counselors at Law, is located in Salt Lake City, Utah, and provides legal assistance for a variety of clients throughout the Salt Lake City area and the state of Utah in family law matters.</p>

                                    <p>With 20 years of experience, our legal staff members are honest, knowledgeable and strong advocates for all our clients. We take the time to listen closely to your concerns and make certain we have an accurate picture of your legal needs. That way, we can provide the most effective legal representation that fully meets your needs.</p>

                                    <p>In addition to family law, we are experienced trial attorneys in other practice areas, including business litigation, civil rights, wrongful death, judgment enforcement, bankruptcy litigation, appellate law and personal injury. We assist individuals and families in family law matters, including:</p>
                                    <p>
                                        <Link to="Family-Law/Divorces"><strong>Divorce</strong></Link>

                                        <strong>:</strong> We provide assistance and legal guidance throughout the entire process.</p>
                                    <p>
                                        <Link to="/Family-Law/Asset-Division"><strong>Asset division</strong></Link><strong>:</strong> Our attorneys know how to fully investigate financial records and income to ensure division is accurate and fair.</p>
                                    <p>
                                        <Link to="/Family-Law/Alimony"><strong>Alimony</strong></Link>
                                        <strong>:</strong> We interpret the law and provide legal guidance to make certain you and your family are provided for in the future.</p>
                                    <p>
                                        <Link to="/Family-Law/Child-Custody"><strong>Child custody</strong></Link><strong>:</strong> At our firm, we look out for the best interest of your child and work to make an arrangement that advocates for the kids.</p>
                                    <p>
                                        <Link to="/Family-Law/Visitation-Parenting-Time"><strong>Visitation (parenting time)</strong></Link><strong>:</strong> Our attorneys review the visitation guidelines and inform clients of their rights to parenting time.</p>
                                    <p>
                                        <Link to="/Family-Law/Child-Support"><strong>Child support</strong></Link><strong>:</strong> We provide assistance in determining accurate and fair child support calculations.</p>
                                    <p>
                                        <Link to="/Family-Law/Paternity"><strong>Paternity</strong></Link><strong>:</strong> Our firm will help throughout the steps of paternity testing to make sure you get the protection and support you are entitled to.</p>
                                    <p>
                                        <Link to="/Family-Law/Adoptions"><strong>Adoptions</strong></Link><strong>:</strong> We help clients navigate through the complex adoption process.</p>
                                    <p>
                                        <Link to="/Family-Law/Modifications"><strong>Modifications</strong></Link><strong>:</strong> If your needs change over time, our attorneys can provide knowledgeable legal advice for post-decree modifications.</p>
                                    <h3>Contact our Utah Family Law Attorneys at The Pace Law Firm, Attorneys and Counselors at Law</h3>

                                    <p>We would be happy to schedule a complimentary initial consultation with you at our office. Please call us toll free at <strong>801-355-9700</strong> or feel free to <strong>contact us below</strong>.
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
                            <Link className="family-subnavs" to="/Family-Law/Paternity">
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
