import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="flex flex-col justify-between gap-6 md:flex-row">

          <div>
            <h2 className="text-xl font-bold text-[#3D5A1E]">
              Yojana<span className="text-[#F07B5A]">Map</span>
            </h2>

            <p className="mt-2 max-w-sm text-sm text-gray-600">
              Helping students discover careers, learn the right skills,
              and follow a clear path forward.
            </p>
          </div>

          <div className="flex gap-8 text-sm">
            <Link to="/careers">Explore Careers</Link>
            <Link to="/discover">Discover</Link>
            <Link to="/dashboard">Dashboard</Link>
          </div>

        </div>

        <p className="mt-8 text-sm text-gray-500">
          © 2026 YojanaMap
        </p>

      </div>
    </footer>
  )
}

export default Footer