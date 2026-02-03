import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2"; 

const AddPropertiesForm = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = {
      property_name: form.property_name.value,
      short_description: form.short_description.value,
      category: form.category.value,
      price: Number(form.price.value),
      location: form.location.value,
      image: form.image.value,
      email: user.email,
      name: user.displayName,
    };

    fetch("https://homenest-server-ruby.vercel.app/added-properties", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

  
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Property Added!",
            text: "Your property has been added successfully.",
            timer: 2000,
            showConfirmButton: false,
          });

          form.reset();
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Something went wrong. Please try again.",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Server Error",
          text: "Could not connect to the server. Try again later.",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-gray-50">
      <div className="card w-full max-w-2xl bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-4">Add Property</h2>
          <p className="text-center text-gray-500 mb-6">
            Fill out the form to add your property listing
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="property_name"
              placeholder="Property Name"
              className="input input-bordered w-full"
              required
            />

            <textarea
              name="short_description"
              placeholder="Short Description"
              className="textarea textarea-bordered w-full"
              required
            />

            <select
              name="category"
              className="select select-bordered w-full"
              defaultValue=""
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
              placeholder="Price"
              className="input input-bordered w-full"
              required
            />

            <input
              type="text"
              name="location"
              placeholder="Location (City, Area, or Address)"
              className="input input-bordered w-full"
              required
            />

            <input
              type="text"
              name="image"
              placeholder="Image URL"
              className="input input-bordered w-full"
              required
            />

            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="input input-bordered w-full bg-gray-100"
            />

            <input
              type="text"
              value={user?.displayName || ""}
              readOnly
              className="input input-bordered w-full bg-gray-100"
            />

            <button type="submit" className="btn btn-primary w-full">
              Add Property
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPropertiesForm;