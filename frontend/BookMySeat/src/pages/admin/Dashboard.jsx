import { useEffect, useState } from "react";
import {
  ChartLineIcon,
  CircleDollarSignIcon,
  FilmIcon,
  UsersIcon,
} from "lucide-react";
import { dummyDashboardData } from "../../assets/assets";

const Dashboard = () => {
  const currency = import.meta.env.VITE_CURRENCY || "₹";

  const [dashboardData, setDashboardData] = useState({
    totalBookings: 0,
    totalRevenue: 0,
    activeShows: [],
    totalUser: 0,
  });

  const [loading, setLoading] = useState(true);

  const fetchDashboardData = async () => {
    setTimeout(() => {
      setDashboardData(dummyDashboardData);
      setLoading(false);
    }, 800);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const dashboardCards = [
    { title: "Total Bookings", value: dashboardData.totalBookings, icon: ChartLineIcon },
    { title: "Total Revenue", value: `${currency}${dashboardData.totalRevenue}`, icon: CircleDollarSignIcon },
    { title: "Active Shows", value: dashboardData.activeShows.length, icon: FilmIcon },
    { title: "Total Users", value: dashboardData.totalUser, icon: UsersIcon },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full text-gray-400">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
        <p className="text-sm text-gray-400">
          Overview of bookings, revenue and users
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {dashboardCards.map((card, i) => {
          const Icon = card.icon;
          return (
            <div key={i} className="bg-black border border-gray-300/20 rounded-xl p-6 flex justify-between">
              <div>
                <p className="text-sm text-gray-400">{card.title}</p>
                <h2 className="text-2xl font-semibold text-white mt-1">
                  {card.value}
                </h2>
              </div>
              <div className="p-3 rounded-lg bg-primary/15 text-primary">
                <Icon className="w-6 h-6" />
              </div>
            </div>
          );
        })}
      </div>

      {/* ACTIVE SHOWS */}
      <p className="mt-10 text-lg font-semibold text-white">Active Shows</p>

      <div className="flex flex-wrap gap-6">
        {dashboardData.activeShows.map((show) => (
          <div
            key={show._id}
            className="w-56 bg-black border border-primary/20 rounded-xl overflow-hidden hover:-translate-y-1 transition"
          >
            <img
              src={show.movie.poster_path}
              alt={show.movie.title}
              className="h-64 w-full object-cover"
            />

            <div className="p-3 space-y-2">
              <p className="font-medium text-sm truncate text-white">
                {show.movie.title}
              </p>

              <div className="flex justify-between items-center">
                <p className="text-primary font-semibold">
                  {currency} {show.showPrice}
                </p>
                <span className="text-sm text-gray-400">
                  ⭐ {show.movie.vote_average.toFixed(1)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
