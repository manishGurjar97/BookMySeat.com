import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { CalendarDays, Clock } from "lucide-react";

const DateSelect = ({ dateTime, id }) => {
  const navigate = useNavigate();

  // ✅ NEW: selected date
  const [selectedDate, setSelectedDate] = useState(null);

  // ✅ NEW: selected time (showId)
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <section className="mt-24">

      {/* ================= HEADER ================= */}
      <div className="flex items-center gap-3 mb-8">
        <CalendarDays className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-semibold">
          Select Date & Time
        </h2>
      </div>

      <div className="flex flex-col gap-8">

        {/* ================= DATE SELECT ================= */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          {Object.keys(dateTime).map((date) => {
            const isActive = selectedDate === date;

            return (
              <button
                key={date}
                onClick={() => {
                  setSelectedDate(date);
                  setSelectedTime(null); 
                }}
                className={`
                  flex flex-col items-center justify-center
                  h-20 w-20 shrink-0 rounded-xl
                  border transition-all duration-200
                  ${
                    isActive
                      ? "bg-primary text-black border-primary scale-105"
                      : "border-gray-700 text-gray-300 hover:border-primary"
                  }
                `}
              >
                <span className="text-lg font-semibold">
                  {new Date(date).getDate()}
                </span>
                <span className="text-xs uppercase tracking-wide">
                  {new Date(date).toLocaleDateString("en-US", {
                    month: "short",
                  })}
                </span>
              </button>
            );
          })}
        </div>

        {/* ================= TIME SLOTS ================= */}
        {selectedDate ? (
          <div className="border border-gray-800 rounded-2xl p-6 bg-[#0f0f0f]">

            <p className="flex items-center gap-2 text-gray-400 text-sm mb-5">
              <Clock className="w-4 h-4" />
              {new Date(selectedDate).toDateString()}
            </p>

            <div className="flex flex-wrap gap-4">
              {dateTime[selectedDate].map((slot) => (
                <button
                  key={slot.showId}
                  
                  onClick={() => setSelectedTime(slot.showId)}
                  className={`
                    px-6 py-2.5 rounded-lg border
                    text-sm font-medium
                    transition-all duration-200
                    ${
                      selectedTime === slot.showId
                        ? "bg-primary text-black border-primary"
                        : "border-gray-600 text-gray-200 hover:border-primary"
                    }
                  `}
                >
                  {new Date(slot.time).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </button>
              ))}
            </div>

            {/* ================= BOOK NOW BUTTON ================= */}
            {selectedTime && (
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => {
                    // /Movies/:id/:Date
                    navigate(`/Movies/${id}/${selectedTime}`)

                    window.scrollTo(0, 0);
                  }}
                  className="
                    px-10 py-3 rounded-xl
                    bg-primary text-black font-semibold
                    hover:opacity-90 transition
                  "
                >
                  Book Now
                </button>
              </div>
            )}

          </div>
        ) : (
          <p className="text-sm text-gray-400">
            Please select a date to see available showtimes
          </p>
        )}

      </div>
    </section>
  );
};

export default DateSelect;
