import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getBlogData } from "../blogData";
import { Reveal, RevealGroup, RevealItem } from "../ui/reveal";

const BlogsSection = () => {
  const navigate = useNavigate();
  const blogData = getBlogData();

  return (
    <section className="section-pale py-20 mt-10">
      <div className="container mx-auto px-4">
        <Reveal>
          <h1 className="text-4xl font-bold mb-10">Blogs</h1>
        </Reveal>
        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogData.map((blog) => (
            <RevealItem key={blog.title}>
            <Card
              className="transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
              onClick={() => navigate(`/blogs/${blog.slug}`)}
              >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-t"
              />
              <CardHeader>
                <h3 className="text-2xl font-semibold">{blog.title}</h3>
                <div className="flex items-center space-x-2">
                  <p className="text-sm text-muted-foreground">{blog.date}</p>
                  <ExternalLink className="text-muted-foreground h-5 w-5" onClick={(e) => {
                    e.stopPropagation();
                    window.open(blog.href, "_blank")
                  }} />
                </div>
              </CardHeader>
              <CardContent>{blog.description} ...</CardContent>
              <div className="flex items-center justify-end p-3">
                <Button
                  className="group mt-4 bg-primary hover:bg-primary/90 text-primary-foreground border-0 rounded-xl shadow-md shadow-primary/20 transition-all hover:-translate-y-0.5"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/blogs/${blog.slug}`)
                  }}
                >
                  Read More
                  <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </div>
            </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
};

export default BlogsSection;

