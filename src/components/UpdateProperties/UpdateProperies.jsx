import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const UpdateProperties = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    property_name: "",
    short_description: "",
    category: "",
    price: "",
    location: "",
    image: "",
  });


  useEffect(() => {
    fetch(`https://homenest-server-ruby.vercel.app/properties/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFormData({
          property_name: data.property_name,
          short_description: data.short_description,
          category: data.category,
          price: data.price,
          location: data.location,
          image: data.image,
        });
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

const handleUpdate = (e) => {
  e.preventDefault();

  fetch(`https://homenest-server-ruby.vercel.app/properties/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...formData,
      email: user?.email,
      name: user?.displayName,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Updated!",
          text: "Property updated successfully",
        });
      }
    });
};


  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Update Property
      </h2>

      <form onSubmit={handleUpdate} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            value={user?.displayName || "N/A"}
            readOnly
            className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
            placeholder="User Name"
          />

          <input
            type="email"
            value={user?.email || "N/A"}
            readOnly
            className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
            placeholder="User Email"
          />
        </div>

    
        <input
          type="text"
          name="property_name"
          value={formData.property_name}
          onChange={handleChange}
          placeholder="Property Name"
          className="input input-bordered w-full"
          required
        />

        <textarea
          name="short_description"
          value={formData.short_description}
          onChange={handleChange}
          placeholder="Short Description"
          className="textarea textarea-bordered w-full"
          required
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="select select-bordered w-full"
          required
        >
            <option value="" disabled>
                Select Category
              </option>
              <option value="Rent">Rent</option>
              <option value="Sale">Sale</option>
              <option value="Commercial">Commercial</option>
              <option value="Land">Land</option>
              <option value="Industrial">Industrial</option>
        </select>

        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          className="input input-bordered w-full"
          required
        />

        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          className="input input-bordered w-full"
          required
        />

        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="input input-bordered w-full"
          required
        />

        <button className="btn btn-primary w-full">
          Update Property
        </button>
      </form>
    </div>
  );
};

export default UpdateProperties;
