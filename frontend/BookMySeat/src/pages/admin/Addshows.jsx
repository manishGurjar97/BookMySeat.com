import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Title from "../../components/Title";
import { dummyShowsData } from "../../assets/assets";

const Addshows = () => {
  const currency = import.meta.env.VITE_CURRENCY || "$";

  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [showPrice, setShowPrice] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [dateTimeSelection, setDateTimeSelection] = useState([]);

  // ================= FETCH MOVIES =================
  useEffect(() => {
    setNowPlayingMovies(dummyShowsData);
  }, []);

  // ================= ADD DATE & TIME =================
  const addDateTime = () => {
    if (!dateInput || !timeInput) {
      return toast.error("Please select both date and time");
    }

    const combined = `${dateInput} ${timeInput}`;

    if (dateTimeSelection.includes(combined)) {
      return toast.error("This show time already exists");
    }

    setDateTimeSelection((prev) => [...prev, combined]);
    setDateInput("");
    setTimeInput("");
  };

  // ================= REMOVE TIME =================
  const removeDateTime = (item) => {
    setDateTimeSelection((prev) =>
      prev.filter((time) => time !== item)
    );
  };

  // ================= SUBMIT SHOW =================
  const handleAddShow = () => {
    if (!selectedMovie) {
      return toast.error("Please select a movie");
    }

    if (!showPrice) {
      return toast.error("Please enter show price");
    }

    if (dateTimeSelection.length === 0) {
      return toast.error("Please add at least one show time");
    }

    const payload = {
      movieId: selectedMovie._id,
      price: showPrice,
      timings: dateTimeSelection,
    };

    console.log("SHOW DATA 👉", payload);
    toast.success("Show added successfully (dummy)");
  };

  return (
    <div className="space-y-10">
      <Title text1="Add" text2="Shows" />

      {/* ================= MOVIES SLIDER ================= */}
      <div>
        <p className="text-lg font-medium mb-4 text-white">
          Now Playing Movies
        </p>

        <div className="overflow-x-auto no-scrollbar pb-4">
          <div className="flex gap-6 w-max">
            {nowPlayingMovies.map((movie) => (
              <div
                key={movie._id}
                onClick={() => setSelectedMovie(movie)}
                className={`
                  w-44 cursor-pointer rounded-xl overflow-hidden
                  border transition
                  ${
                    selectedMovie?._id === movie._id
                      ? "border-primary scale-105"
                      : "border-gray-700 hover:border-primary/50"
                  }
                `}
              >
                <img
                  src={movie.poster_path}
                  alt={movie.title}
                  className="h-64 w-full object-cover"
                />
                <div className="p-2 bg-black">
                  <p className="text-sm font-medium truncate">
                    {movie.title}
                  </p>
                  <p className="text-xs text-gray-400">
                    ⭐ {movie.vote_average.toFixed(1)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= FORM ================= */}
      <div className="max-w-xl space-y-6">

        {/* PRICE */}
        <div>
          <label className="text-sm text-gray-400 block mb-1">
            Show Price
          </label>
          <div className="flex items-center gap-2">
            <span className="text-gray-400">{currency}</span>
            <input
              type="number"
              value={showPrice}
              onChange={(e) => setShowPrice(e.target.value)}
              placeholder="100"
              className="bg-[#0f0f0f] border border-gray-700 rounded-lg px-3 py-2 text-sm w-full outline-none"
            />
          </div>
        </div>

        {/* DATE & TIME */}
        <div className="flex gap-3 items-center">
  <input
    type="date"
    value={dateInput}
    onChange={(e) => setDateInput(e.target.value)}
    className="bg-black border border-gray-600 rounded-lg px-4 py-2 text-white"
  />

  <input
    type="time"
    value={timeInput}
    onChange={(e) => setTimeInput(e.target.value)}
    className="bg-black border border-gray-600 rounded-lg px-4 py-2 text-white relative z-50"
  />

  <button
    onClick={addDateTime}
    className="bg-primary text-black px-6 py-2 rounded-lg font-semibold"
  >
    Add Time
  </button>
</div>

        

        {/* SUBMIT */}
        <button
          onClick={handleAddShow}
          className="w-full py-3 bg-primary text-black rounded-xl font-semibold hover:opacity-90 transition"
        >
          Add Show
        </button>
      </div>
      {/* ================= SELECTED DATE-TIME ================= */}
{dateTimeSelection.length > 0 && (
  <div className="space-y-4">
    <p className="text-sm font-medium text-gray-300">
      Selected Date-Time
    </p>

    <div className="space-y-3">
      {dateTimeSelection.map((item, index) => {
        const [date, time] = item.split(" ");

        return (
          <div key={index}>
            {/* DATE */}
            <p className="text-sm text-gray-400 mb-1">
              {date}
            </p>

            {/* TIME CHIP */}
            <div className="flex items-center gap-2">
              <span
                className="
                  px-4 py-1.5 rounded-md
                  border border-primary/60
                  text-sm text-white
                  bg-primary/10
                "
              >
                {time}
              </span>

              {/* REMOVE BUTTON */}
              <button
                onClick={() => removeDateTime(item)}
                className="
                  text-xs px-2 py-1 rounded
                  border border-red-500/40
                  text-red-400 hover:bg-red-500/10
                "
              >
                ✕
              </button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
)}

    </div>
  );
};

export default Addshows;
