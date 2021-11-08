import React from 'react'
import { Link } from 'react-router-dom'
export const BodyVisitation = () => {
    document.title = "Salt Lake City Visitation Rights Attorneys | Parenting Time Salt Lake Utah"
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
                            <h1 className="page-title">Salt Lake City Visitation Rights Lawyers</h1>
                            <article class="content" id="content">
                                <div class="content-0">
                                    <h3>Upholding Your Rights and Advocating for You</h3><p>Are you looking for an advocate who will fight for you and your children? Do you want to work with a lawyer who takes time to listen to your concerns and address your needs? Come to The Pace Law Firm, Attorneys and Counselors at Law, a firm where you are treated with personalized and attentive legal services.</p><p>We are located in Salt Lake City, Utah, and provide legal assistance throughout the area for individuals and families with family law matters. Our team of <Link to="/Our-Attorneys">experienced attorneys</Link> works in a collaborative environment and always keeps our clients' needs in the forefront.</p><h3>Parenting Time and Visitation Rights in Utah</h3><p>Whether both parents have joint <Link to="/Family-Law/Child-Custody">custody</Link>, or if custody is divided by physical and legal custody, Utah laws and statutes provide minimum visitation times as guidelines for parent time. The visitation guidelines typically designate that every other weekend, certain holidays, a midweek visit and extended summer stays are given to the parent who does not have primary physical custody of the children. Newly passed state guidelines allow for default expanded parent time. Separate guidelines apply to children from birth to age five.</p><p class="callOut">It is a smart idea to work with an experienced and knowledgeable lawyer who understands how to interpret the law and will make certain your rights are upheld. At <strong>The Pace Law Firm, Attorneys and Counselors at Law,</strong> in Cottonwood Heights, we spend a significant amount of time with our clients to make certain we have a full understanding of their situations. If we fully understand your circumstances, we are better equipped to achieve the best results in your case.</p><h3>Contact The Pace Law Firm, Attorneys and Counselors at Law, Today</h3><p>The Salt Lake City visitation rights attorneys at our firm value the outcome of your case and will work very hard to achieve the best possible results. Please contact us toll free at <strong>801-355-9700</strong> or feel free to <strong>contact us below</strong>.</p>
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
                            <Link className="family-subnavs-PRIM" to="/Family-Law/Visitation-Parenting-Time">

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
