import BlogPosts from '@/components/BlogPosts';
import React from 'react';

function Page() {
  return (
    <div className="h-auto pb-7 px-5 flex items-center justify-center">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mb-20">
        <BlogPosts 
          title="Places To Visit in NC For The Elderly"  
          imageURL="/images/ElderFamily.jpg"  
          content="This is an example blog post content."
          blogURL="blog/locations-to-visit-in-nc-after-50"
          />
        <BlogPosts 
          title="Five Places to visit near the NC Beach Boardwalk"  
          imageURL="/images/Street.jpg"
          content="Another blog post content."
          blogURL="blog/places-to-visit-in-nc-carolina-beach"
          />
        <BlogPosts 
          title="Third Post"  
          imageURL="/images/ElderFamily.jpg"
          content="Yet another example."
          blogURL="blog/locations-to-visit-in-nc-after-50"
          />
        <BlogPosts 
          title="Fourth Post"  
          imageURL="/images/Street.jpg"
          content="Some interesting text."
          blogURL="blog/places-to-visit-in-nc-carolina-beach"
          />
        <BlogPosts 
          title="Fifth Post"  
          imageURL="/images/ElderFamily.jpg"
          content="More blog content."
          blogURL="blog/locations-to-visit-in-nc-after-50"
          />
        <BlogPosts 
          title="Sixth Post"  
          imageURL="/images/Street.jpg"
          content="Last example blog."
          blogURL="blog/places-to-visit-in-nc-carolina-beach"
        />

      </div>
    </div>
  );
}

export default Page;
