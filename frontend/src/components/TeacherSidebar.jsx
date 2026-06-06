import { Link, useLocation } from "react-router-dom";

function TeacherSidebar({
  sidebarOpen,
  setSidebarOpen,
  handleLogout,
}) {

  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/teacher-dashboard",
    },
    {
      name: "Students",
      path: "/students",
    },
    {
      name: "Lectures",
      path: "/lectures",
    },
    {
      name: "Classrooms",
      path: "/classrooms",
    },
    {
      name: "Notifications",
      path: "/notifications",
    },
    {
      name: "Reports",
      path: "/reports",
    },
    {
      name: "Settings",
      path: "/settings",
    },
  ];

  return (

    <>
    
      {/* DARK OVERLAY */}
      {

        sidebarOpen && (

          <div
            onClick={() =>
              setSidebarOpen(false)
            }
            className="fixed inset-0 bg-black/60 z-40"
          />

        )

      }

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-screen w-[300px] bg-[#050505] border-r border-white/10 z-50 transform transition-transform duration-300 ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >

        <div className="p-6 flex flex-col h-full">

          {/* LOGO */}
          <div className="mb-10">

            <h1 className="text-4xl font-black text-white">
              STUTR
            </h1>

            <p className="text-gray-500 text-sm mt-1">
              Teacher Panel
            </p>

          </div>

          {/* MENU */}
          <div className="flex flex-col gap-4">

            {

              menuItems.map((item) => (

                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() =>
                    setSidebarOpen(false)
                  }
                  className={`px-5 py-4 rounded-2xl transition duration-300 font-semibold ${
                    location.pathname === item.path
                      ? "bg-white text-black"
                      : "bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </Link>

              ))

            }

          </div>

          {/* LOGOUT */}
          <div className="mt-auto">

            <button
              onClick={handleLogout}
              className="w-full bg-red-500 hover:bg-red-600 transition py-4 rounded-2xl font-bold text-white"
            >
              Logout
            </button>

          </div>

        </div>

      </div>

    </>

  );

}

export default TeacherSidebar;