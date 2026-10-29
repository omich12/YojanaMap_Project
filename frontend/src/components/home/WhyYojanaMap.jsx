import {
  Map,
  MapPin,
  BookOpen,
  TrendingUp
} from 'lucide-react'


const features = [
  {
    title: 'Structured Roadmaps',
    description:
      'Know what to learn, why it matters and what comes next.',
    icon: Map,
  },

  {
    title: 'Localized Guidance',
    description:
      'Career information designed with Nepali students in mind.',
    icon: MapPin,
  },

  {
    title: 'Curated Resources',
    description:
      'Find useful free, paid, local and global learning resources.',
    icon: BookOpen,
  },

  {
    title: 'Track Your Progress',
    description:
      'Complete skills and clearly see how far you have progressed.',
    icon: TrendingUp,
  },
]


function WhyYojanaMap() {
  return (
    <section className="bg-white py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12">

          <p className="text-sm font-semibold uppercase tracking-wide text-[#6B9A38]">
            Why YojanaMap?
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Everything you need to move forward
          </h2>

        </div>


        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {

            const Icon = feature.icon

            return (
              <div key={feature.title}>

                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#EFF5E6] text-[#3D5A1E]">
                  <Icon size={22} />
                </div>

                <h3 className="font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {feature.description}
                </p>

              </div>
            )
          })}

        </div>

      </div>

    </section>
  )
}

export default WhyYojanaMap