
import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer =()=>{  return (
    <div>


<footer className="bg-gray-900 text-gray-300 pt-16">
  <div className="max-w-7xl mx-auto px-6">

    {/* Main Grid */}
    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

      {/* Logo & Brand */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-white text-gray-900 flex items-center justify-center rounded-full font-bold">
            H
          </div>
          <h3 className="text-2xl font-bold text-white">
            Homenest
          </h3>
        </div>
        <p className="text-gray-400">
          Helping you find a place you can truly call home.
          Trusted real-estate solutions with a premium touch.
        </p>
      </div>

      {/* Contact Details */}
      <div>
        <h4 className="text-lg font-semibold text-white mb-4">
          Contact Us
        </h4>
        <ul className="space-y-2 text-gray-400">
          <li>📍 Dhaka, Bangladesh</li>
          <li>📞 +880 1XXXXXXXXX</li>
          <li>✉️ info@homenest.com</li>
        </ul>
      </div>

      {/* Legal */}
      <div>
        <h4 className="text-lg font-semibold text-white mb-4">
          Legal
        </h4>
        <ul className="space-y-2">
          <li>
            <a href="/terms" className="hover:text-white transition">
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>

      {/* Social Media */}
      <div>
        <h4 className="text-lg font-semibold text-white mb-4">
          Follow Us
        </h4>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Facebook size={22} />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Instagram size={22} />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Linkedin size={22} />
          </a>
        </div>
      </div>

    </div>


    <div className="border-t border-gray-800 mt-12 py-6 text-center text-gray-500 text-sm">
      © {new Date().getFullYear()} Homenest. All rights reserved.
    </div>

  </div>
</footer>




    </div>
  )}




export default Footer;
