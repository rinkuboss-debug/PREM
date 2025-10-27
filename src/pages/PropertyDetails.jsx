import { useParams } from "react-router-dom";
import PropertiesData from "../Properties.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Sectionbanner from "../assets/agents-image-01.jpeg/section-banner.jpg";
import AgentImg from "../assets/agents-image-01.jpeg/agents-image-03.jpg";

function PropertyDetails() {
  const { id } = useParams();
  const Property = PropertiesData.top.find((p) => String(p.id) === String(id));

  if (!Property) {
    return (
      <div className="text-center py-20 text-xl text-red-600 font-semibold">
        Property not found
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[300px] sm:h-[450px] lg:h-[600px] px-4 sm:px-[5%] lg:px-[12%] py-20 flex flex-col justify-center items-center text-center text-white"
        style={{ backgroundImage: `url(${Sectionbanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/60"></div>
        <div className="relative z-10 animate-fade-in-up">
          <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold">
            Properties Details
          </h1>
          <h2 className="text-sm sm:text-base lg:text-xl font-light mb-6 drop-shadow">
            Get to know more
          </h2>
        </div>
      </div>

      <div className="px-4 sm:px-[5%] py-10 sm:py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side */}
        <div className="col-span-2">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            loop={true}
            className="rounded-lg overflow-hidden properties-details-swiper"
          >
            {Property.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Property ${index + 1}`}
                  className="w-full h-[200px] sm:h-[300px] md:h-[380px] lg:h-[420px] object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Property Address */}
          <div className="bg-white shadow rounded-lg p-6 mt-6">
            <h5 className="text-xl sm:text-2xl font-semibold text-indigo-900 mb-4 flex items-center gap-2">
              <i className="ri-map-pin-line text-yellow-400"></i> Property
              Details
            </h5>
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm sm:text-base text-gray-800">
              <div><span className="font-bold text-gray-700">Address:</span> Lake Home Pond</div>
              <div><span className="font-bold text-gray-700">City:</span> <span className="text-indigo-900">Noida</span></div>
              <div><span className="font-bold text-gray-700">Area:</span> <span className="text-indigo-900">Hapur</span></div>
              <div><span className="font-bold text-gray-700">State:</span> <span className="text-indigo-900">Uttar Pradesh</span></div>
              <div><span className="font-bold text-gray-700">Country:</span> India</div>
            </div> */}
            <a
              href="https://www.golfviewcity.in/"
              className="inline-block mt-5 bg-yellow-500 text-white text-sm font-semibold px-5 py-2 rounded hover:bg-yellow-600 transition duration-300"
            >
              View Details of Golf view city
          
            </a>
            <br />
            <a
              href="https://vibrant-vilasaa-farm.vercel.app/"
              className="inline-block mt-5 bg-yellow-500 text-white text-sm font-semibold px-5 py-2 rounded hover:bg-yellow-600 transition duration-300"
            >
              View Details of Vibrant Vilasaa Farm
          
            </a>
          </div>

          {/* Floor Plans */}
          <div className="bg-white shadow-lg rounded-lg p-8 mt-10 hover:shadow-indigo-200 transition-all">
            {/* <h5 className="text-xl sm:text-2xl font-semibold text-indigo-900 mb-4 flex items-center gap-2">
              <i className="ri-stack-fill text-yellow-400"></i> Floor Plan
            </h5> */}

            {/* Floor Plan A */}
            {/* <div className="bg-white shadow mt-6 hover:shadow-indigo-200 transition-all">
              <div className="flex justify-between items-center px-4 py-2 bg-gray-100 flex-wrap gap-2">
                <h3 className="font-semibold text-gray-800">Floor Plan A</h3>
                <div className="text-sm text-gray-600 space-x-3">
                  <span><strong>Price:</strong> 2,000</span>
                  <span><strong>Baths:</strong> 3</span>
                  <span><strong>Rooms:</strong> 4</span>
                  <span><strong>Size:</strong> 300 sq.ft</span>
                </div>
              </div>
              <div
                onClick={() => SetShowImageA(!ShowImageA)}
                className="cursor-pointer text-indigo-600 font-medium px-4 py-2"
              >
                {ShowImageA ? "Hide Floor Plan A" : "Show Floor Plan A"}
              </div>
              {ShowImageA && (
                <img src={FloorplanA} alt="Floor Plan A" className="w-full object-cover mt-4 rounded-lg" />
              )}
            </div> */}

            {/* Floor Plan B */}
            {/* <div className="bg-white shadow mt-6 hover:shadow-indigo-200 transition-all">
              <div className="flex justify-between items-center px-4 py-2 bg-gray-100 flex-wrap gap-2">
                <h3 className="font-semibold text-gray-800">Floor Plan B</h3>
                <div className="text-sm text-gray-600 space-x-3">
                  <span><strong>Price:</strong> 2,500</span>
                  <span><strong>Baths:</strong> 3</span>
                  <span><strong>Rooms:</strong> 3</span>
                  <span><strong>Size:</strong> 350 sq.ft</span>
                </div>
              </div>
              <div
                onClick={() => SetShowImageB(!ShowImageB)}
                className="cursor-pointer text-indigo-600 font-medium px-4 py-2"
              >
                {ShowImageB ? "Hide Floor Plan B" : "Show Floor Plan B"}
              </div>
              {ShowImageB && (
                <img src={FloorplanB} alt="Floor Plan B" className="w-full object-cover mt-4 rounded-lg" />
              )}
            </div> */}
          </div>
        </div>

        {/* Right Side */}
        <div className="sticky top-5 self-start space-y-10">
          {/* Summary Card */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="mb-4 flex gap-2 flex-wrap">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                Rent
              </span>
              <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm font-medium">
                Townships
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
              <i className="ri-building-fill text-blue-600 me-1"></i>
              {Property.title}
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 my-3">
              {Property.price}
            </h3>
          </div>

          {/* Agent Card */}
          <div className="bg-white rounded-2xl shadow-lg p-4">
            <img
              src={AgentImg}
              alt="Agent"
              className="rounded-t-xl w-full h-48 object-cover"
            />
            <div className="text-center py-4">
              <h5 className="font-bold">Prem Singh</h5>
              <p className="text-gray-500 text-sm">Real Estate Broker</p>
              <p className="mt-2 text-sm">📞 8527533067</p>
            </div>
          </div>

          {/* Contact Form */}
          {/* <div>
            <h4 className="text-xl font-bold text-indigo-800 mb-4">
              Request Information
            </h4>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border px-4 py-2 rounded"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border px-4 py-2 rounded"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border px-4 py-2 rounded"
              />
              <textarea
                rows="4"
                placeholder="Message: I'm interested in [3.5 BHK Apartment]"
                className="w-full border px-4 py-2 rounded"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-2xl"
              >
                Submit
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default PropertyDetails;
