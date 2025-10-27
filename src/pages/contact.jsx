import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "b53d4a32-4c39-40b2-a30f-76c05069c155");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("");
        toast.success("Form Submitted Successfully");
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
    <div className=" mt-3 bg-yellow-50 py-16 px-6 sm:px-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-yellow-900">
        Contact <span className="underline decoration-yellow-700">Us</span>
      </h1>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-center mb-12 max-w-2xl mx-auto">
        <div className="bg-yellow-100 shadow-lg rounded-lg px-6 py-4 w-full sm:w-auto">
          <span className="block text-lg font-semibold text-yellow-800">Ankit Choudhary</span>
          <span className="block text-xl font-bold mt-1 text-yellow-900">+91 80065 75965</span>
        </div>
        <div className="bg-yellow-100 shadow-lg rounded-lg px-6 py-4 w-full sm:w-auto">
          <span className="block text-lg font-semibold text-yellow-800">Prem Singh</span>
          <span className="block text-xl font-bold mt-1 text-yellow-900">+91 85275 33067</span>
        </div>
      </div>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-yellow-900">
        <div className="flex flex-wrap gap-4">
          <div className="w-full md:w-1/2">
            <label className="block mb-1">Your Name</label>
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              required
              className="w-full border border-yellow-400 rounded py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="block mb-1">Your Email</label>
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              required
              className="w-full border border-yellow-400 rounded py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
        </div>

        <div className="my-6">
          <label className="block mb-1">Phone & Message</label>
          <textarea
            name="Message"
            placeholder="Message"
            required
            className="w-full border border-yellow-400 rounded py-3 px-4 h-48 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
          ></textarea>
        </div>

        <button className="bg-yellow-600 text-white py-3 px-12 rounded hover:bg-yellow-700 transition">
          {result ? result : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
