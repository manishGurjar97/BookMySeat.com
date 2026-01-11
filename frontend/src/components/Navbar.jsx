import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from "@clerk/clerk-react";

const Navbar = () => {
  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (

    <header className="w-full bg-black text-white px-6 py-4 relative sticky top-0 z-50 bg-black/60 backdrop-blur-md">
      <div className="flex items-center justify-between">

        {/* Logo */}
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex bg-zinc-900 rounded-full px-6 py-2 gap-6">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/movies" className="nav-link">Movies</Link>
          <Link to="/theaters" className="nav-link">Theaters</Link>
          <Link to="/releases" className="nav-link">Releases</Link>
          {/* <Link to="/favorites" className="nav-link">Favorites</Link> */}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-zinc-800 transition">
            <Search size={20} />
          </button>

          {/* If user NOT signed in */}
          <SignedOut>
            <SignInButton mode="modal">
              <button className="hidden md:block bg-pink-500 hover:bg-pink-600 transition text-white px-5 py-2 rounded-full text-sm font-medium">
                Login
              </button>
            </SignInButton>
          </SignedOut>

          {/* If user signed in */}
          <SignedIn>
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate("/Mybooking")}
                className="text-sm text-gray-300 hover:text-white"
              >
                My Bookings
              </button>

              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-900 border-t border-zinc-800">
          <div className="flex flex-col p-4 gap-4">
            <Link onClick={() => { scroleTo(0, 0); setIsOpen(false) }} to="/">Home</Link>
            <Link onClick={() => { scroleTo(0, 0); setIsOpen(false) }} to="/movies">Movies</Link>
            <Link onClick={() => { scroleTo(0, 0); setIsOpen(false) }} to="/theaters">Theaters</Link>
            <Link onClick={() => { scroleTo(0, 0); setIsOpen(false) }} to="/releases">Releases</Link>
            <Link onClick={() => { scroleTo(0, 0); setIsOpen(false) }} to="/favorites">Favorites</Link>

            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-pink-500 py-2 rounded-full">
                  Login
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
