import React from 'react'
import { Link } from 'react-router-dom'
import { scroller } from 'react-scroll';
export const BodyDavid = () => {
    document.title = "David S. Pace | The Pace Law Firm, Attorneys & Counselors At Law | Salt Lake City"

    const scrollToForm = () => {
        scroller.scrollTo("form-wrapper", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    }




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
                            {/* <h1 className="page-title">Attorneys</h1> */}
                            <h1 class="page-title">
                                <meta itemprop="name" content="David Pace" />
                                <span>David</span> <span>S.</span> <span>Pace</span>
                            </h1>
                            <div className="david-Prof-Pic1" />
                            <span class="attorneyProfilePositionTitle">Managing Partner</span>
                            <article class="content" id="content">
                                <div class="content-0">
                                    <div id="attorneyProfile">
                                        <div className="lawyer-header">

                                            <div className="about-attorney">

                                                <div className="attorney-infos">
                                                    <p><strong>Location:</strong></p>
                                                    <p>Cottonwood Heights, Utah</p>
                                                </div>
                                                <div className="attorney-infos">
                                                    <p><strong>Phone: </strong></p> <p> 801-355-9700</p>
                                                </div>
                                                <div className="attorney-infos">
                                                    <p><strong>Fax: </strong></p><p> 801-355-9705</p>
                                                </div>
                                                <div className="attorney-infos">
                                                    <p><strong>Email: </strong></p>

                                                    <button onClick={scrollToForm}><strong>Email Me</strong></button>
                                                </div>
                                            </div>
                                            <div className="david-Prof-Pic" />



                                        </div>
                                        <div class="attorneyProfileNarrative">
                                            <p><strong><span>David Pace</span></strong>
                                                <span> is the managing partner of The Pace Law Firm, and has been working with the firm since 1998. David manages the family law and personal injury litigation section of the firm. He received his undergraduate degree from Brigham Young University in 1993. He entered the M.A. program in English at Brigham Young University where he taught American Literature and Writing for two years prior to beginning law school, which he also attended at Brigham Young University on a scholarship, graduating <em>cum laude</em> in 1998. His practice emphasis is civil litigation and trial practice, appellate law, personal injury, and family law. David also maintains expertise in complex debt relief issues, judgment enforcement, and bankruptcy litigation. David has extensive experience in state and federal trial practice, as well as writing and legal research. David is committed to helping people find effective solutions to their problems.</span>
                                            </p><p><span>David is a member of the J. Reuben Clark Law Society, the Utah Association for Justice, and the Salt Lake County Bar Association. He has been admitted to practice before the 10th Circuit Court of Appeals, the Utah State Bar, and the Utah Federal Bar. He has won the Vera A. Mayhew and Linda Adams essay contests. He is fluent in Spanish, and conversant in French and German. His non-work hours are spent raising his family, writing, and running.</span>
                                            </p>
                                        </div>
                                        <div class="attorneyProfileSection attorneyProfileAreasOfPractice"> <h3>Areas of Practice</h3>
                                            <ul>
                                                <li>Personal Injury Litigation</li>
                                                <li>Civil Litigation</li>
                                                <li>Bankruptcy</li>
                                                <li>Appellate Law</li>
                                                <li>Family Law</li>
                                                <li class="last-child">Real Estate</li>
                                            </ul>
                                        </div>
                                        <div class="attorneyProfileSection attorneyProfileBarAdmissions"> <h3>Bar Admissions</h3>
                                            <ul>
                                                <li>Utah, 1998</li>
                                                <li>U.S. Court of Appeals 10th Circuit, 2007</li>
                                                <li class="last-child">U.S. District Court District of Utah, 1998</li>
                                            </ul>
                                        </div>
                                        <div class="attorneyProfileSection attorneyProfileEducation"> <h3>Education</h3>
                                            <ul>
                                                <li class="attorneyProfileEducationLegal"  >
                                                    <strong><span>Brigham Young University, J. Reuben Clark Law School</span>, Provo, Utah</strong>
                                                    <ul class="attorneyProfileEducationDegree">
                                                        <li class="last-child">J.D.<em> cum laude</em> – 1998</li>
                                                    </ul>
                                                </li>
                                                <li class="attorneyProfileEducationNonLegal" ><strong><span>Brigham Young University</span>, Salt Lake City, Utah</strong>
                                                    <ul class="attorneyProfileEducationDegree">
                                                        <li class="last-child">M.A. Program 1994-95</li>
                                                    </ul>
                                                    <ul class="attorneyProfileEducationConcentrations"> <li class="last-child">Major: English</li>
                                                    </ul>
                                                </li>
                                                <li class="attorneyProfileEducationNonLegal last-child" >
                                                    <strong><span>Brigham Young University</span>, Salt Lake City, Utah</strong>
                                                    <ul class="attorneyProfileEducationDegree"> <li class="last-child">B.A. – 1993</li>
                                                    </ul>
                                                    <ul class="attorneyProfileEducationConcentrations"> <li class="last-child">Major: English</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="attorneyProfileSection attorneyProfileHonorsAndAwards"> <h3>Honors and Awards</h3>
                                            <ul>
                                                <li class="last-child"><span>Winner, Vera A. Mayhew essay contest</span>
                                                </li>
                                                <li class="last-child"><span>Winner, Linda Adams essay contest</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="attorneyProfileSection attorneyProfileProfessionalAssociationsAndMemberships"> <h3>Professional Associations and Memberships</h3>
                                            <ul>
                                                <li>
                                                    <span>J. Reuben Clark law Society</span>, Member
                                                </li>
                                                <li>
                                                    <span>Utah Association for Justice</span>, Member</li>
                                                <li><span>Salt Lake County Bar Association</span>, Member
                                                </li>
                                                <li>
                                                    <span>Utah State Bar Association</span>, Member
                                                </li>
                                                <li class="last-child"><span>Federal Bar Association</span>, Member
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="attorneyProfileSection attorneyProfilePastEmploymentPositions"> <h3>
                                            Past Employment Positions
                                        </h3>
                                            <ul>
                                                <li class="last-child">Brigham Young University, Instructor, American Literature and Writing</li>
                                            </ul>
                                        </div>
                                        <div class="attorneyProfileSection attorneyProfileLanguages"> <h3>Languages</h3>
                                            <ul>
                                                <li>
                                                    Spanish
                                                </li>
                                                <li>
                                                    French
                                                </li>
                                                <li class="last-child">German</li> </ul> </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div >
                    {/* <div className="column-menu-wrapper">
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
                    </div> */}
                </div>
            </div>
        </div >
    )
}
