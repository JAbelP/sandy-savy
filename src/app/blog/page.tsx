import BlogPosts from '@/components/BlogPosts'
import React from 'react'

function page() {
  return (
<div className="h-auto pb-7 px-5 flex items-center justify-center">
  <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mb-20">
    <BlogPosts />
    <BlogPosts />
    <BlogPosts />
    <BlogPosts />
    <BlogPosts />
    <BlogPosts />
  </div>
</div>

  )
}

export default page