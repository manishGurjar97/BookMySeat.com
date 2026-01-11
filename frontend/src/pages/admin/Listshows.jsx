import { useEffect, useState } from "react";
import { dummyDashboardData } from "../../assets/assets";
import BlurEffect from "../../components/BlureEffect";

const ListShows = () => {
  const currency = import.meta.env.VITE_CURRENCY || "₹";

  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // later replace with backend API
    setShows(dummyDashboardData.activeShows);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Loading shows...
      </div>
    );
  }

  return (
    <div className="relative min-h-screen px-4 md:px-10 lg:px-20 pt-20 pb-16 text-white">

      <BlurEffect top="120px" left="120px" />
      <BlurEffect bottom="0px" right="400px" />

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">List Shows</h1>
        <p className="text-sm text-gray-400">
          All running movie shows
        </p>
      </div>

      {/* ===== DESKTOP TABLE ===== */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-primary/20">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-primary/20 text-white">
            <tr>
              <th className="p-3 pl-5 font-medium">Movie Name</th>
              <th className="p-3 font-medium">Show Time</th>
              <th className="p-3 font-medium">Total Bookings</th>
              <th className="p-3 font-medium">Earnings</th>
            </tr>
          </thead>

          <tbody>
            {shows.map((show) => {
              const totalBookings = Object.keys(
                show.occupiedSeats || {}
              ).length;

              return (
                <tr
                  key={show._id}
                  className="border-t border-primary/10 hover:bg-primary/10 transition"
                >
                  <td className="p-3 pl-5 flex items-center gap-3">
                    <img
                      src={show.movie.poster_path}
                      alt={show.movie.title}
                      className="w-10 h-14 object-cover rounded"
                    />
                    <span className="font-medium">
                      {show.movie.title}
                    </span>
                  </td>

                  <td className="p-3 text-gray-300">
                    {new Date(show.showDateTime).toLocaleString()}
                  </td>

                  <td className="p-3">
                    {totalBookings}
                  </td>

                  <td className="p-3 font-medium text-primary">
                    {currency}
                    {totalBookings * show.showPrice}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ===== MOBILE CARDS ===== */}
      <div className="md:hidden flex flex-col gap-4">
        {shows.map((show) => {
          const totalBookings = Object.keys(
            show.occupiedSeats || {}
          ).length;

          return (
            <div
              key={show._id}
              className="bg-[#0f0f0f] border border-primary/20 rounded-xl p-4 flex gap-4"
            >
              <img
                src={show.movie.poster_path}
                alt=""
                className="w-16 h-24 object-cover rounded-md"
              />

              <div className="flex-1">
                <h3 className="text-sm font-semibold">
                  {show.movie.title}
                </h3>

                <p className="text-xs text-gray-400 mt-1">
                  {new Date(show.showDateTime).toLocaleString()}
                </p>

                <p className="text-xs mt-1">
                  🎟 Bookings: {totalBookings}
                </p>

                <p className="text-xs mt-1 text-primary font-medium">
                  💰 {currency}
                  {totalBookings * show.showPrice}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default ListShows;
