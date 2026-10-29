import { useState } from 'react'
import { Search } from 'lucide-react'

import CareerCard from '../components/careers/CareerCard'
import { careers } from '../data/careers'


function Careers() {

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')


  const categories = [
    'All',
    'Technology',
    'Data',
    'Creative',
    'Business',
  ]


  const filteredCareers = careers.filter((career) => {

    const matchesSearch =
      career.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      career.description
        .toLowerCase()
        .includes(search.toLowerCase())


    const matchesCategory =
      category === 'All' ||
      career.category === category


    return matchesSearch && matchesCategory
  })


  return (
    <div className="bg-white">

      {/* Page Header */}
      <section className="bg-[#EFF5E6]">

        <div className="mx-auto max-w-7xl px-6 py-16">

          <p className="text-sm font-semibold uppercase tracking-wide text-[#6B9A38]">
            Career Explorer
          </p>

          <h1 className="mt-2 text-4xl font-bold text-[#2C2C2A]">
            Explore career paths
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-gray-600">
            Discover career options, understand the skills they require,
            and find a structured path to start learning.
          </p>


          {/* Search */}
          <div className="relative mt-8 max-w-2xl">

            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search careers..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white py-4 pl-12 pr-4 outline-none transition focus:border-[#6B9A38]"
            />

          </div>

        </div>

      </section>


      {/* Careers */}
      <section className="py-16">

        <div className="mx-auto max-w-7xl px-6">

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">

            {categories.map((item) => (

              <button
                key={item}
                onClick={() => setCategory(item)}
                className={
                  category === item
                    ? 'rounded-full bg-[#3D5A1E] px-5 py-2 text-sm font-medium text-white'
                    : 'rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-600 transition hover:border-[#6B9A38]'
                }
              >
                {item}
              </button>

            ))}

          </div>


          {/* Number of Results */}
          <p className="mt-8 text-sm text-gray-500">
            {filteredCareers.length} career paths found
          </p>


          {/* Career Cards */}
          {filteredCareers.length > 0 ? (

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {filteredCareers.map((career) => (

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

          ) : (

            <div className="mt-12 rounded-xl bg-gray-50 p-10 text-center">

              <h2 className="font-semibold">
                No careers found
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Try another search or category.
              </p>

            </div>

          )}

        </div>

      </section>

    </div>
  )
}

export default Careers