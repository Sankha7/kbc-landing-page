import React from "react";
import BlogsSection from "./landing/BlogsSection";

const Blog = () => {

  return (
    <>
      {/* Add margin-top to account for fixed navbar */}
      <main className="mt-10">
        <BlogsSection/>
      </main>
    </>
  );
};

export default Blog;
