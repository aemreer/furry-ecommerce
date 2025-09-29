import React from 'react'
import './BlogCard.css'

function BlogCard({ blog }) {

    return (
        <div className="blog-card">
            <img className="blog-img" loading="lazy" src={blog.image} alt="" />
            <p className="blog-date" >{blog.date}</p>
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-text">{blog.text.length > 120 ? blog.text.slice(0, 120) + "..." : blog.text}</p>
        </div>
    )
}

export default BlogCard