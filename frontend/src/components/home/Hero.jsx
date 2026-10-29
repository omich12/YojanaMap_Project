import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="bg-[#EFF5E6]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">

        {/* Left Content */}
        <div>

          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#C8E6A0] px-4 py-2 text-sm font-medium text-[#3D5A1E]">
            <Sparkles size={16} />
            Career guidance built for Nepal
          </div>

          <h1 className="max-w-xl text-4xl font-bold leading-tight text-[#2C2C2A] md:text-5xl lg:text-6xl">
            Find your career.
            <span className="block text-[#3D5A1E]">
              Follow a clear path.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 md:text-lg">
            Discover career paths, understand the skills you need,
            and find the right learning resources — all in one place.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <Link
              to="/careers"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#3D5A1E] px-6 py-3 font-medium text-white transition hover:bg-[#6B9A38]"
            >
              Explore Careers
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/discover"
              className="inline-flex items-center justify-center rounded-lg border border-[#3D5A1E] px-6 py-3 font-medium text-[#3D5A1E] transition hover:bg-[#C8E6A0]"
            >
              Find My Career
            </Link>

          </div>

        </div>


        {/* Right Visual */}
        <div className="hidden justify-center lg:flex">

          <div className="w-full max-w-md rounded-2xl border border-[#C8E6A0] bg-white p-8 shadow-sm">

            <p className="mb-6 text-sm font-semibold text-gray-500">
              FRONTEND DEVELOPER ROADMAP
            </p>

            <div className="flex flex-col items-center">

              <RoadmapPreviewNode
                title="Internet Basics"
                completed
              />

              <Connector />

              <RoadmapPreviewNode
                title="HTML & CSS"
                completed
              />

              <Connector />

              <RoadmapPreviewNode
                title="JavaScript"
                active
              />

              <Connector />

              <RoadmapPreviewNode
                title="React"
              />

              <Connector />

              <RoadmapPreviewNode
                title="Build Projects"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}


function RoadmapPreviewNode({ title, completed, active }) {

  let styles = 'border-gray-200 bg-white text-gray-600'

  if (completed) {
    styles = 'border-[#6B9A38] bg-[#C8E6A0] text-[#3D5A1E]'
  }

  if (active) {
    styles = 'border-[#F07B5A] bg-[#FFF3EE] text-[#2C2C2A]'
  }

  return (
    <div
      className={`w-52 rounded-lg border px-4 py-3 text-center text-sm font-medium ${styles}`}
    >
      {title}
    </div>
  )
}


function Connector() {
  return (
    <div className="h-6 w-px bg-gray-300"></div>
  )
}


export default Hero