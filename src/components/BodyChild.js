import React from 'react'
import { Link } from 'react-router-dom'
export const BodyChild = () => {
    document.title = "Salt Lake City Child Custody Attorneys | Visitation Rights | Legal Custody"
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
                            <h1 className="page-title">Salt Lake City Child Custody Lawyers</h1>
                            <article class="content" id="content">
                                <div class="content-0">
                                    <h2>Experienced Utah Visitation Rights and Child Custody Lawyers</h2><p>Children are often the most important people in a divorce, and you likely want your kids to be affected as little as possible. Even if the dissolution of your marriage is stressful or painful, we work to make sure that you and your family are taken care of. We will always advocate for the best interests of your children.</p><p>We are The Pace Law Firm, Attorneys and Counselors at Law. Located in Salt Lake City, Utah, we provide legal representation throughout the area for a wide range of clients with family law matters. Our firm is experienced, aggressive and always works to achieve the best results for our clients.</p><h3>Advocating for Your and Your Family</h3><p><Link to='/about'>Our firm</Link> in Cottonwood Heights is locally rooted, and we are very familiar with local judges, court commissioners and custody evaluators. Some court commissioners may call for expert witnesses or evaluators, and we know when to expect this and can help prepare for that situation.</p><p>The knowledge our attorneys possess allow us to interpret the law and create a strategy that facilitates the best interests of your family. We work to establish custody arrangements which are in the best interests of the children, based on the input of our clients.</p><p>Custody may be granted as joint physical or legal custody if it is in the best interest of your child. One parent may be granted primary physical custody, with the other parent being awarded <Link to='/Family-law/Visitation-Parenting-Time'>Parenting Time</Link>. Highly individualized solutions can be developed to meet the needs of your family.</p><h3>Contact Us — Salt Lake City Child Custody Attorneys</h3><p>We understand how to aggressively negotiate and advocate for a custody plan that ensures your children are provided for. If you would like to schedule a complimentary initial consultation, please call us at <strong>801-355-9700</strong> or <strong> contact us below!</strong></p>
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

                            <Link className="family-subnavs-PRIM" to="/Family-Law/Child-Custody">
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
