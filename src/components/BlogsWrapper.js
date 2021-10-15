import React from 'react'

export const BlogsWrapper = (props) => {
    const { blog } = props
    const blogEntry = {
        title: blog.blog_title,
        entry: blog.blog_entry,
        date: blog.date,
        id: blog.blog_id

    }


    return (
        <div>
            <h1>{blogEntry.title}</h1>

            <p>{blogEntry.entry}</p>

        </div>
    )
}
