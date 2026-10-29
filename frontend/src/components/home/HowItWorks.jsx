import {
  Compass,
  Route,
  BookOpenCheck
} from 'lucide-react'


const steps = [
  {
    number: '01',
    title: 'Discover your path',
    description:
      'Explore careers or discover paths that match your interests and goals.',
    icon: Compass,
  },

  {
    number: '02',
    title: 'Follow the roadmap',
    description:
      'Understand exactly which skills to learn and the order to learn them.',
    icon: Route,
  },

  {
    number: '03',
    title: 'Learn and progress',
    description:
      'Use curated resources, complete skills and track your progress.',
    icon: BookOpenCheck,
  },
]


function HowItWorks() {
  return (
    <section className="bg-[#EFF5E6] py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-semibold uppercase tracking-wide text-[#6B9A38]">
            How It Works
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#2C2C2A]">
            From confusion to a clear path
          </h2>

          <p className="mt-3 text-gray-600">
            YojanaMap simplifies career planning into three clear steps.
          </p>

        </div>


        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {steps.map((step) => {

            const Icon = step.icon

            return (
              <div
                key={step.number}
                className="rounded-xl bg-white p-7"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C8E6A0] text-[#3D5A1E]">
                    <Icon size={24} />
                  </div>

                  <span className="text-3xl font-bold text-gray-200">
                    {step.number}
                  </span>

                </div>

                <h3 className="mt-6 text-lg font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {step.description}
                </p>

              </div>
            )
          })}

        </div>

      </div>

    </section>
  )
}

export default HowItWorks