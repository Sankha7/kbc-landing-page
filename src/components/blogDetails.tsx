import { ArrowLeft, Calendar, Linkedin, StepBack, TrendingUp } from 'lucide-react';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getBlogBySlug, getBlogData } from './blogData';

function BlogDetails() {
  const params = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const allBlogs = getBlogData();

  const selectedBlog = getBlogBySlug(params.slug);

  const popularBlogs = allBlogs
    .filter((blog) => blog.slug !== params.slug)
    .slice(0, 3);

  const handleBack = () => {
    navigate('/blogs');
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [params.slug]);

  if (!selectedBlog) {
    return (
      <div className="min-h-screen bg-background/60 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-8">Blog Not Found</h1>
          <p className="text-xl text-muted-foreground mb-12">The blog you are looking for does not exist.</p>
          <button
            onClick={handleBack}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl hover:opacity-90 transition-all"
          >
            <ArrowLeft className="w-6 h-6 mr-3" />
            Go Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  const canonicalUrl = `https://kolkatabusinessclub.com/blogs/${selectedBlog.slug}`;
  const fullImageUrl = selectedBlog.image.startsWith('http')
    ? selectedBlog.image
    : `https://kolkatabusinessclub.com${selectedBlog.image}`;

  return (
    <div className="min-h-screen bg-background/60 mt-24">
      <Helmet prioritizeSeoTags>
        <title>{`${selectedBlog.title} | Kolkata Business Club`}</title>
        <meta name="description" content={selectedBlog.description.slice(0, 160)} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${selectedBlog.title} | Kolkata Business Club`} />
        <meta property="og:description" content={selectedBlog.description.slice(0, 160)} />
        <meta property="og:image" content={fullImageUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${selectedBlog.title} | Kolkata Business Club`} />
        <meta name="twitter:description" content={selectedBlog.description.slice(0, 160)} />
        <meta name="twitter:image" content={fullImageUrl} />
      </Helmet>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <article className="premium-card overflow-hidden">
          {/* Hero Image */}
          <div className="w-full h-64 md:h-80 overflow-hidden">
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          <div className="p-4 md:p-6">
            <div className="text-center p-3 text-foreground relative">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{selectedBlog.title}</h1>
              <div className="flex items-center justify-center text-muted-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{selectedBlog.date}</span>
              </div>
              <div
                className="icon-badge w-11 h-11 cursor-pointer absolute top-3 right-3"
                title="View on LinkedIn"
                onClick={() => window.open(selectedBlog.href, '_blank', 'noopener,noreferrer')}
              >
                <Linkedin className="w-4 h-4" />
              </div>
              <div
                className="icon-badge w-11 h-11 cursor-pointer absolute top-3 left-3"
                title="Back to Blogs"
                onClick={() => navigate('/blogs')}
              >
                <StepBack className="w-4 h-4" />
              </div>
            </div>

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none mt-6">
              {selectedBlog.html ? (
                <div
                  className="space-y-4"
                  dangerouslySetInnerHTML={{ __html: selectedBlog.html as string }}
                />
              ) : (
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {selectedBlog.description}
                </p>
              )}
            </div>

            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex flex-wrap gap-2">
                <span className="tag-pill">Kolkata Business</span>
                <span className="tag-pill">Entrepreneurship</span>
                <span className="tag-pill">Business Guide</span>
              </div>
            </div>
          </div>
        </article>

        {/* Most Popular Blogs Section */}
        <div className="mt-12">
          <div className="flex items-center mb-6">
            <TrendingUp className="w-6 h-6 text-accent mr-3" />
            <h2 className="text-2xl font-bold text-foreground">Most Popular Blogs</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {popularBlogs.map((blog) => (
              <div key={blog.slug} className="premium-card overflow-hidden">
                <div className="h-40 bg-secondary/60 flex items-center justify-center">
                  <div className="text-foreground text-center p-4">
                    <h3 className="font-semibold text-sm">{blog.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-3">
                    {blog.description.substring(0, 95)}...
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{blog.date}</span>
                    <button 
                      onClick={() => navigate(`/blogs/${blog.slug}`)}
                      className="text-primary hover:text-accent text-sm font-medium"
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

export default BlogDetails;