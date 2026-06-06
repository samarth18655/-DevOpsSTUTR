function Stats() {
  return (
    <section className="relative z-10 px-6 pb-32">

      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Stat 1 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center backdrop-blur-xl hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-500">

            <h3 className="text-5xl font-bold mb-4">
              99.9%
            </h3>

            <p className="text-white/60">
              Attendance Accuracy
            </p>

          </div>

          {/* Stat 2 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center backdrop-blur-xl hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-500">

            <h3 className="text-5xl font-bold mb-4">
              5s
            </h3>

            <p className="text-white/60">
              Dynamic QR Refresh
            </p>

          </div>

          {/* Stat 3 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center backdrop-blur-xl hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-500">

            <h3 className="text-5xl font-bold mb-4">
              Real-Time
            </h3>

            <p className="text-white/60">
              Verification & Analytics
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Stats