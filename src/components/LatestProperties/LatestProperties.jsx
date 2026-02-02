import React, { use } from "react";
import { Link } from "react-router-dom";

const LatestProperties = ({ latestPropertiesPromise }) => {
  const properties = use(latestPropertiesPromise);

  
  const latestSix = properties.slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Latest Properties
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestSix.map((property) => (
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
              <h2 className="card-title">
                {property.property_name}
              </h2>

              <p className="text-sm text-gray-500">
                📍 {property.location}
              </p>

              <p className="text-sm mt-2">
                {property.short_description.slice(0, 100)}...
              </p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-semibold text-primary">
                  ${property.price.toLocaleString()}
                </span>

                <span className="badge badge-outline">
                  {property.category}
                </span>
              </div>

              <div className="mt-2">
                <h2 className="text-gray-500">
                  <span className="font-bold">Posted by:</span>{" "}
                  <span className="text-lg">
                    {property.posted_by.name}
                  </span>
                </h2>
              </div>


        <div className="card-actions justify-end mt-4">
  <Link to={`/my-property-details/${property._id}`}>
    <button className="btn btn-primary btn-sm">
      View Details
    </button>
  </Link>
</div>



            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProperties;
