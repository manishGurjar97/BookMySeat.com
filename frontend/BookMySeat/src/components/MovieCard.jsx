import { useNavigate } from "react-router-dom";
import { StarIcon } from "lucide-react";
import TimeConvertion from "../libraries/TimeConvertion";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  if (!movie) return null;

  const year = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : "";

  const rating =
    typeof movie.vote_average === "number"
      ? movie.vote_average.toFixed(1)
      : "0.0";

  return (
    <div
      className="
        flex
        flex-col
        justify-between
        gap-3
        h-full
        transition-transform
        duration-300
        hover:-translate-y-1
      "
    >
      {/* Image */}
      {movie.backdrop_path && (
        <img
          src={movie.backdrop_path}
          alt={movie.title}
          className="h-56 w-full rounded-xl object-cover cursor-pointer"
          onClick={() => {
            navigate(`/movies/${movie._id}`);
            window.scrollTo(0, 0);
          }}
        />
      )}

      {/* Title */}
      <p className="font-semibold text-base truncate text-white">
        {movie.title}
      </p>

      {/* Meta */}
      <p className="text-sm text-gray-400">
        {year} •{" "}
        {movie.genres?.slice(0, 2).map(g => g.name).join(" | ")} •{" "}
        {TimeConvertion(movie.runtime)}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={() => navigate(`/movies/${movie._id}`)}
          className="px-5 py-2 text-xs bg-primary rounded-full font-medium hover:opacity-90"
        >
          Buy Tickets
        </button>

        <p className="flex items-center gap-1 text-sm text-gray-400">
          <StarIcon className="w-4 h-4 text-primary fill-primary" />
          {rating}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
