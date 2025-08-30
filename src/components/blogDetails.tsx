import { ArrowLeft, Calendar, ExternalLink, Linkedin, StepBack, TrendingUp } from 'lucide-react';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router';
import { getBlogData, blogDataType } from './blogData';

function blogDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const blogData:blogDataType[] = getBlogData();

  const selectedBlog = blogData.find((blog) => blog.slug === params.slug);

  const popularBlogs = blogData
  .filter((blog) => blog.slug !== params.slug)
  .slice(0, 3);

  const handleBack = () => {
    navigate('/blogs');
  };

  if (!selectedBlog) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Blog Not Found</h1>
          <p className="text-xl text-gray-600 mb-12">The blog you are looking for does not exist.</p>
          <button 
            onClick={handleBack}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 mr-3" />
            Go Back
          </button>
        </div>
      </div>
    );
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [params.slug]);

  return (
    <div className="min-h-screen bg-gray-50 mt-20">

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Hero Image */}
          <picture>
            <source srcSet={selectedBlog.image} media="(min-width: 768px)" />
            <img src={selectedBlog.image} alt={selectedBlog.title} className="w-full h-64 md:h-80 object-cover" />
          </picture>

          <div className="p-4 md:p-6">
            <div className=" text-center p-3 text-black relative">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{selectedBlog.title}</h1>
              <div className="flex items-center justify-center text-gray-700">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{selectedBlog.date}</span>
              </div>
              <div className='cursor-pointer hover:bg-slate-500 bg-slate-400 rounded-full p-3 absolute top-3 right-3' onClick={() => window.open(selectedBlog.href, '_blank')}>
                <Linkedin className="w-4 h-4"/>
              </div>
              <div className='cursor-pointer hover:bg-slate-500 bg-slate-400 rounded-full p-3 absolute top-3 left-3' onClick={() => navigate('/blogs')}>
                <StepBack className="w-4 h-4"/>
              </div>
            </div>

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none">
              {selectedBlog?.html ? (
                <p dangerouslySetInnerHTML={{__html: selectedBlog?.html as string}}></p>
              ): (
                <p className="text-gray-700 leading-relaxed text-lg">
                  {selectedBlog.description}
                </p>
              )}
            </div>

            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Kolkata Business
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Entrepreneurship
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  Business Guide
                </span>
              </div>
            </div>
          </div>
        </article>

        {/* Most Popular Blogs Section */}
        <div className="mt-12">
          <div className="flex items-center mb-6">
            <TrendingUp className="w-6 h-6 text-orange-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">Most Popular Blogs</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {popularBlogs?.map((blog, index) => (
              <div key={blog.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gradient-to-r from-indigo-500 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className="font-semibold text-sm">{blog.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                    {blog.description.substring(0, 95)}...
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{blog.date}</span>
                    <button 
                      onClick={() => navigate(`/blogs/${blog.slug}`)}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default blogDetails