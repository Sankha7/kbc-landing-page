import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";

const blogData = [
  {
    image: "/images/start-business.jpg",
    title: "How to start a business in Kolkata",
    description:
      "Starting a business in Kolkata can be a challenging task, but with the right guidance, it can be a successful venture. In this blog, we will provide you with some tips and tricks to help you get started. We will cover all the legal requirements and registration process.",
    href: "https://www.linkedin.com/posts/the-kolkata-business-club_how-to-start-a-business-in-kolkata-a-step-by-step-activity-7295042400547221504-6Q6k?utm_source=share&utm_medium=member_desktop",
    date: "June 12, 2024",
  },
  {
    image: "/images/grow-business.jpg",
    title: "How to grow your business in Kolkata",
    description:
      "Growing a business in Kolkata requires a strategic approach. In this blog, we will provide you with some tips and tricks to help you grow your business. We will cover all the marketing strategy and tactics.",
    href: "https://www.linkedin.com/company/the-kolkata-business-club/",
    date: "June 15, 2024",
  },
  {
    image: "/images/market-business.jpg",
    title: "How to market your business in Kolkata",
    description:
      "Marketing your business in Kolkata can be a challenging task, but with the right strategy, it can be a successful venture. In this blog, we will provide you with some tips and tricks.",
    href: "https://www.linkedin.com/company/the-kolkata-business-club/",
    date: "June 18, 2024",
  },
  {
    image: "/images/legal-requirements.jpg",
    title: "Legal requirements for businesses in Kolkata",
    description:
      "Understanding the legal requirements for setting up a business in Kolkata is crucial. This blog will guide you through the necessary steps and documentation.",
    href: "https://www.linkedin.com/company/the-kolkata-business-club/",
    date: "June 21, 2024",
  },
  {
    image: "/images/networking-opportunities.jpg",
    title: "Networking opportunities in Kolkata",
    description:
      "Networking is key to business success. Discover the best networking opportunities in Kolkata through this blog.",
    href: "https://www.linkedin.com/company/the-kolkata-business-club/",
    date: "June 24, 2024",
  },
  {
    image: "/images/financing-options.jpg",
    title: "Financing options for Kolkata businesses",
    description:
      "Securing financing is often a major challenge. This blog explores various financing options available for businesses in Kolkata.",
    href: "https://www.linkedin.com/posts/the-kolkata-business-club_financing-options-for-kolkata-businesses-activity-7295730175369977860-g3zE?utm_source=share&utm_medium=member_desktop",
    date: "June 27, 2024",
  },
];

const BlogsSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10">Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogData.map((blog) => (
            <Card
              key={blog.title}
              className="transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-t"
              />
              <CardHeader>
                <h3 className="text-2xl font-semibold">{blog.title}</h3>
                <p className="text-sm text-gray-500">{blog.date}</p>
              </CardHeader>
              <CardContent>{blog.description} ...</CardContent>
              <div className="flex items-center justify-end p-3">
                <Button
                  className="mt-4"
                  onClick={() => window.open(blog.href, "_blank")}
                >
                  Read More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;

