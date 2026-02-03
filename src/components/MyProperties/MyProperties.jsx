import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyProperties = () => {
  const { user } = useContext(AuthContext);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://homenest-server-ruby.vercel.app/properties?email=${user.email}`,{
        headers:{
          authorization: `Bearer ${user.accessToken}`
        }
      })
        .then(res => res.json())
        .then(data => {
          setProperties(data);
        });
    }
  }, [user?.email]);

  const handleDeleteProperties = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://homenest-server-ruby.vercel.app/properties/${_id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire(
                "Deleted!",
                "Your property has been deleted.",
                "success"
              );

              const remainingProperties = properties.filter(
                property => property._id !== _id
              );
              setProperties(remainingProperties);
            }
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        My Properties ({properties.length})
      </h1>

      {properties.length === 0 ? (
        <p className="text-center text-gray-500">
          You have not added any properties yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map(property => (
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
                  <h2>
                    <span className="font-bold">Posted by:</span>{" "}
                    <span className="text-lg">
                      {property.posted_by?.name || "You"}
                    </span>
                  </h2>
                </div>

                <div className="flex justify-between items-center mt-6">
              
                  <div className="flex gap-2">
                    <Link to={`/update-property/${property._id}`}>
                      <button className="btn btn-outline btn-sm">
                        Update
                      </button>
                    </Link>

                    <button
                      onClick={() => handleDeleteProperties(property._id)}
                      className="btn btn-error btn-sm"
                    >
                      Delete
                    </button>
                  </div>

                  
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
      )}
    </div>
  );
};

export default MyProperties;
