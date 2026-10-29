import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

import CareerCard from '../careers/CareerCard'
import { careers } from '../../data/careers'


function PopularCareers() {

  const popularCareers = careers.filter(
    (career) => career.popular
  )

  return (
    <section className="bg-[#F8FAF5] py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

          <div>

            <p className="text-sm font-semibold uppercase tracking-wide text-[#6B9A38]">
              Popular Roadmaps
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#2C2C2A]">
              Start exploring a career
            </h2>

            <p className="mt-3 max-w-2xl text-gray-600">
              Follow structured learning paths designed to take you
              from beginner to career-ready.
            </p>

          </div>


          <Link
            to="/careers"
            className="inline-flex items-center gap-2 font-medium text-[#3D5A1E]"
          >
            View all careers
            <ArrowRight size={18} />
          </Link>

        </div>


        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {popularCareers.map((career) => (

            <CareerCard
              key={career.id}
              title={career.title}
              description={career.description}
              category={career.category}
              duration={career.duration}
              slug={career.slug}
            />

          ))}

        </div>

      </div>

    </section>
  )
}

export default PopularCareers