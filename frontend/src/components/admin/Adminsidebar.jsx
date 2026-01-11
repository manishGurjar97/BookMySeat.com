import { useState } from "react";
import {
  LayoutDashboardIcon,
  PlusSquareIcon,
  ListIcon,
  ListCollapseIcon,
  X,
  Menu,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

const Adminsidebar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(true);

  const user = {
    firstName: "Admin",
    lastName: "User",
    imageUrl: "/Mylogo.jpg",
  };

  const adminNavLinks = [
    { name: "Dashboard", path: "/admin", icon: LayoutDashboardIcon },
    { name: "Add Shows", path: "/admin/add-shows", icon: PlusSquareIcon },
    { name: "List Shows", path: "/admin/list-shows", icon: ListIcon },
    { name: "List Bookings", path: "/admin/list-booking", icon: ListCollapseIcon },
  ];

  return (
    <aside
      className={`
        bg-black border-r border-gray-300/20
        min-h-[calc(100vh-64px)]
        flex flex-col
        transition-all duration-300
        ${open ? "w-64" : "w-20"}
      `}
    >
      {/* TOP : USER + TOGGLE */}
      <div className="relative flex flex-col items-center py-6 border-b border-gray-300/20">
        {/* Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="absolute top-4 right-4 p-1 rounded hover:bg-white/10 transition"
        >
          {open ? (
            <X className="w-5 h-5 text-gray-300" />
          ) : (
            <Menu className="w-5 h-5 text-gray-300" />
          )}
        </button>

        <img
          src={user.imageUrl}
          alt="profile"
          className="h-12 w-12 rounded-full object-cover border border-gray-300/30"
        />

        {open && (
          <>
            <p className="mt-3 text-sm font-medium text-gray-200">
              {user.firstName} {user.lastName}
            </p>
            <span className="text-xs text-gray-400">
              Administrator
            </span>
          </>
        )}
      </div>

      {/* NAV LINKS */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {adminNavLinks.map((link, index) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.path;

          return (
            <NavLink
              key={index}
              to={link.path}
              className={`
                group relative flex items-center
                gap-3 px-4 py-2.5 rounded-md
                text-sm font-medium transition
                ${
                  isActive
                    ? "bg-primary/15 text-primary"
                    : "text-gray-400 hover:bg-white/5 hover:text-gray-200"
                }
              `}
            >
              <Icon className="w-5 h-5 shrink-0" />

              {open && <span>{link.name}</span>}

              {/* Active indicator */}
              {isActive && (
                <span className="absolute right-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-l bg-primary" />
              )}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default Adminsidebar;
