import BlogPosts from '@/components/BlogPosts';
import React from 'react';

function Page() {
  return (
    <div className="h-auto pb-7 px-5 flex items-center justify-center">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mb-20">
        <BlogPosts 
          title="Example Title"  
          imageURL="/images/ElderFamily.jpg"  // Correct way to reference an image in public/
          content="This is an example blog post content."
          blogURL="blog/locations-to-visit-in-nc-after-50"
          />
        <BlogPosts 
          title="Second Post"  
          imageURL="/images/Street.jpg"
          content="Another blog post content."
          blogURL="blog/places-to-visit-in-nc-carolina-beach"
        />
        <BlogPosts 
          title="Third Post"  
          imageURL="https://via.placeholder.com/602"
          content="Yet another example."
        />
        <BlogPosts 
          title="Fourth Post"  
          imageURL="https://via.placeholder.com/603"
          content="Some interesting text."
        />
        <BlogPosts 
          title="Fifth Post"  
          imageURL="https://via.placeholder.com/604"
          content="More blog content."
        />
        <BlogPosts 
          title="Sixth Post"  
          imageURL="https://via.placeholder.com/605"
          content="Last example blog."
        />

      </div>
    </div>
  );
}

export default Page;
