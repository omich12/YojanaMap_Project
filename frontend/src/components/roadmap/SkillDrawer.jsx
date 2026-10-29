import { useState } from 'react'
import {
  CheckCircle2,
  X
} from 'lucide-react'

import ResourceCard from '../resources/ResourceCard'
import ResourceFilters from '../resources/ResourceFilters'


function SkillDrawer({
  skill,
  completed,
  onClose,
  onToggleComplete
}) {

  const [cost, setCost] =
    useState('All')

  const [language, setLanguage] =
    useState('All')

  const [source, setSource] =
    useState('All')


  if (!skill) {
    return null
  }


  const filteredResources =
    skill.resources.filter((resource) => {

      const matchesCost =
        cost === 'All' ||
        resource.cost === cost

      const matchesLanguage =
        language === 'All' ||
        resource.language === language

      const matchesSource =
        source === 'All' ||
        resource.source === source


      return (
        matchesCost &&
        matchesLanguage &&
        matchesSource
      )
    })


  return (
    <div className="fixed inset-0 z-50">

      {/* Background */}
      <div
        className="absolute inset-0 bg-black/30"
        onClick={onClose}
      ></div>


      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full overflow-y-auto bg-white shadow-xl sm:w-[480px]">

        <div className="p-6">

          {/* Close */}
          <div className="flex justify-end">

            <button
              onClick={onClose}
              className="rounded-lg p-2 hover:bg-gray-100"
            >
              <X size={21} />
            </button>

          </div>


          {/* Skill */}
          <span className="text-xs font-semibold uppercase tracking-wide text-[#6B9A38]">
            {skill.type}
          </span>

          <h2 className="mt-2 text-3xl font-bold">
            {skill.title}
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            {skill.description}
          </p>


          {/* Resources */}
          <div className="mt-10">

            <h3 className="text-lg font-semibold">
              Learning Resources
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Choose resources that match how you want to learn.
            </p>


            {/* Filters */}
            <div className="mt-6 rounded-xl bg-[#F8FAF5] p-4">

              <ResourceFilters
                cost={cost}
                setCost={setCost}
                language={language}
                setLanguage={setLanguage}
                source={source}
                setSource={setSource}
              />

            </div>


            {/* Resources */}
            <div className="mt-5 space-y-3">

              {filteredResources.length > 0 ? (

                filteredResources.map(
                  (resource) => (

                    <ResourceCard
                      key={resource.id}
                      resource={resource}
                    />

                  )
                )

              ) : (

                <div className="rounded-lg bg-gray-50 p-5 text-center">

                  <p className="text-sm font-medium">
                    No resources found
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Try changing your filters.
                  </p>

                </div>

              )}

            </div>

          </div>


          {/* Complete */}
          <button
            onClick={onToggleComplete}
            className={
              completed
                ? 'mt-10 flex w-full items-center justify-center gap-2 rounded-lg border border-[#6B9A38] bg-[#EFF5E6] px-5 py-3 font-medium text-[#3D5A1E]'
                : 'mt-10 flex w-full items-center justify-center gap-2 rounded-lg bg-[#3D5A1E] px-5 py-3 font-medium text-white hover:bg-[#6B9A38]'
            }
          >

            <CheckCircle2 size={19} />

            {completed
              ? 'Completed'
              : 'Mark as Complete'
            }

          </button>

        </div>

      </div>

    </div>
  )
}


export default SkillDrawer