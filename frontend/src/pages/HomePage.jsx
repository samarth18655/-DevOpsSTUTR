import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import Features from "../components/Features/Features"
import Stats from "../components/Stats/Stats"
import Workflow from "../components/Workflow/Workflow"

function HomePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white relative overflow-hidden selection:bg-purple-500/30">

      {/* Background Glow */}
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-purple-500/20 blur-3xl rounded-full"></div>

      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Workflow />

    </div>
  )
}

export default HomePage