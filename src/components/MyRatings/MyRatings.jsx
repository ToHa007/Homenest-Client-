import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext"; // 

const MyRatings = () => {
  const { user } = useContext(AuthContext);
  const [ratings, setRatings] = useState([]);

 
  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://homenest-server-ruby.vercel.app/ratings?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setRatings(data))
      .catch((err) => console.error(err));
  }, [user]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">My Ratings</h1>

      {ratings.length === 0 && (
        <p className="text-gray-500 text-center">
          You haven't rated any properties yet.
        </p>
      )}

      {ratings.map((r) => (
        <div key={r._id} className="border p-4 rounded-lg mb-4">
          <h2 className="font-semibold text-lg">{r.propertyName}</h2>
          <p className="text-yellow-400">
            {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
          </p>
          <p className="text-gray-600">{r.review}</p>
          <p className="text-sm text-gray-400">
            Rated on: {new Date(r.createdAt).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MyRatings;
