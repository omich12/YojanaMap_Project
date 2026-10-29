import { ArrowRight, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

function CareerCard({
  title,
  description,
  category,
  duration,
  slug
}) {

  return (
    <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md">

      <span className="mb-4 w-fit rounded-full bg-[#EFF5E6] px-3 py-1 text-xs font-medium text-[#3D5A1E]">
        {category}
      </span>

      <h3 className="text-xl font-semibold text-[#2C2C2A]">
        {title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">
        {description}
      </p>

      <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
        <Clock size={16} />
        {duration}
      </div>

      <Link
        to={`/careers/${slug}`}
        className="mt-6 inline-flex items-center gap-2 font-medium text-[#3D5A1E] hover:text-[#6B9A38]"
      >
        Explore Career
        <ArrowRight size={17} />
      </Link>

    </div>
  )
}

export default CareerCard