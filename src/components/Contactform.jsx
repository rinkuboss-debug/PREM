import React, { useState } from "react";
import { toast } from "react-toastify";
import banner from "../assets/agents-image-01.jpeg/section-banner.jpg"; // Replace with your banner image path

const BannerContact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "b53d4a32-4c39-40b2-a30f-76c05069c155"); // Your Web3Forms Access Key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message Sent Successfully!");
        setResult("");
        event.target.reset();
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
      setResult("");
    }
  };

  return (
    <div
      className="relative flex items-center justify-center px-[2%] lg:px-[12%] py-[80px] lg:py-[120px] bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="bg-white w-full max-w-7xl z-50 rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">
        <div className="lg:w-1/2 bg-gray-900 text-white p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">
            Work with the best real estate platform in{" "}
            <span className="text-[#facc15]">Noida</span> to buy or sell
            properties
          </h2>
          <p className="mb-6 text-gray-300">
            Engage with our professional real estate agents to sell, buy or
            rent your home. Get emails directly to your inbox and manage the
            leads.
          </p>
          <button className="bg-[#facc15] text-gray-900 font-semibold py-2 px-6 rounded w-fit hover:bg-yellow-500 transition">
            <a href="#" className="relative z-10">
              Contact us today
            </a>
          </button>
        </div>

        <div className="lg:w-1/2 bg-white p-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
          <form onSubmit={onSubmit} className="space-y-4">
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="text"
              name="Phone"
              placeholder="Your Phone"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              name="Message"
              placeholder="Type your message..."
              rows={4}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#facc15] text-gray-900 font-semibold py-3 rounded hover:bg-yellow-500 transition"
            >
              {result ? result : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BannerContact;
