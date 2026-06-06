function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex">

      {/* Sidebar */}
      <aside className="w-72 border-r border-white/10 bg-white/5 backdrop-blur-xl p-6">

        <h1 className="text-3xl font-black mb-10">
          STUTR
        </h1>

        <nav className="space-y-3">

          <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 transition">
            Dashboard
          </button>

          <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 transition">
            Attendance
          </button>

          <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 transition">
            Analytics
          </button>

          <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 transition">
            Settings
          </button>

        </nav>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {children}
      </main>

    </div>
  )
}

export default DashboardLayout