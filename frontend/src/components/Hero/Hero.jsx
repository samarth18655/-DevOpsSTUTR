import { Link } from "react-router-dom";

function Hero() {

  return (

    <div className="bg-black text-white overflow-hidden min-h-screen relative">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-purple-700/30 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-pink-600/20 blur-[140px] rounded-full"></div>

      </div>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-14 py-6 border-b border-white/10">

        <h1 className="text-4xl md:text-5xl font-black tracking-wide">
          STUTR
        </h1>

        <Link
          to="/login"
          className="border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-black transition duration-300"
        >
          Login
        </Link>

      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-16 pb-20">

        <p className="tracking-[7px] text-purple-300 text-sm md:text-base mb-6">
          TRUSTED CLASSROOM PRESENCE
        </p>

        <h1 className="text-4xl md:text-7xl font-black leading-tight max-w-6xl bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
          Attendance Reimagined for Modern Classrooms
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mt-8 max-w-3xl leading-relaxed">
          Secure QR-based attendance with real-time verification,
          analytics, and seamless classroom workflows.
        </p>

        <div className="flex flex-col md:flex-row gap-5 mt-8">

          <button className="bg-white text-black px-10 py-4 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-xl">
            Get Started
          </button>

          <button className="border border-white/20 px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300">
            Learn More
          </button>

        </div>

      </section>

      {/* Features */}
      <section className="px-6 md:px-16 pb-24">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Designed for Modern Institutions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:scale-105 transition duration-300">

            <div className="text-5xl mb-6">⚡</div>

            <h3 className="text-2xl font-bold mb-4">
              Instant Attendance
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Students scan dynamic QR codes with real-time verification and seamless classroom flow.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:scale-105 transition duration-300">

            <div className="text-5xl mb-6">📊</div>

            <h3 className="text-2xl font-bold mb-4">
              Smart Analytics
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Generate attendance reports, monitor trends, and identify low attendance instantly.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:scale-105 transition duration-300">

            <div className="text-5xl mb-6">🔒</div>

            <h3 className="text-2xl font-bold mb-4">
              Secure Verification
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Dynamic QR refresh, teacher verification, and anti-proxy mechanisms improve attendance authenticity.
            </p>

          </div>

          {/* Card 4 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:scale-105 transition duration-300">

            <div className="text-5xl mb-6">📱</div>

            <h3 className="text-2xl font-bold mb-4">
              Mobile Friendly
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Access attendance systems seamlessly across phones, tablets, and desktops.
            </p>

          </div>

          {/* Card 5 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:scale-105 transition duration-300">

            <div className="text-5xl mb-6">☁️</div>

            <h3 className="text-2xl font-bold mb-4">
              Cloud Sync
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Attendance data securely syncs in real-time with cloud-based infrastructure.
            </p>

          </div>

          {/* Card 6 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:scale-105 transition duration-300">

            <div className="text-5xl mb-6">🛡️</div>

            <h3 className="text-2xl font-bold mb-4">
              Anti Proxy System
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Advanced validation systems help prevent fake attendance and proxy entries.
            </p>

          </div>

        </div>

      </section>

    </div>

  );
}

export default Hero;