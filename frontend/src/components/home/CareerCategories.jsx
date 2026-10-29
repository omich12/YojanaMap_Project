import { Link } from 'react-router-dom'
import {
  Code2,
  BriefcaseBusiness,
  Palette,
  Landmark,
  BarChart3
} from 'lucide-react'


const categories = [
  {
    title: 'Technology',
    description: 'Software, web, AI and digital careers',
    icon: Code2,
  },
  {
    title: 'Business',
    description: 'Management, marketing and entrepreneurship',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Creative',
    description: 'Design, content and creative careers',
    icon: Palette,
  },
  {
    title: 'Government',
    description: 'Public service and government careers',
    icon: Landmark,
  },
  {
    title: 'Data',
    description: 'Analytics, data and research careers',
    icon: BarChart3,
  },
]


function CareerCategories() {
  return (
    <section className="bg-white py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#6B9A38]">
            Explore Your Path
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#2C2C2A]">
            What are you interested in?
          </h2>

          <p className="mt-3 max-w-2xl text-gray-600">
            Explore career paths across different fields and discover
            what matches your interests.
          </p>
        </div>


        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

          {categories.map((category) => {

            const Icon = category.icon

            return (
              <Link
                key={category.title}
                className="cursor-pointer rounded-xl border border-gray-200 bg-white p-5 transition hover:-translate-y-1 hover:border-[#6B9A38] hover:shadow-md"
              >

                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#EFF5E6] text-[#3D5A1E]">
                  <Icon size={22} />
                </div>

                <h3 className="font-semibold text-[#2C2C2A]">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {category.description}
                </p>

              </Link>
            )
          })}

        </div>

      </div>

    </section>
  )
}

export default CareerCategories