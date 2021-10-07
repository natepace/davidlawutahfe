import React from 'react'
import { Link } from 'react-router-dom'
export const BodyDivorces = () => {
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
                            <h1 className="page-title">Salt Lake City Divorce Lawyers</h1>
                            <article class="content" id="content">
                                <div class="content-0">
                                    <h2>Divorce Attorneys Who Put Clients First</h2><p>A divorce can spark many emotions: anger, sadness, anguish or even relief. Family situations vary from person to person, which is why it is a smart idea to work with a law firm that understands how to listen to your needs assess your situation and work diligently to come to a resolution.</p><p>At <strong>The Pace Law Firm, Attorneys and Counselors at Law,</strong> our legal team provides personalized attention to our clients, so we have the ability to fully understand your unique situation. We are located in Salt Lake City and assist individuals and families in all areas of family law.</p><p class="callOut"><Link to='/Our-Attorneys'>Our attorneys</Link> are very familiar with the judges and commissioners, in Salt Lake and the surrounding areas, so we understand how to manage your case and know what to expect if challenges arise. We have excellent working knowledge of the way judges rule on particular issues and can use that knowledge as leverage in your divorce.</p><h3>Experienced and Knowledgeable Lawyers Advocating for You</h3><p>Whether your divorce proceedings are amicable or contested, we are there for our clients throughout every step of the process. We make certain that your paperwork is drafted proficiently and we will deliver legal documents that provide the protection you need.</p><p>If you have a family-owned or professional business, we will arrange for business valuations and determine a fair and balanced arrangement for the <Link to="/Family-Law/Asset-Division">division of assets</Link> between you and your spouse.</p><p>Listening to your needs and taking action to get the best results in your divorce are our top priorities, and we work very hard to make sure our clients' expectations are met. The attorneys at our firm are focused on protecting your assets and working to achieve the best possible results in your divorce.</p><h3>Contact the Cottonwood Heights Divorce Attorneys at Our Firm</h3><p>Going through your divorce may be challenging, but we are here to provide attentive legal representation and to ensure that you receive a fair and reasonable division of your marital assets. Please <strong> contact us below</strong> or call us toll free <strong>801-355-9700</strong> to schedule a free initial consultation.</p>
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
                            <Link className="family-subnavs-PRIM" to="/Family-Law/Divorces">
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
