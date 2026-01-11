import { useEffect, useState } from "react";
import { dummyBookingData } from "../assets/assets";
import BlurEffect from "../components/BlureEffect";
import TimeConvertion from "../libraries/TimeConvertion";

const Mybooking = () => {
  const currency = "₹";
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate API call
    setTimeout(() => {
      setBookings(dummyBookingData);
      setIsLoading(false);
    }, 600);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Loading your bookings...
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-[#0b0b0b] to-black text-white px-6 md:px-16 lg:px-40 pt-28 pb-20">

      {/* Blur Effects */}
      <BlurEffect top="120px" left="120px" />
      <BlurEffect bottom="0px" left="600px" />

      <h1 className="text-xl font-semibold mb-6">
        My Bookings
      </h1>

      <div className="flex flex-col gap-5 max-w-4xl">

        {bookings.map((item, index) => (
          <div
            key={index}
            className="
              flex flex-col md:flex-row justify-between
              bg-primary/10 border border-primary/20
              rounded-xl p-4 gap-4
            "
          >
            {/* LEFT */}
            <div className="flex gap-4">
              <img
                src={item.show.movie.poster_path}
                alt={item.show.movie.title}
                className="w-20 h-28 rounded-md object-cover"
              />

              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="font-semibold text-sm">
                    {item.show.movie.title}
                  </h2>

                  <p className="text-xs text-gray-400 mt-1">
                    {TimeConvertion(item.show.movie.runtime)   } 
                  </p>

                  <p className="text-xs text-gray-400 mt-2">
                    {new Date(item.show.showDateTime).toDateString()} at{" "}
                    {new Date(item.show.showDateTime).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>

                <p className="text-xs text-gray-400 mt-2">
                  Seat Number:{" "}
                  <span className="text-gray-200">
                    {item.bookedSeats.join(", ")}
                  </span>
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-end justify-between">
              <p className="text-lg font-semibold">
                {currency}{item.amount}
              </p>

              {item.isPaid ? (
                <span className="text-xs text-green-400 mt-2">
                  Payment Successful
                </span>
              ) : (
                <button
                  className="
                    mt-2 px-4 py-1.5 rounded-full
                    bg-primary text-black text-xs font-semibold
                    hover:opacity-90 transition
                  "
                >
                  Pay Now
                </button>
              )}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Mybooking;
