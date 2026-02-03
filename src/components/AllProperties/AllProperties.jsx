import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllProperties = () => {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");         
  const [priceSort, setPriceSort] = useState("none"); 
  const [order, setOrder] = useState("asc");        
  const [sortBy, setSortBy] = useState("posted_date"); 
  const [loading, setLoading] = useState(false);

  
  const buildQuery = () => {
    let params = `?search=${search}`;
    if (sortBy === "price") {
      if (priceSort === "lowToHigh") params += "&sortBy=price&order=asc";
      else if (priceSort === "highToLow") params += "&sortBy=price&order=desc";
    } else {
      params += `&sortBy=${sortBy}&order=${order}`;
    }
    return params;
  };

 
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://homenest-server-ruby.vercel.app/all-properties${buildQuery()}`
        );
        const data = await response.json();
        setProperties(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchProperties();
  }, [search, sortBy, priceSort, order]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">All Properties</h1>

     
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
       
        <input
          type="text"
          placeholder="Search by property name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full md:w-1/3"
        />


        <div className="flex gap-2 flex-wrap">
     
          <select
            value={priceSort}
            onChange={(e) => setPriceSort(e.target.value)}
            className="select select-bordered"
          >
            <option value="none">Sort by Price</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>

        
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="select select-bordered"
          >
            <option value="posted_date">Posted Date</option>
            <option value="price">Price</option>
            <option value="location">Location</option>
          </select>

          <select
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            className="select select-bordered"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

   
      {loading && <p className="text-center text-gray-500">Loading properties...</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.length === 0 && !loading && (
          <p className="text-center text-gray-500 col-span-full">
            No properties found.
          </p>
        )}

        {properties.map((property) => (
          <div
            key={property._id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition"
          >
            <figure>
              <img
                src={property.image}
                alt={property.property_name}
                className="h-56 w-full object-cover"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">{property.property_name}</h2>
              <p className="text-sm text-gray-500">📍 {property.location}</p>
              <p className="text-sm mt-2">
                {property.short_description.slice(0, 100)}...
              </p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-semibold text-primary">
                  ${property.price.toLocaleString()}
                </span>
                <span className="badge badge-outline">{property.category}</span>
              </div>

              <div className="mt-2">
                <h2>
                  <span className="font-bold">Posted by:</span>{" "}
                  <span className="text-lg">
                    {property.posted_by?.name || "Unknown"}
                  </span>
                </h2>
              </div>

              <div className="card-actions justify-end mt-4">
                <Link to={`/property-details/${property._id}`}>
                  <button className="btn btn-primary btn-sm">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProperties;
