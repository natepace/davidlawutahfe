import React from 'react'

export const BlogsWrapper = (props) => {
    const { blog } = props
    const blogEntry = {
        title: blog.blog_title,
        entry: blog.blog_entry,
        date: blog.date,
        id: blog.blog_id

    }

    // const container = []
    // if (blogEntry.entry != undefined) {
    //     const splitUp = blogEntry.entry.split("\n")

    //     splitUp.map(s => {
    //         container.push(s.split(/[{}]/).filter(function (e) { return e; }))
    //     })
    // }
    // console.log(container)

    return (
        <div>
            <h1>{blogEntry.title}</h1>

            {/* <change this to a container map for the paragraphs */}
            {/* <p>{blogEntry.entry}</p> */}
            <div
                dangerouslySetInnerHTML={{
                    __html: blogEntry.entry
                }} >
            </div>

        </div>
    )
}
