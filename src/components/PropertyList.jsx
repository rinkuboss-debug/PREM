import React from "react";

const properties = [
  {
    id: 1,
    name: "Golf View City",
    location: "Noida, NCR",
    image: "/src/assets/top-property-4-5.jpg/top-property-1-1.jpg",
    link: "https://www.golfviewcity.in/",
    description:
      "Premium plots and luxurious residential spaces surrounded by lush greenery and golf course views.",
  },
  {
    id: 2,
    name: "Vibrant Vilasaa Farm",
    location: "Near Hapur Expressway",
    image: "/src/assets/top-property-4-5.jpg/property-2-2.jpg",
    link: "https://vibrant-vilasaa-farm.vercel.app/",
    description:
      "A modern retreat offering farm living with luxury, nature, and world-class amenities.",
  },
];

export default function PropertyList() {
  return (
    <section className="px-[6%] py-12 bg-gray-100" id="projects">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#d4a043]">
        Featured Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-5"
          >
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-48 object-contain rounded-md bg-gray-50"
            />

            <h3 className="text-2xl font-semibold mt-4">{property.name}</h3>
            <p className="text-gray-600">{property.location}</p>

            <p className="text-gray-700 text-sm mt-3 leading-6">
              {property.description}
            </p>

            <a
              href={property.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 px-5 py-2 rounded-md text-white bg-[#d4a043] hover:bg-[#b78637] transition"
            >
              View Details
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
