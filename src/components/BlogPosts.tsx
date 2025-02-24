import React from 'react'
import Link from 'next/link'

interface BlogPostProps
{
  title:string,
  imageURL:string,
  content:string,
  blogURL:string
}

function BlogPosts({
  title = "Default Title",
  imageURL = "https://via.placeholder.com/150",
  content = "No content available.",
  blogURL = "/blog"
}: BlogPostProps) {
  console.log("Title:", title);
  console.log("Image URL:", imageURL);
  console.log("Content:", content);

  return (
    <div className="BLOG POST card shadow-xl text-black">
      <figure>
        <img src={imageURL} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}!</h2>
        <p>{content}</p>
        <div className="card-actions justify-end">
          <Link href={blogURL}>
            <button className="btn btn-primary">Read More...</button>
          </Link>
        </div>
      </div>
    </div>
  );
}


export default BlogPosts