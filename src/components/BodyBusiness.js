import React from 'react'
import { Link } from 'react-router-dom'
export const BodyBusiness = () => {
    return (
        <div className="changing-body">
            <div className="column-main-wrapper">
                <div className="column-main">
                    <h1 className="page-title">Business Litigation</h1>
                    <article class="content" id="content">
                        <div class="content-0">
                            <p>No business can earn money when the corporate officers and key staff are worrying about litigation rather than productivity. Even lawsuits which you win may paralyze your company with fear, uncertainty, and doubt.</p><p>We seek to understand your business on a macro and micro level. Then we identify key areas that could give rise to potential legal conflict. With you, we develop a strategic plan to organize your practice and procedures to minimize risk. We monitor the successful implementation of the plan.</p><p>Our goal is to direct our clients lives so they can work and live without worrying about legal troubles. We spend our time in the courtroom with the intent of keeping our clients as far away from it as possible. However, conflicts occasionally arise.</p><p>When conflict comes, we bring it hard, with no apologies. When you need protection, the only effective method is to go hard, get results, and get out — leaving you free to get back to the business of life.</p><p>We are thoroughly skilled and comfortable in all areas of case assessment, negotiation, mediation, arbitration, trial and appellate practice. We never forget that how we perform at the negotiating table or in the courtroom has the single biggest effect on the outcome of your case.</p><p>If you are in need of help, contact us today. We will sit down with you, sort through your situation, and give you an honest and straightforward assessment of how we can solve your business problem.</p><p>Contact our Salt Lake City lawyers today for a free consultation about your case. Call us at 801-355-9700 or complete and <a href="/web/20201001032643/https://www.pacelawutah.com/Contact.shtml">submit our online contact form</a> today.</p>
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
