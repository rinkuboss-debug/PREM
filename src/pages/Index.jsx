import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ContactForm from "../components/Contactform"
import Hero from "../assets/agents-image-01.jpeg/Hero.jpg";
import Service1 from "../assets/agents-image-01.jpeg/service-icon1.svg";
import Service2 from "../assets/agents-image-01.jpeg/service-icon2.svg";
import Service3 from "../assets/agents-image-01.jpeg/service-icon3.svg";
import Service4 from "../assets/agents-image-01.jpeg/service-icon4.svg";

import CollectionImage1 from "../assets/agents-image-01.jpeg/collection-img-1.webp";
import CollectionImage2 from "../assets/agents-image-01.jpeg/collection-img-2.webp";


import Ctg1 from "../assets/agents-image-01.jpeg/Explore-1.jpg";
import Ctg2 from "../assets/agents-image-01.jpeg/Explore-2.jpg";
import Ctg3 from "../assets/agents-image-01.jpeg/Explore-3.jpg";
import Ctg4 from "../assets/agents-image-01.jpeg/Explore-4.jpg";
import Ctg5 from "../assets/agents-image-01.jpeg/Explore-5.jpg";
import Ctg6 from "../assets/agents-image-01.jpeg/Explore-6.jpg";


import PropertiesData from "../Properties.json";

const DropdownOptions = {
  rent: [
    "Studio",
    "Apartments",
    "Houses",
    "Luxury Homes",
    "Office Spaces",
    "Townships",
  ],
  buy: ["Status", "Property", "Active", "Solid"],
  foreclosure: [
    "Categories",
    "Apartments",
    "House",
    "Luxury Homes",
    "Office Spaces",
    "Studio",
  ],
};

function Index() {
  const [activeTab, setActiveTab] = useState("rent");
  const [selectedOption, setSelectedOption] = useState(DropdownOptions.rent[0]);


   


  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedOption(DropdownOptions[tab][0]);
  };

  return (
    <>
      {/* 🌇 Hero Section */}
      <div
        className="relative h-[85vh] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 md:px-12 text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Find Your Dream <span className="text-[#c2bb43]">Home</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">
            Explore top properties in NOIDA with trusted real estate services.
          </p>

          {/* Tabs & Search */}
          <div className="bg-[#2d2c05a1] p-5 rounded-lg max-w-4xl w-full mx-auto">
            <div className="flex justify-center space-x-6 text-white font-semibold text-sm mb-4 border-b border-white/20">
              {["rent", "buy", "foreclosure"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`uppercase pb-2 border-b-2 transition ${
                    activeTab === tab
                      ? "border-white text-white"
                      : "border-transparent text-white/70 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex flex-col md:flex-row bg-white rounded overflow-hidden">
              <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="p-4 text-[#5c727d] border-r outline-none text-lg cursor-pointer"
              >
                {DropdownOptions[activeTab].map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Enter address, city, or zip code"
                className="flex-1 px-5 py-3 text-base text-black outline-none"
              />

              <button className="bg-[#c2bb43] text-white px-6 py-4 flex items-center justify-center gap-2 text-lg font-semibold hover:bg-[#5400c9] transition-all">
                <i className="ri-search-line"></i> Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 🏠 Services Section */}
      <div className="service px-[5%] lg:px-[12%] py-[80px]">
        <div className="text-center mb-10">
          <h4 className="text-4xl md:text-5xl font-bold">Our Services</h4>
          <p className="text-[white] font-medium text-lg md:text-xl mt-2">
            PREM offers you the best real estate assistance
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[Service1, Service2, Service3, Service4].map((service, index) => {
            const titles = [
              "Sell your Home",
              "Home Loans",
              "Home Inspection",
              "Legal Services",
            ];
            const descs = [
              "We sell your home at the best market price.",
              "We offer free consultancy to get a loan.",
              "We make sure you get what you were promised.",
              "Expert legal help for all property matters.",
            ];

            return (
              <div
                key={index}
                className="text-center border border-[#e7e7e7] rounded-lg p-6 hover:shadow-[0_5px_40px_rgba(38,42,76,0.1)] hover:border-transparent transition-all duration-300"
              >
                <div className="w-[60px] h-[60px] mx-auto mb-6 bg-[#e0f0fd] rounded-md flex items-center justify-center">
                  <img src={service} alt="Service Icon" className="w-10 h-10" />
                </div>
                <h2 className="text-xl font-bold text-[#2f2956] mb-2">
                  {titles[index]}
                </h2>
                <p className="text-[#696969] mb-4 text-base">{descs[index]}</p>
                <Link
                  to="#"
                  className="text-[#acacac] hover:text-[#c2bb43] transition text-lg flex justify-center items-center gap-1"
                >
                  Learn More <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            );
          })}
        </div>
      </div>


      {/* 🏡 Top Properties */}
      <div className="top-properties bg-[#fff2001a] px-[5%] lg:px-[12%] py-[80px]">
        <div className="text-center mb-10">
          <h4 className="text-4xl md:text-5xl font-bold">Top Properties</h4>
          <p className="text-[#2f2956] font-medium text-lg md:text-xl mt-2">
            Check the listings you want to showcase as featured
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PropertiesData.top.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row"
            >
              <div className="w-full md:w-1/2 relative">
                <Swiper
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                  loop={true}
                  className="h-full top-propertie-img-slider"
                >
                  {property.images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={img}
                        alt={`${property.title} ${idx + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="w-full md:w-1/2 p-5 flex flex-col justify-between">
                <Link to={`/PropertiesDetails/${property.id}`}>
                  <h3 className="text-2xl font-bold mb-2 text-[#271f56]">
                    {property.title}
                  </h3>
                  <p className="text-[#8b8b8b] text-sm mb-4">{property.pere}</p>
                  <p className="font-bold text-xl text-[#c2bb43]">
                    {property.price}
                  </p>
                  <div className="flex gap-3 items-center mt-3 relative group">
                    <i className="p-2 flex border cursor-pointer hover:border-[#fff200] transition-all rounded ri-share-line"></i>
                    <div className="absolute top-9 left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <i className="p-2 mt-1 flex border cursor-pointer hover:border-[#fff200] transition-all rounded ri-threads-line"></i>
                      <i className="p-2 mt-1 flex border cursor-pointer hover:border-[#fff200] transition-all rounded ri-instagram-line"></i>
                    </div>
                  </div>
                </Link>

                <div className="flex justify-between items-center text-center text-sm text-[#777] border-t pt-2">
                  <div className="flex gap-4">
                    <p>
                      <i class="ri-home-fill mr-1"></i>
                      {property.bedrooms} Bed
                    </p>
                    <p>
                      <i class="ri-drop-line mr-1"></i>
                      {property.bathrooms} Baths
                    </p>
                    <p>
                      <i class="ri-fullscreen-line mr-1"></i>
                      {property.size}
                    </p>
                  </div>

                  <img
                    src={property.avatar}
                    alt="Agent"
                    className="w-10 h-10 object-cover rounded-full border-2"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* collection */}
      <div className="collection px-[2%] lg:px-[12%] py-[80px]">
        <div className="featured-title section-title mb-10">
          <h4 className="text-5xl font-bold pb-1">Featured collection</h4>
          <p className="text-[#2f2956] font-[400] text-xl">
            Display how many properties are by category, city or area{" "}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <div className="group flex items-center gap-4 bg-white rounded-md shadow-[0_5px_30px_0_rgba(38,42,76,.15)] h-[100px] p-3 transition-all duration-300 hover:shadow-[0_8px_40px_0_rgba(38,42,76,.2)]">
            <div className="h-full w-[80px] overflow-hidden rounded-md">
              <img
                src={CollectionImage1}
                alt="Noida"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div>
              <h4 className="text-[#2b2b2b] text-lg font-semibold font-bricolage transition-colors duration-300">
                Noida
              </h4>
              <p className="text-[#696969] text-sm transition-colors duration-300">
                8 Listings
              </p>
            </div>
          </div>

          <div className="group flex items-center gap-4 bg-white rounded-md shadow-[0_5px_30px_0_rgba(38,42,76,.15)] h-[100px] p-3 transition-all duration-300 hover:shadow-[0_8px_40px_0_rgba(38,42,76,.2)]">
            <div className="h-full w-[80px] overflow-hidden rounded-md">
              <img
                src={CollectionImage2}
                alt="Noida"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div>
              <h4 className="text-[#2b2b2b] text-lg font-semibold font-bricolage transition-colors duration-300">
                Hapur
              </h4>
              <p className="text-[#696969] text-sm transition-colors duration-300">
                1 Listings
              </p>
            </div>
          </div>

          <Link
            to="properties"
            className="text-[#c2bb43] font-bold border-2 border-[#c2bb43]  rounded-md transition-all duration-300 hover:bg-[#c2bb43] hover:text-white hover:shadow-md"
          >
            View All Properties
          </Link>
        </div>


        {/* ///// Get In Touch */}
      </div>

      <ContactForm/>


      {/* Explore Type */}

      <div className="categories px-[2%] lg:px-[12%] py-[80px] lg:py-[120px]">
        <div className="categories-title section-title mb-10">
          <h4 className="text-5xl font-bold pb-2"> Explore by Type </h4>

          <p className="text-[#2f2956] font-[400] text-xl max-w-xl text-center">
            Display how many properties are by city, area or category
          </p>
        </div>
        <div className="categorries-wrapper grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-10">
          <div
            className="group categories-item relative bg=norepleat bg-cover bg-center h-[300px]rounded-lg overflow-hidden flex justify-center items-end"
            style={{ backgroundImage: `url(${Ctg1})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-40 transition-all duration-300"></div>

            <div className="categories-content flex flex-col text-center p-8 z-50">
              <h4 className="text-2xl pb-1 font-[400] text-white hover:text-[#c2bb43] transition-colors duration-300">
                Apartments
              </h4>

              <span className="text-xl font-[400] text-white">
                Ready to move-in apartments
              </span>
            </div>
          </div>

          <div
            className="group categories-item relative bg=norepleat bg-cover bg-center h-[300px]rounded-lg overflow-hidden flex justify-center items-end"
            style={{ backgroundImage: `url(${Ctg2})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-40 transition-all duration-300"></div>

            <div className="categories-content flex flex-col text-center p-8 z-50">
              <h4 className="text-2xl pb-1 font-[400] text-white hover:text-[#c2bb43] transition-colors duration-300">
                Houses
              </h4>

              <span className="text-xl font-[400] text-white">
                Freedom and privacy in your home{" "}
              </span>
            </div>
          </div>

          <div
            className="group categories-item relative bg=norepleat bg-cover bg-center h-[300px]rounded-lg overflow-hidden flex justify-center items-end"
            style={{ backgroundImage: `url(${Ctg3})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-40 transition-all duration-300"></div>

            <div className="categories-content flex flex-col text-center p-8 z-50">
              <h4 className="text-2xl pb-1 font-[400] text-white hover:text-[#c2bb43] transition-colors duration-300">
                Townships
              </h4>

              <span className="text-xl font-[400] text-white">
                Community living oppoturnity{" "}
              </span>
            </div>
          </div>

          <div
            className="group categories-item relative bg=norepleat bg-cover bg-center h-[300px]rounded-lg overflow-hidden flex justify-center items-end"
            style={{ backgroundImage: `url(${Ctg4})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-40 transition-all duration-300"></div>

            <div className="categories-content flex flex-col text-center p-8 z-50">
              <h4 className="text-2xl pb-1 font-[400] text-white hover:text-[#c2bb43] transition-colors duration-300">
                Studio
              </h4>

              <span className="text-xl font-[400] text-white">
                Comfortable homes for people on-to-go{" "}
              </span>
            </div>
          </div>

          <div
            className="group categories-item relative bg=norepleat bg-cover bg-center h-[300px]rounded-lg overflow-hidden flex justify-center items-end"
            style={{ backgroundImage: `url(${Ctg5})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-40 transition-all duration-300"></div>

            <div className="categories-content flex flex-col text-center p-8 z-50">
              <h4 className="text-2xl pb-1 font-[400] text-white hover:text-[#c2bb43] transition-colors duration-300">
                Luxury Homes
              </h4>

              <span className="text-xl font-[400] text-white">
                Exceptional amenities and materials{" "}
              </span>
            </div>
          </div>

          <div
            className="group categories-item relative bg=norepleat bg-cover bg-center h-[300px]rounded-lg overflow-hidden flex justify-center items-end"
            style={{ backgroundImage: `url(${Ctg6})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-40 transition-all duration-300"></div>

            <div className="categories-content flex flex-col text-center p-8 z-50">
              <h4 className="text-2xl pb-1 font-[400] text-white hover:text-[#c2bb43] transition-colors duration-300">
                Office Spaces
              </h4>

              <span className="text-xl font-[400] text-white">
                {" "}
                Invest in commercial real{" "}
              </span>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}

export default Index;
