import React from "react";
import { Link } from "react-router-dom";
import Blog1 from "../assets/agents-image-01.jpeg/Blog-1.jpg";
import Blog2 from "../assets/agents-image-01.jpeg/Blog-2.jpg";
import Blog3 from "../assets/agents-image-01.jpeg/Blog-3.jpg";
import Blog4 from "../assets/agents-image-01.jpeg/Blog-4.jpg";
import Blog5 from "../assets/agents-image-01.jpeg/Blog-5.jpg";
import Blog6 from "../assets/agents-image-01.jpeg/Blog-6.jpg";
import Blog7 from "../assets/agents-image-01.jpeg/Blog-7.jpg";
import Blog8 from "../assets/agents-image-01.jpeg/Blog-8.jpg";
import Blog9 from "../assets/agents-image-01.jpeg/Blog-9.jpg";

const Blogs = [
  { id: 1, title: "Top 5 Luxury Homes to Buy in 2025", desc: "Explore the most premium properties with stunning interior designs.", image: Blog1, date: "20 Oct 2025", category: "Luxury Homes", author: "AgentX Team" },
  { id: 2, title: "Why Real Estate is the Best Investment", desc: "Real estate provides long term growth and rental income opportunities.", image: Blog2, date: "11 Oct 2025", category: "Investment Tips", author: "AgentX Experts" },
  { id: 3, title: "How to Choose the Perfect Property", desc: "Location and future value tips to help you make the right choice.", image: Blog3, date: "02 Oct 2025", category: "Buying Guide", author: "AgentX Advisors" },
  { id: 4, title: "Smart Home Features You Must Look For", desc: "Smart security and automation tech for modern living.", image: Blog4, date: "28 Sept 2025", category: "Smart Living", author: "AgentX Tech" },
  { id: 5, title: "First Time Home Buyer Checklist", desc: "Step-by-step guide every beginner must follow.", image: Blog5, date: "22 Sept 2025", category: "Home Tips", author: "AgentX Helpdesk" },
  { id: 6, title: "Commercial Properties That Make You Profit", desc: "High-return commercial spaces for investors.", image: Blog6, date: "15 Sept 2025", category: "Commercial", author: "AgentX Biz" },
  { id: 7, title: "Interior Trends That Will Rule 2026", desc: "Minimalism to futuristic designs for your home makeover.", image: Blog7, date: "09 Sept 2025", category: "Interiors", author: "AgentX Design" },
  { id: 8, title: "Real Estate Market Growth in India", desc: "Predictions and opportunities for buyers.", image: Blog8, date: "03 Sept 2025", category: "Market Insights", author: "AgentX Analysts" },
  { id: 9, title: "Why Renting Can Also Be Smart", desc: "Not ready to buy? Renting still has big benefits!", image: Blog9, date: "30 Aug 2025", category: "Rent Guide", author: "AgentX Team" },
];

const Blog = () => {
  return (
    <>
      {/* Banner */}
      <div className="bg-[#3f3900] text-white py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Our Blog</h1>
        <p className="text-sm md:text-lg font-light mt-2">
          Latest news and insights from the real estate industry
        </p>
      </div>

      {/* Blog List */}
      <div className="px-4 md:px-[10%] py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {Blogs.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img src={post.image} alt={post.title} className="w-full h-52 object-cover" />
              
              <div className="p-5">
                <p className="text-sm text-gray-500 mb-1">{post.date}</p>
                <h2 className="font-semibold text-lg text-black mb-2 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  {post.desc}
                </p>

                {/* Blog Details Page */}
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-block mt-2 text-[#3e3f00] font-medium border-b border-[#3e3f00]"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
