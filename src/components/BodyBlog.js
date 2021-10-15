import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BlogsWrapper } from './BlogsWrapper'

const initialBlogs = {
    // blog_id: 0,
    // blog_title: "",
    // blog_entry: "",
    // date: ""
}

export const BodyBlog = () => {
    const [blogs, setBlogs] = useState(initialBlogs)

    useEffect(() => {
        axios.get('https://law-blog-db.herokuapp.com/blogs')
            .then(res => {
                setBlogs(res.data)
                console.log(res.data)
            })
    }, [])

    if (blogs === initialBlogs) {
        return (<div></div>)
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
                                {/* <meta itemprop="name" content="David Pace" /> */}
                                Legal News You Can Use
                            </h1>
                            {/* <p> 
                                A blog
                            </p> */}
                            {/* <div className="david-Prof-Pic1" /> */}
                            {/* <span class="attorneyProfilePositionTitle">Managing Partner</span> */}
                            <article class="content" id="content">
                                <div class="content-0">


                                    {blogs.map(blog => {
                                        return (
                                            <BlogsWrapper blog={blog} />
                                        )
                                    })}


                                </div>
                            </article>
                        </div>
                    </div >

                </div>
            </div>
        </div >
    )
}
