function Workflow() {
  return (
    <section className="relative z-10 px-6 pb-32">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">

          <p className="text-sm uppercase tracking-[0.3em] text-white/40 mb-4">
            Workflow
          </p>

          <h3 className="text-4xl font-bold">
            How STUTR Works
          </h3>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Step 1 */}
          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-500">

            <div className="text-6xl font-bold text-white/10 absolute top-6 right-8">
              01
            </div>

            <h4 className="text-2xl font-semibold mb-6">
              Teacher Starts Session
            </h4>

            <p className="text-white/60 leading-relaxed">
              A dynamic QR session is instantly generated and displayed on classroom screens or projectors.
            </p>

          </div>

          {/* Step 2 */}
          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-500">

            <div className="text-6xl font-bold text-white/10 absolute top-6 right-8">
              02
            </div>

            <h4 className="text-2xl font-semibold mb-6">
              Students Scan QR
            </h4>

            <p className="text-white/60 leading-relaxed">
              Students securely scan the live QR using their phones for real-time attendance marking.
            </p>

          </div>

          {/* Step 3 */}
          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-500">

            <div className="text-6xl font-bold text-white/10 absolute top-6 right-8">
              03
            </div>

            <h4 className="text-2xl font-semibold mb-6">
              Verification & Analytics
            </h4>

            <p className="text-white/60 leading-relaxed">
              Attendance gets verified instantly with analytics, reports, and anti-proxy monitoring.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Workflow