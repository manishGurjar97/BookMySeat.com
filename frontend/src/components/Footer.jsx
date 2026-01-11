import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap-grid.min.css";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-12">

      {/* 🔹 Bootstrap container */}
      <div className="container">

        {/* 🔹 Bootstrap row */}
        <div className="row border-bottom border-secondary pb-5">

          {/* Brand Info */}
          <div className="col-12 col-md-4 mb-4">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/Mylogo.jpg"
                alt="BookMySeat Logo"
                className="
                  h-14 w-14
                  rounded-full
                  object-cover
                  border-2 border-pink-500
                  shadow-md
                "
              />
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              BookMySeat is your one-stop destination for discovering movies,
              watching trailers, and booking tickets instantly.
            </p>

            <div className="flex gap-3 mt-4">
              <img
                src={assets.googlePlay}
                className="h-10 cursor-pointer hover:opacity-90"
              />
              <img
                src={assets.appStore}
                className="h-10 cursor-pointer hover:opacity-90"
              />
            </div>
          </div>

          {/* Links */}
          <div className="col-12 col-md-8">
            <div className="row">

              {/* Company */}
              <div className="col-6 col-md-4 mb-4">
                <h6 className="text-white font-semibold mb-3">QuickShow</h6>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="hover:text-white cursor-pointer">Home</li>
                  <li className="hover:text-white cursor-pointer">Movies</li>
                  <li className="hover:text-white cursor-pointer">Theaters</li>
                  <li className="hover:text-white cursor-pointer">New Releases</li>
                </ul>
              </div>

              {/* Support */}
              <div className="col-6 col-md-4 mb-4">
                <h6 className="text-white font-semibold mb-3">Support</h6>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="hover:text-white cursor-pointer">Help Center</li>
                  <li className="hover:text-white cursor-pointer">Terms</li>
                  <li className="hover:text-white cursor-pointer">Privacy</li>
                  <li className="hover:text-white cursor-pointer">Refund</li>
                </ul>
              </div>

              {/* Contact */}
              <div className="col-12 col-md-4 mb-4">
                <h6 className="text-white font-semibold mb-3">Contact</h6>
                <p className="text-sm text-gray-400">📞 +91 98765 4--</p>
                <p className="text-sm text-gray-400">📧 support@quickshow.in</p>
                <p className="text-sm text-gray-400">📍 Indore, India</p>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <p className="text-center text-xs text-gray-500 py-4">
          © {new Date().getFullYear()} BookMySeat. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
