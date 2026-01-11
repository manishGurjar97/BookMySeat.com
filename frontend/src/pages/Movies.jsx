import { useNavigate } from "react-router-dom";
import { dummyShowsData } from "../assets/assets";
import { Star } from "lucide-react";

const Movies = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0b0b0b] to-black text-white">

      {/* PAGE HEADER */}
      <div className="pt-28 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Now Showing
        </h1>
        <p className="mt-3 text-gray-400">
          Book tickets for the latest movies
        </p>
      </div>

      {/* MOVIES GRID */}
      <div className="max-w-7xl mx-auto px-6 md:px-14 lg:px-24 pb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">

          {dummyShowsData.map((movie) => (
            <div
              key={movie._id}
              onClick={() => {
                navigate(`/movies/${movie._id}`);
                window.scrollTo(0, 0);
              }}
              className="
                group cursor-pointer
                rounded-xl overflow-hidden
                transition-transform duration-300
                hover:-translate-y-2
              "
            >

              {/* POSTER */}
              <div className="relative">
                <img
                  src={movie.poster_path}
                  alt={movie.title}
                  className="
                    w-full h-[280px] md:h-[320px]
                    object-cover rounded-xl
                  "
                />

                {/* RATING */}
                <div className="
                  absolute top-2 left-2
                  flex items-center gap-1
                  bg-black/70 backdrop-blur
                  px-2 py-1 rounded-md
                ">
                  <Star className="w-3.5 h-3.5 text-primary fill-primary" />
                  <span className="text-xs font-medium">
                    {movie.vote_average.toFixed(1)}
                  </span>
                </div>
              </div>

              {/* INFO */}
              <div className="mt-3">
                <h3 className="text-sm font-medium line-clamp-1">
                  {movie.title}
                </h3>

                <p className="text-xs text-gray-400 mt-1">
                  {movie.genres.map(g => g.name).slice(0, 2).join(", ")}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Movies;
