import { useEffect, useState } from "react";
import { dummyBookingData } from "../../assets/assets";
import BlurEffect from "../../components/BlureEffect";

const ListBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // later replace with backend API
    setBookings(dummyBookingData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Loading bookings...
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-[#0b0b0b] to-black text-white px-4 md:px-12 lg:px-32 pt-28 pb-20">

      {/* Blur */}
      <BlurEffect top="120px" left="120px" />
      <BlurEffect bottom="0px" right="400px" />

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">List Bookings</h1>
        <p className="text-sm text-gray-400">
          All movie booking records
        </p>
      </div>

      {/* ===== DESKTOP TABLE ===== */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-primary/20">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-primary/15 text-gray-200">
            <tr>
              <th className="px-4 py-3 font-medium">User</th>
              <th className="px-4 py-3 font-medium">Movie</th>
              <th className="px-4 py-3 font-medium">Show Time</th>
              <th className="px-4 py-3 font-medium">Seats</th>
              <th className="px-4 py-3 font-medium">Amount</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((item, index) => (
              <tr
                key={index}
                className="border-t border-primary/10 hover:bg-primary/10 transition"
              >
                <td className="px-4 py-3">
                  {item.user?.name || "Guest"}
                </td>

                <td className="px-4 py-3">
                  {item.show.movie.title}
                </td>

                <td className="px-4 py-3 text-gray-300">
                  {new Date(item.show.showDateTime).toLocaleString()}
                </td>

                <td className="px-4 py-3">
                  {item.bookedSeats.join(", ")}
                </td>

                <td className="px-4 py-3 font-medium">
                  ₹{item.amount}
                </td>

                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium
                      ${
                        item.isPaid
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                  >
                    {item.isPaid ? "Paid" : "Pending"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===== MOBILE CARDS ===== */}
      <div className="md:hidden flex flex-col gap-4">
        {bookings.map((item, index) => (
          <div
            key={index}
            className="bg-[#0f0f0f] border border-primary/20 rounded-xl p-4 flex gap-4"
          >
            <img
              src={item.show.movie.poster_path}
              alt=""
              className="w-16 h-24 object-cover rounded-md"
            />

            <div className="flex-1">
              <h3 className="text-sm font-semibold">
                {item.show.movie.title}
              </h3>

              <p className="text-xs text-gray-400 mt-1">
                {new Date(item.show.showDateTime).toLocaleString()}
              </p>

              <p className="text-xs mt-1">
                🎟 Seats:{" "}
                <span className="text-gray-300">
                  {item.bookedSeats.join(", ")}
                </span>
              </p>

              <p className="text-xs mt-1">
                 ₹{item.amount}
              </p>

              <span
                className={`inline-block mt-2 px-3 py-1 rounded-full text-xs
                  ${
                    item.isPaid
                      ? "bg-green-500/20 text-green-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
              >
                {item.isPaid ? "Paid" : "Pending"}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ListBookings;
