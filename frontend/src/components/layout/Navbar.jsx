import { Link } from 'react-router-dom'
// import { Search } from 'lucide-react'

function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#3D5A1E]">
          Yojana<span className="text-[#F07B5A]">Map</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/careers"
            className="text-sm font-medium hover:text-[#6B9A38]"
          >
            Explore
          </Link>

          <Link
            to="/discover"
            className="text-sm font-medium hover:text-[#6B9A38]"
          >
            Discover
          </Link>

          <Link
            to="/dashboard"
            className="text-sm font-medium hover:text-[#6B9A38]"
          >
            Dashboard
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* <button className="hidden rounded-lg p-2 hover:bg-gray-100 sm:block">
            <Search size={20} />
          </button> */}

          <button className="hidden text-sm font-medium sm:block">
            EN / नेपाली
          </button>

          <Link
            to="/login"
            className="rounded-lg bg-[#3D5A1E] px-4 py-2 text-sm font-medium text-white hover:bg-[#6B9A38]"
          >
            Sign In
          </Link>

        </div>
      </div>
    </header>
  )
}

export default Navbar