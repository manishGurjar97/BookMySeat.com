import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dummyShowsData, dummyDateTimeData } from "../assets/assets";
import { Star, Clock, Calendar } from "lucide-react";
import BlurEffect from "../components/BlureEffect";
import TimeConvertion from "../libraries/TimeConvertion.js";
import DateSelect from "../components/DateSelect.jsx";

const MovieDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const movie = dummyShowsData.find(item => item._id === id);
    if (movie) {
      setShow({
        movie,
        dateTime: dummyDateTimeData,
      });
    }
  }, [id]);

  if (!show) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Loading movie details...
      </div>
    );
  }

  const { movie } = show;

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-[#0b0b0b] to-black text-white">

      {/* Blur background */}
      <BlurEffect top="-120px" left="-120px" />
      <BlurEffect bottom="-120px" right="-120px" />

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 md:px-14 lg:px-24 pt-28 pb-20">

        {/* ================= TOP SECTION ================= */}
        <div className="flex flex-col lg:flex-row gap-12">

          {/* POSTER */}
          <div className="flex-shrink-0">
            <img
              src={movie.poster_path}
              alt={movie.title}
              className="w-[260px] h-[390px] object-cover rounded-2xl shadow-xl mx-auto lg:mx-0"
            />
          </div>

          {/* DETAILS */}
          <div className="flex flex-col gap-5 max-w-3xl">

            <p className="uppercase tracking-widest text-primary text-sm">
              {movie.original_language.toUpperCase()}
            </p>

            <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
              {movie.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 text-gray-300">
              <Star className="w-5 h-5 text-primary fill-primary" />
              <span className="text-lg font-medium">
                {movie.vote_average.toFixed(1)}
              </span>
              <span className="text-sm">
                ({movie.vote_count.toLocaleString()} votes)
              </span>
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {TimeConvertion(movie.runtime)}
              </span>

              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {movie.release_date}
              </span>

              <span>
                {movie.genres.map(g => g.name).join(", ")}
              </span>
            </div>

            {/* Overview */}
            <p className="text-gray-300 leading-relaxed">
              {movie.overview}
            </p>

            {/* Tagline */}
            <p className="italic text-gray-400">
              “{movie.tagline}”
            </p>
          </div>
        </div>

        {/* ================= CAST SECTION ================= */}
        <div className="mt-20">
          <p className="text-2xl font-semibold mb-6">
            Your Favorite Cast
          </p>

          <div className="overflow-x-auto no-scrollbar">
            <div className="flex items-start gap-6 w-max px-1">
              {movie.casts.slice(0, 14).map((cast, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center w-24 shrink-0"
                >
                  <div className="h-24 w-24 rounded-full overflow-hidden border border-gray-700 shadow-md">
                    <img
                      src={cast.profile_path}
                      alt={cast.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="mt-3 text-sm font-medium text-gray-200">
                    {cast.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= DATE SELECT SECTION ================= */}
        <DateSelect dateTime={show.dateTime} id={id} />

      </div>
    </div>
  );
};

export default MovieDetails;
