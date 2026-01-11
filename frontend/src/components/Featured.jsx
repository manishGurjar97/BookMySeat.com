import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BlurEffect from "./BlureEffect";
import MovieCard from "./MovieCard";
import { dummyShowsData } from "../assets/assets";

const Featured = () => {
  const navigate = useNavigate();

  return (
    <section className="relative px-6 md:px-16 lg:px-24 xl:px-32">
      
      {/* Header */}
      <div className="relative flex items-center justify-between pt-20 pb-10">
        <BlurEffect bottom="-40px" right="60px" />

        <p className="text-gray-200 font-medium text-lg z-20">
          Now Showing
        </p>

        <button
          onClick={() => navigate("/movies")}
          className="group z-20 flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
        >
          View All
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
        </button>
      </div>

      {/* Movie Cards Grid */}
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          gap-x-12
          gap-y-16
        "
      >
        {dummyShowsData.slice(0, 4).map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>

      {/* Show More */}
      <div className="flex justify-center mt-20">
        <button
          onClick={() => {
            navigate("/movies");
            window.scrollTo(0, 0);
          }}
          className="px-12 py-3 text-sm bg-primary hover:bg-primary/90 transition rounded-lg font-medium"
        >
          Show more
        </button>
      </div>
    </section>
  );
};

export default Featured;
