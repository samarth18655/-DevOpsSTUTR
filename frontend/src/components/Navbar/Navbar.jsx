import { useNavigate } from "react-router-dom"

function Navbar() {

  const navigate = useNavigate()

  return (

    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <h1 className="text-3xl font-black tracking-tight text-white">
          STUTR
        </h1>

        <button
          onClick={() => navigate("/login")}
          className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
        >
          Login
        </button>

      </div>

    </nav>

  )
}

export default Navbar