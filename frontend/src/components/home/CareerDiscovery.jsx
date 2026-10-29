import { ArrowRight, Compass } from 'lucide-react'
import { Link } from 'react-router-dom'

function CareerDiscovery() {
  return (
    <section className="bg-white py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="overflow-hidden rounded-2xl bg-[#3D5A1E] px-8 py-12 text-white md:px-12">

          <div className="grid items-center gap-8 md:grid-cols-2">

            <div>

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <Compass size={26} />
              </div>

              <h2 className="text-3xl font-bold">
                Not sure which career is right for you?
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-white/80">
                Answer a few simple questions about your interests,
                strengths and goals. We'll help you discover career
                paths worth exploring.
              </p>

              <Link
                to="/discover"
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-[#3D5A1E] transition hover:bg-[#EFF5E6]"
              >
                Find My Career
                <ArrowRight size={18} />
              </Link>

            </div>


            <div className="hidden justify-end md:flex">

              <div className="w-full max-w-sm space-y-3">

                <QuestionCard text="What are you interested in?" />

                <QuestionCard text="What are your strengths?" />

                <QuestionCard text="How do you prefer to work?" />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}


function QuestionCard({ text }) {
  return (
    <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
      <p className="text-sm text-white/90">
        {text}
      </p>
    </div>
  )
}


export default CareerDiscovery