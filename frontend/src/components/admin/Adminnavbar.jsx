import { Link } from "react-router-dom";


const Adminnavbar = () => {
    return (
        <div
            className="
        flex items-center justify-between
        px-6 md:px-10
        h-16
        border-b border-gray-300/30
        bg-black
      "
        >
            {/* Logo */}
            <Link to="/">
                <img
                    src="/Mylogo.jpg"
                    alt="logo"
                    className="
    h-12 w-12
    md:h-14 md:w-14
    rounded-full
    object-cover
    border border-gray-300/30
  "
                />
            </Link>

            {/* Right Side (optional) */}
            <div className="flex items-center gap-4 text-sm text-gray-300">
                <span className="hidden sm:block">Admin Panel</span>
            </div>
        </div>
    );
};

export default Adminnavbar;
