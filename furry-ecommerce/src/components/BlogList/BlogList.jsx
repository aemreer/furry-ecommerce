import React from 'react'
import './BlogList.css'
import BlogCard from '../BlogCard/BlogCard'
import blogs from '../../data/Blog'


function BlogList() {
    return (
        <div className='blog-list-section'>
            <div className="container">
                <h2 className='section-title'>Our Blogs</h2>
                <div className="blog-grid">
                    {
                        blogs && blogs.map((blog) => (
                            <BlogCard key={blog.id} blog={blog} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default BlogList
