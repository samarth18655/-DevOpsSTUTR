function Features() {
  return (
    <section className="relative z-10 px-6 pb-32">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="text-sm uppercase tracking-[0.3em] text-white/40 mb-4">
            Features
          </p>

          <h3 className="text-4xl font-bold">
            Designed for Modern Institutions
          </h3>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-500">

            <div className="text-4xl mb-6">⚡</div>

            <h4 className="text-2xl font-semibold mb-4">
              Instant Attendance
            </h4>

            <p className="text-white/60 leading-relaxed">
              Students scan dynamic QR codes with real-time verification and seamless classroom flow.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-500">

            <div className="text-4xl mb-6">📊</div>

            <h4 className="text-2xl font-semibold mb-4">
              Smart Analytics
            </h4>

            <p className="text-white/60 leading-relaxed">
              Generate attendance reports, monitor trends, and identify low attendance instantly.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-500">

            <div className="text-4xl mb-6">🔒</div>

            <h4 className="text-2xl font-semibold mb-4">
              Secure Verification
            </h4>

            <p className="text-white/60 leading-relaxed">
              Dynamic QR refresh, teacher verification, and anti-proxy mechanisms improve attendance authenticity.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Features