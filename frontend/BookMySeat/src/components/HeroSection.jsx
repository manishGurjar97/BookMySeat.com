import { assets } from "../assets/assets";
const HeroSection = () => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-black
      "
    >
      {/* Background image */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
          scale-100
        "
        style={{
          backgroundImage:  `url(${assets.dhurender})`, // apni image ka path
        }}
      ></div>

      {/* Dark overlay (optional but recommended) */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div
        className="
          relative
          z-10
          min-h-[85vh]
          flex
          items-center
          px-6
          md:px-16
          lg:px-36
          text-white
        "
      >
        
        <div className="max-w-2xl">
          <span className="inline-block mb-3 bg-red-600 px-3 py-1 text-xs rounded">
            BookMySeat
          </span>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Dhurandhar <br /> Part 1
          </h1>

          <p className="mt-4 text-sm text-gray-200">
            Action | Spy Thriller | Drama • 2025 • 3h 34m
          </p>

          <p className="mt-4 text-gray-300 text-sm leading-relaxed">
            In a tense world of espionage and covert operations, an Indian
            intelligence agent goes undercover to dismantle a powerful terror
            network from within.
          </p>

          <button className="mt-6 px-6 py-3 bg-pink-600 rounded-full hover:bg-pink-700 transition">
            Explore Movies →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
