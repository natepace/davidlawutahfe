import React from 'react'
import { Link } from 'react-router-dom'
export const BodyAdoptions = () => {
    document.title = "Salt Lake City Adoption Attorneys | Stepparent Adoption Lawyer | Cottonwood Heights"
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
                            <h1 className="page-title">Salt Lake City Adoption Lawyers</h1>
                            <article class="content" id="content">
                                <div class="content-0">
                                    <h3>Adoption Attorneys Working on Your Behalf</h3><p>Expanding your family through adoption is a very rewarding yet complicated process. Moving through a complex legal procedure can be stressful, and you likely want to work with a lawyer who is kind, understanding and will look out for your family's best interests.</p><p>At The Pace Law Firm, Attorneys and Counselors at Law, we assist families in Salt Lake City, Utah, and the surrounding areas with adoption law matters. We provide highly attentive and knowledgeable services for our clients because we value their family's happiness and well-being.</p><p><Link to='/Our-Attorneys'>Our attorneys</Link> in Cottonwood Heights take the time to listen to your concerns to make sure we have a full understanding of your situation. When we fully understand your circumstances, we can provide the best legal services to meet your needs.</p><h3>Advocating for Children's Best Interest</h3><p>Adoptions laws are complex, and the adoption process involves many steps and procedures. Because this process is complex, working with an experienced attorney at our firm can help achieve the best possible results. We are very knowledgeable of the adoption laws and processes and will help you complete the path — every step of the way.</p><p><strong>We handle a wide range of adoption cases, including:</strong></p><ul><li>Stepparent adoptions</li><li>Extended family adoptions</li><li class="last-child"><Link to='/Family-Law/Paternity'>Paternity</Link> and adoptions</li></ul><p class="callOut">Adoption is a lifetime commitment, and we are here to advocate for the child's best interest and make this process as seamless as possible. We will shoulder the burden of any complications so that you can focus on creating a lasting bond with your child within your family. Our job is to provide legal assistance to ensure that your family's future is protected and secured. &nbsp;We can make this happen for you.</p><h2>Contact Our Salt Lake City Adoption Attorneys</h2><p>The Pace Law Firm, Attorneys and Counselors at Law, can be your team to achieve the best results for you and your family. Please <strong> contact us below!</strong> at <strong>801-355-9700</strong> to schedule a complimentary consultation. We look forward to hearing from you.</p>
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
                            <Link className="family-subnavs-PRIM" to="/Family-Law/Adoptions">
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
