import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import BlurEffect from "../components/BlureEffect";
import { assets } from "../assets/assets";
import {  useUser,SignInButton } from "@clerk/clerk-react";

const Seatlayout = () => {
  const{isSignedIn}= useUser();
  const { showId } = useParams();
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);

  // ================= SEAT CLICK HANDLER =================
  const handleSeatClick = (seatId) => {
    // max 5 seats
    if (!selectedSeats.includes(seatId) && selectedSeats.length >= 5) {
      return toast.error("You can only select 5 seats");
    }

    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((seat) => seat !== seatId)
        : [...prev, seatId]
    );
  };

  // ================= RENDER SEATS =================
  const renderSeats = (row, count = 9) => (
    <div key={row} className="flex gap-2 mt-2">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {Array.from({ length: count }, (_, i) => {
          const seatId = `${row}${i + 1}`;
          const isSelected = selectedSeats.includes(seatId);

          return (
            <button
              key={seatId}
              onClick={() => handleSeatClick(seatId)}
              className={`
                h-8 w-8 rounded border text-xs
                transition-all duration-200
                ${isSelected
                  ? "bg-primary text-black border-primary"
                  : "border-primary/60 text-gray-300 hover:bg-primary/20"
                }
              `}
            >
              {seatId}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-[#0b0b0b] to-black text-white px-6 md:px-14 lg:px-24 pt-28 pb-20">

      {/* Blur effects */}
      <BlurEffect top="-120px" left="-120px" />
      <BlurEffect bottom="-120px" right="-120px" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">

        {/* ================= LEFT : SEATS ================= */}
        <div className="flex-1 flex flex-col items-center">

          <h1 className="text-2xl font-semibold mb-4">
            Select your seat
          </h1>

          {/* SCREEN */}
          <img
            src={assets.screenImage}
            alt="screen"
            className="w-[70%] opacity-80 mb-2"
          />
          <p className="text-xs text-gray-400 mb-10">
            SCREEN SIDE
          </p>

          {/* SEAT GRID */}
          <div className="flex flex-col gap-6 text-xs text-gray-300">

            {/* Upper section */}
            <div className="grid grid-cols-2 gap-10">
              <div>
                {["A", "B"].map((row) => renderSeats(row))}
              </div>
              <div>
                {["C", "D"].map((row) => renderSeats(row))}
              </div>
            </div>

            {/* Middle section */}
            <div className="grid grid-cols-2 gap-10">
              <div>
                {["E", "F"].map((row) => renderSeats(row))}
              </div>
              <div>
                {["G", "H"].map((row) => renderSeats(row))}
              </div>
            </div>

            {/* Lower section */}
            <div className="grid grid-cols-2 gap-10">
              <div>
                {["I"].map((row) => renderSeats(row))}
              </div>
              <div>
                {["J"].map((row) => renderSeats(row))}
              </div>
            </div>

          </div>
        </div>

        {/* ================= RIGHT : SUMMARY ================= */}
        <div className="w-full lg:w-[320px] bg-[#0f0f0f] border border-gray-800 rounded-2xl p-6 h-fit">

          <h2 className="text-lg font-semibold mb-4">
            Booking Summary
          </h2>

          <div className="text-sm text-gray-300 space-y-3">
            <p>
              <span className="text-gray-400">Show ID:</span>{" "}
              {showId}
            </p>

            <p>
              <span className="text-gray-400">Selected Seats:</span>{" "}
              {selectedSeats.length > 0
                ? selectedSeats.join(", ")
                : "None"}
            </p>

            <p>
              <span className="text-gray-400">Total Seats:</span>{" "}
              {selectedSeats.length}
            </p>
          </div>

          {/* ACTION BUTTON */}
          {!isSignedIn ? (
            <SignInButton mode="modal">
              <button
                disabled={selectedSeats.length === 0}
                className={`
        w-full mt-6 py-3 rounded-xl font-semibold
        transition
        ${selectedSeats.length > 0
                    ? "bg-primary text-black hover:opacity-90"
                    : "bg-gray-700 text-gray-400 cursor-not-allowed"
                  }
      `}
              >
                Login to Continue
              </button>
            </SignInButton>
          ) : (
            <button
              disabled={selectedSeats.length === 0}
              onClick={() => navigate("/Mybooking")}
              className={`
      w-full mt-6 py-3 rounded-xl font-semibold
      transition
      ${selectedSeats.length > 0
                  ? "bg-primary text-black hover:opacity-90"
                  : "bg-gray-700 text-gray-400 cursor-not-allowed"
                }
    `}
            >
              Proceed to Pay
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default Seatlayout;
