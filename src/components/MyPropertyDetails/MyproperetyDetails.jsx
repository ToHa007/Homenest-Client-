import React from "react";
import { useLoaderData } from "react-router-dom";

const MyPropertyDetails = () => {
  const property = useLoaderData();


  const {
    property_name,
    category,
    short_description,
    location,
    price,
    image,
    email,
    name,
  } = property || {};

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-8">
        {property_name}
      </h1>

      {/* Image */}
      <div className="rounded-xl overflow-hidden shadow-lg mb-8">
        <img
          src={image}
          alt={property_name}
          className="w-full h-[420px] object-cover"
        />
      </div>

      {/* Basic Info */}
      <div className="mb-6">
        <span className="badge badge-primary badge-outline mb-3">
          {category}
        </span>

        <p className="text-gray-500 mt-2">
          📍 {location}
        </p>
      </div>

      {/* Price */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-5 border rounded-lg shadow-sm">
          <p className="text-gray-500 text-sm">Price</p>
          <p className="text-2xl font-semibold text-primary">
            ৳ {Number(price).toLocaleString()}
          </p>
        </div>

        <div className="p-5 border rounded-lg shadow-sm">
          <p className="text-gray-500 text-sm">Category</p>
          <p className="text-lg font-medium">{category}</p>
        </div>
      </div>

      {/* Description */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-3">Description</h3>
        <p className="text-gray-700 leading-relaxed">
          {short_description}
        </p>
      </div>

      {/* Posted By */}
      <div className="border-t pt-6">
        <h3 className="text-xl font-semibold mb-2">Posted By</h3>
        <div className="bg-base-200 p-4 rounded-lg">
          <p className="font-medium">
            {name || "Unknown User"}
          </p>
          <p className="text-sm text-gray-500">
            {email || "Email not provided"}
          </p>
        </div>
      </div>

    </div>
  );
};

export default MyPropertyDetails;
