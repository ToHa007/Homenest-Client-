import React from "react";
import LatestProperties from "../LatestProperties/LatestProperties";


const latestPropertiesPromise = fetch('http://localhost:3000/latest-properties').then(res => res.json());
const Home = () => {
  return (
    <div>

      {/* Slider */}
      <div className="carousel w-full h-[70vh]">

        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=form…"
            className="w-full object-cover"
          />
          <div className="absolute flex justify-between -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&…"
            className="w-full object-cover"
          />
          <div className="absolute flex justify-between -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=form…"
            className="w-full object-cover"
          />
          <div className="absolute flex justify-between -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>

        <div id="slide4" className="carousel-item relative w-full">


          <img
            src="https://images.unsplash.com/photo-1439130490301-25e322d88054?auto=form…"
            className="w-full object-cover"
          />
          <div className="absolute flex justify-between -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>

      </div>



<div>

<div>
<LatestProperties  latestPropertiesPromise={latestPropertiesPromise}  ></LatestProperties>
</div>







</div>





      {/* Why Choose Us */}
      <section className="bg-base-200 py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-base-content">
              Why Choose Us
            </h2>
            <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
              We deliver premium real-estate solutions with trust,
              transparency, and long-term value.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {[
              {
                title: "Trusted Expertise",
                desc: "Years of market knowledge to guide you toward confident decisions.",
              },
              {
                title: "Premium Properties",
                desc: "Carefully curated residential and commercial properties.",
              },
              {
                title: "Transparent Process",
                desc: "Clear pricing, honest guidance, and no hidden surprises.",
              },
              {
                title: "Customer-First Approach",
                desc: "We listen, understand, and tailor solutions around your needs.",
              },
              {
                title: "Strategic Locations",
                desc: "Properties located for convenience, growth, and future value.",
              },
              {
                title: "End-to-End Support",
                desc: "From property selection to final handover — we handle everything.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-base-100 p-8 rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-base-content mb-3">
                  {item.title}
                </h3>
                <p className="text-base-content/70">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>





{/* ================= Our Achievements Section ================= */}
<section className="bg-base-200 py-20">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold text-base-content">Our Achievements</h2>
      <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
        Over the years, we’ve helped thousands of clients achieve their dream homes.
      </p>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
      {[
        { number: "500+", label: "Properties Sold" },
        { number: "200+", label: "Happy Clients" },
        { number: "10+", label: "Years Experience" },
        { number: "95%", label: "Customer Satisfaction" },
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-base-100 p-8 rounded-2xl shadow hover:shadow-lg transition"
        >
          <h3 className="text-4xl font-bold text-primary mb-2">{item.number}</h3>
          <p className="text-base-content/70">{item.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ================= People’s Ratings Section ================= */}
<section className="bg-base-100 py-20">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold text-base-content">What People Say</h2>
      <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
        Hear from our satisfied clients who trusted us to find their dream homes.
      </p>
    </div>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          name: "Sarah J.",
          img: "https://i.pravatar.cc/150?img=1",
          rating: 5,
          review: "Amazing service! Found my perfect home within days.",
        },
        {
          name: "John D.",
          img: "https://i.pravatar.cc/150?img=2",
          rating: 5,
          review: "Professional, reliable, and transparent — highly recommended!",
        },
        {
          name: "Emily R.",
          img: "https://i.pravatar.cc/150?img=3",
          rating: 4,
          review: "The team made buying my first property stress-free.",
        },
      ].map((user, idx) => (
        <div
          key={idx}
          className="bg-base-200 p-8 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center text-center"
        >
          <img
            src={user.img}
            alt={user.name}
            className="w-16 h-16 rounded-full mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">{user.name}</h3>
          <div className="flex items-center mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${
                  i < user.rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-500"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.455a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.385-2.455a1 1 0 00-1.175 0l-3.385 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.047 9.401c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
              </svg>
            ))}
          </div>
          <p className="text-base-content/70">{user.review}</p>
        </div>
      ))}
    </div>
  </div>
</section>









    </div>
  );
};

export default Home;
