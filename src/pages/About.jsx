import React, { useState } from "react";
import Sectionbanner from "../assets/agents-image-01.jpeg/section-banner.jpg";

import tst1 from "../assets/agents-image-01.jpeg/testimonials-1.webp";
import tst2 from "../assets/agents-image-01.jpeg/testimonials-2.webp";
import tst3 from "../assets/agents-image-01.jpeg/testimonials-3.webp";

import "swiper/css";

// Testimonials Data
const Testimonials = [
  {
    Image: tst1,
    name: "Ram Singh",
    role: "Happy Seller",
    Text: "Outstanding team for real estate work!",
  },
  {
    Image: tst2,
    name: "Milka Kumar",
    role: "Happy Buyer",
    Text: "Smooth experience building my real estate website!",
  },
  {
    Image: tst3,
    name: "Santosh Kumar",
    role: "Happy Seller",
    Text: "Perfect agents for selling my flat!",
  },
];

// FAQ Data
const FaqData = [
  {
    question: "How can I buy a property?",
    answer:
      "Contact our expert agents and they will guide you through the process smoothly.",
  },
  {
    question: "Do you help in selling property?",
    answer:
      "Yes, we provide professional marketing and selling assistance for your property.",
  },
  {
    question: "Are there any hidden charges?",
    answer:
      "No, we believe in transparent and fair pricing with zero hidden costs.",
  },
];

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Banner */}
      <div
        className="relative bg-cover bg-center h-[300px] md:h-[450px] lg:h-[550px] px-4 md:px-[8%] py-[80px] flex justify-center items-center text-white text-center"
        style={{ backgroundImage: `url(${Sectionbanner})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            About Us
          </h1>
          <p className="text-sm md:text-lg font-light mt-2">
            Get to know our journey
          </p>
        </div>
      </div>

      {/* More About Section */}
      <div className="px-4 md:px-[8%] py-[60px] md:py-[120px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-3xl md:text-4xl font-semibold text-black mb-4">
            More About Us
          </h4>
          <p className="text-gray-600 text-base md:text-lg">
            With experienced real estate professionals, we ensure transparency,
            comfort and great deals for every customer.
          </p>
        </div>

        {/* About Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {[
            {
              title: "Our Mission",
              text: "Delivering trust and excellence in every real estate service we provide.",
            },
            {
              title: "Our Values",
              text: "Integrity and transparency guide us, ensuring excellent results.",
            },
            {
              title: "Our Resources",
              text: "Expert knowledge and smart tools help you unlock the right deals.",
            },
            {
              title: "Meet Our Team",
              text: "A team of professionals ready to guide you through every step.",
            },
          ].map((item, idx) => (
            <div key={idx}>
              <h4 className="text-xl font-semibold text-black pb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="px-4 md:px-[8%] py-[60px] md:py-[120px] bg-gray-50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-3xl md:text-4xl font-semibold text-black mb-4">
            Our Happy Clients
          </h4>
          <p className="text-gray-600 text-base md:text-lg">
            People trust us with the biggest investments of their lives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {Testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition"
            >
              <img
                src={t.Image}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-lg">{t.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{t.role}</p>
              <p className="text-gray-700 text-sm">{t.Text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section px-[5%] lg:px-[12%] py-[80px]">
        <div className="section-title text-center mb-10">
          <h4 className="text-4xl font-[500] text-black pb-5">
            Frequently Asked Questions
          </h4>
          <p className="text-[#7a7a7a] text-lg font-[400] w-full lg:w-[60%] mx-auto">
            Everything you need to know about real estate buying and selling
          </p>
        </div>

        <div className="faq-wrapper mx-auto max-w-3xl">
          {FaqData.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-300 py-4 cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-black">
                  {item.question}
                </h3>

                <span className="text-2xl text-gray-600">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>

              {openIndex === index && (
                <p className="mt-3 text-[#696969] text-sm leading-relaxed">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
