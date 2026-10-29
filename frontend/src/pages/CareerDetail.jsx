import { Link, useParams } from 'react-router-dom'

import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Gauge,
  Briefcase,
  CheckCircle2
} from 'lucide-react'

import { careers } from '../data/careers'


function CareerDetail() {

  const { slug } = useParams()


  const career = careers.find(
    (item) => item.slug === slug
  )


  if (!career) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-20">

        <h1 className="text-3xl font-bold">
          Career not found
        </h1>

        <Link
          to="/careers"
          className="mt-5 inline-block text-[#3D5A1E]"
        >
          Back to careers
        </Link>

      </div>
    )
  }


  return (
    <div className="bg-white">

      {/* Career Header */}
      <section className="bg-[#EFF5E6]">

        <div className="mx-auto max-w-7xl px-6 py-16">

          <Link
            to="/careers"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#3D5A1E]"
          >
            <ArrowLeft size={17} />
            Back to careers
          </Link>


          <div className="mt-8 max-w-3xl">

            <span className="rounded-full bg-[#C8E6A0] px-3 py-1 text-sm font-medium text-[#3D5A1E]">
              {career.category}
            </span>

            <h1 className="mt-5 text-4xl font-bold text-[#2C2C2A] md:text-5xl">
              {career.title}
            </h1>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              {career.description}
            </p>


            <Link
              to={`/roadmaps/${career.slug}`}
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#3D5A1E] px-6 py-3 font-medium text-white transition hover:bg-[#6B9A38]"
            >
              Start Roadmap
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>


      {/* Career Information */}
      <section className="border-b border-gray-100">

        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4">

          <InfoCard
            icon={Clock}
            label="Learning Time"
            value={career.duration}
          />

          <InfoCard
            icon={Gauge}
            label="Level"
            value={career.level}
          />

          <InfoCard
            icon={Briefcase}
            label="Work Style"
            value={career.workStyle}
          />

          <InfoCard
            icon={Briefcase}
            label="Opportunities"
            value={career.opportunity}
          />

        </div>

      </section>


      {/* Career Content */}
      <section className="py-16">

        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">

          {/* Overview */}
          <div className="lg:col-span-2">

            <p className="text-sm font-semibold uppercase tracking-wide text-[#6B9A38]">
              Career Overview
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              What does a {career.title} do?
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-gray-600">
              {career.overview}
            </p>


            <h2 className="mt-12 text-2xl font-bold">
              Skills you'll learn
            </h2>


            <div className="mt-6 grid gap-3 sm:grid-cols-2">

              {career.skills.map((skill) => (

                <div
                  key={skill}
                  className="flex items-center gap-3 rounded-lg border border-gray-200 p-4"
                >

                  <CheckCircle2
                    size={19}
                    className="text-[#6B9A38]"
                  />

                  <span className="text-sm font-medium">
                    {skill}
                  </span>

                </div>

              ))}

            </div>

          </div>


          {/* Side Card */}
          <div>

            <div className="sticky top-24 rounded-xl border border-gray-200 p-6">

              <h3 className="text-lg font-semibold">
                Ready to start?
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Follow the structured roadmap and learn each skill
                step by step.
              </p>

              <Link
                to={`/roadmaps/${career.slug}`}
                className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-[#3D5A1E] px-5 py-3 font-medium text-white transition hover:bg-[#6B9A38]"
              >
                View Roadmap
                <ArrowRight size={17} />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}


function InfoCard({ icon: Icon, label, value }) {

  return (
    <div className="rounded-xl bg-[#F8FAF5] p-5">

      <Icon
        size={20}
        className="text-[#3D5A1E]"
      />

      <p className="mt-3 text-xs font-medium uppercase tracking-wide text-gray-500">
        {label}
      </p>

      <p className="mt-1 font-semibold text-[#2C2C2A]">
        {value}
      </p>

    </div>
  )
}


export default CareerDetail