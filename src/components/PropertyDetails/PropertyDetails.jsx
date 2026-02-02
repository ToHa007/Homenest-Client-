import React, { useState, useEffect, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext"; 
const PropertyDetails = () => {
  const property = useLoaderData();
  const { user } = useContext(AuthContext);

  const {
    property_name,
    category,
    short_description,
    location,
    price,
    image,
    posted_date,
    posted_by,
  } = property;

  
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [ratingsList, setRatingsList] = useState([]); // 
  useEffect(() => {
    fetch(`http://localhost:3000/ratings/property/${property._id}`)
      .then((res) => res.json())
      .then((data) => setRatingsList(data));
  }, [property._id]);

  const handleSubmitRating = async () => {
    if (!rating || !review) return alert("Please give rating & review");

    const res = await fetch("http://localhost:3000/ratings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        propertyId: property._id,
        propertyName: property.property_name,
        userEmail: user.email,
        userName: user.displayName,
        rating,
        review,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Rating submitted!");
      setRating(0);
      setReview("");
     
      setRatingsList([
        ...ratingsList,
        {
          propertyId: property._id,
          propertyName: property.property_name,
          userEmail: user.email,
          userName: user.displayName,
          rating,
          review,
          createdAt: new Date(),
          _id: data.insertedId || Math.random().toString(),
        },
      ]);
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-8 text-center">
        <h2 className="text-3xl font-bold mt-2">
          {property_name}
        </h2>
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
        <span className="badge badge-primary badge-outline mb-2">
          {category}
        </span>

        <h2 className="text-3xl font-bold mt-2">
          {property_name}
        </h2>

        <p className="text-gray-500 mt-1">
          📍 {location}
        </p>
      </div>

      {/* Price & Meta */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-5 border rounded-lg shadow-sm">
          <p className="text-gray-500 text-sm">Price</p>
          <p className="text-2xl font-semibold text-primary">
            ${price.toLocaleString()}
          </p>
        </div>

        <div className="p-5 border rounded-lg shadow-sm">
          <p className="text-gray-500 text-sm">Category</p>
          <p className="text-lg font-medium">{category}</p>
        </div>

        <div className="p-5 border rounded-lg shadow-sm">
          <p className="text-gray-500 text-sm">Posted Date</p>
          <p className="text-lg font-medium">{posted_date}</p>
        </div>
      </div>

      {/* Description */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-3">
          Description
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {short_description}
        </p>
      </div>

      {/* Posted By */}
      <div className="border-t pt-6">
        <h3 className="text-xl font-semibold mb-2">
          Posted By
        </h3>

        <div className="bg-base-200 p-4 rounded-lg">
          <p className="font-medium">
            {posted_by?.name || "Unknown"}
          </p>
        </div>
      </div>

      <div className="border-t pt-6 mt-6">
        <h3 className="text-xl font-semibold mb-2">Rate this property</h3>

        {/* Stars */}
        <div className="flex gap-1 my-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className={`text-2xl ${
                star <= rating ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              ★
            </button>
          ))}
        </div>

        {/* Review Text */}
        <textarea
          className="border p-2 w-full rounded mb-3"
          placeholder="Write your review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />

        {/* Submit Button */}
        <button
          className="btn btn-primary"
          onClick={handleSubmitRating}
        >
          Submit Rating
        </button>

        {/* Display Existing Ratings */}
        <div className="mt-6">
          <h4 className="font-semibold mb-2">Reviews:</h4>
          {ratingsList.map((r) => (
            <div key={r._id} className="border p-3 rounded mb-2">
              <p className="text-yellow-400">
                {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
              </p>
              <p className="font-medium">{r.userName}</p>
              <p className="text-gray-600">{r.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
