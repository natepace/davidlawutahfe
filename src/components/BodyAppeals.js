import React from 'react'
import { Link } from 'react-router-dom'
export const BodyAppeals = () => {
    return (
        <div className="changing-body">
            <div className="column-main-wrapper">
                <div className="column-main">
                    <h1 className="page-title">Appeals</h1>
                    <article class="content" id="content">
                        <div class="content-0">
                            <p>When a trial court doesn't decide a case correctly in line with established law, or when the current law on an issue is simply unclear, a commitment to justice sometimes dictates that you ask a higher court to set the record straight. Deciding to appeal your case is a critical decision which requires clear thought and unbiased counsel.</p>
                            <p>Trial courts are subject to review by higher courts, both on the state and federal level. Pursuing a successful appeal of a trial court's decision requires a vastly different skill set than that necessary to try a case. The standards for review are different than that which the trial court used, and the standard for review of the evidence is much different as well. An appeal can only be based on the evidence that was actually presented to the trial court, not what you think was presented or what should have been presented. For this reason it's often helpful or even necessary to have a different attorney handle your appeal than your trial. Being able to assess all elements of your trial without bias or predisposition is critical to creating an effective argument to a court with higher authority.</p>
                            <p>The first step in appealing a case is making a clear decision on whether or not to appeal. In order to be satisfied with the end result, you need to understand the process, the hurdles you face, and you need to understand that the goal of handling an appeal is to give you every opportunity to win. You need a crystal clear understanding of the hurdles we face before beginning an appeal.</p>
                            <p>Our first goal in your case will be to completely understand the unique aspects of your situation. We will develop a comprehensive strategy based upon your goals and priorities. We seek the positive outcomes you need and never surrender your dignity or key desires during the process.</p>
                            <p>We are thoroughly skilled and comfortable in all areas of case assessment, negotiation, mediation, arbitration, trial and appellate practice. We never forget that how we perform at the negotiating table or in the courtroom has the single biggest effect on the outcome of your case.</p>
                            <p>Contact our Salt Lake City lawyers today for a free consultation about your case. Call us at 801-355-9700 or complete and
                                <a href="/web/20201001041044/https://www.pacelawutah.com/Contact.shtml">submit our online contact form</a> today.</p>
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
