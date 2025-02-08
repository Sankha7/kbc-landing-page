import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";

const blogData = [
  {
    image: "/images/start-business.jpg",
    title: "How to start a business in Kolkata",
    description:
      "Starting a business in Kolkata can be a challenging task, but with the right guidance, it can be a successful venture. In this blog, we will provide you with some tips and tricks to help you get started.",
    href: "/blogs/start-business",
    date: "June 12, 2024",
  },
  {
    image: "/images/grow-business.jpg",
    title: "How to grow your business in Kolkata",
    description:
      "Growing a business in Kolkata requires a strategic approach. In this blog, we will provide you with some tips and tricks to help you grow your business.",
    href: "/blogs/grow-business",
    date: "June 15, 2024",
  },
  {
    image: "/images/market-business.jpg",
    title: "How to market your business in Kolkata",
    description:
      "Marketing your business in Kolkata can be a challenging task, but with the right strategy, it can be a successful venture. In this blog, we will provide you with some tips and tricks to help you market your business.",
    href: "/blogs/market-business",
    date: "June 18, 2024",
  },
  {
    image: "/images/legal-requirements.jpg",
    title: "Legal requirements for businesses in Kolkata",
    description:
      "Understanding the legal requirements for setting up a business in Kolkata is crucial. This blog will guide you through the necessary steps and documentation.",
    href: "/blogs/legal-requirements",
    date: "June 21, 2024",
  },
  {
    image: "/images/networking-opportunities.jpg",
    title: "Networking opportunities in Kolkata",
    description:
      "Networking is key to business success. Discover the best networking opportunities in Kolkata through this blog.",
    href: "/blogs/networking-opportunities",
    date: "June 24, 2024",
  },
  {
    image: "/images/financing-options.jpg",
    title: "Financing options for Kolkata businesses",
    description:
      "Securing financing is often a major challenge. This blog explores various financing options available for businesses in Kolkata.",
    href: "/blogs/financing-options",
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
              <CardContent>{blog.description}</CardContent>
              {/* <Button className="mt-4">Read More</Button> */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;

