import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

import { roadmaps } from '../data/roadmaps'

import RoadmapNode from '../components/roadmap/RoadmapNode'
import RoadmapConnector from '../components/roadmap/RoadmapConnector'
import SkillDrawer from '../components/roadmap/SkillDrawer'


function Roadmap() {

  const { slug } = useParams()

  const roadmap = roadmaps[slug]

  const [selectedSkill, setSelectedSkill] =
    useState(null)

  const [completedSkills, setCompletedSkills] =
    useState([])


  if (!roadmap) {

    return (
      <div className="mx-auto max-w-7xl px-6 py-20">

        <h1 className="text-3xl font-bold">
          Roadmap not found
        </h1>

        <Link
          to="/careers"
          className="mt-5 inline-block text-[#3D5A1E]"
        >
          Explore careers
        </Link>

      </div>
    )
  }


  const allSkills =
    roadmap.sections.flatMap(
      (section) => section.skills
    )


  function toggleComplete(skillId) {

    if (completedSkills.includes(skillId)) {

      setCompletedSkills(
        completedSkills.filter(
          (id) => id !== skillId
        )
      )

    } else {

      setCompletedSkills([
        ...completedSkills,
        skillId
      ])

    }
  }


  const progress = Math.round(
    (completedSkills.length / allSkills.length) * 100
  )


  return (
    <div className="min-h-screen bg-[#F8FAF5]">

      {/* Header */}
      <section className="border-b border-gray-200 bg-white">

        <div className="mx-auto max-w-7xl px-6 py-10">

          <Link
            to={`/careers/${slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#3D5A1E]"
          >
            <ArrowLeft size={17} />
            Career Overview
          </Link>


          <div className="mt-7 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <p className="text-sm font-semibold uppercase tracking-wide text-[#6B9A38]">
                Career Roadmap
              </p>

              <h1 className="mt-2 text-4xl font-bold">
                {roadmap.title}
              </h1>

              <p className="mt-3 max-w-2xl text-gray-600">
                {roadmap.description}
              </p>

            </div>


            {/* Progress */}
            <div className="w-full md:w-64">

              <div className="mb-2 flex justify-between text-sm">

                <span className="text-gray-500">
                  Progress
                </span>

                <span className="font-semibold text-[#3D5A1E]">
                  {progress}%
                </span>

              </div>

              <div className="h-2 overflow-hidden rounded-full bg-gray-200">

                <div
                  className="h-full rounded-full bg-[#6B9A38] transition-all"
                  style={{
                    width: `${progress}%`
                  }}
                ></div>

              </div>

            </div>

          </div>


          {/* Legend */}
          <div className="mt-8 flex flex-wrap gap-5 text-sm">

            <Legend
              color="bg-[#3D5A1E]"
              text="Required"
            />

            <Legend
              color="bg-[#F07B5A]"
              text="Recommended"
            />

            <Legend
              color="bg-gray-300"
              text="Optional"
            />

          </div>

        </div>

      </section>


      {/* Roadmap */}
      <section className="py-16">

        <div className="mx-auto max-w-5xl px-6">

          <div className="flex flex-col items-center">

            <div className="mb-8 rounded-full bg-[#3D5A1E] px-5 py-2 text-sm font-semibold text-white">
              START HERE
            </div>


            {roadmap.sections.map(
              (section, sectionIndex) => (

                <div
                  key={section.id}
                  className="flex w-full flex-col items-center"
                >

                  {/* Section Heading */}
                  <div className="mb-6 text-center">

                    <p className="text-xs font-semibold uppercase tracking-widest text-[#6B9A38]">
                      Stage {sectionIndex + 1}
                    </p>

                    <h2 className="mt-1 text-xl font-bold">
                      {section.title}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      {section.description}
                    </p>

                  </div>


                  {/* Skills */}
                  <div className="flex flex-col items-center">

                    {section.skills.map(
                      (skill, skillIndex) => {

                        const completed =
                          completedSkills.includes(
                            skill.id
                          )

                        return (
                          <div
                            key={skill.id}
                            className="flex flex-col items-center"
                          >

                            <RoadmapNode
                              skill={skill}
                              selected={
                                selectedSkill?.id ===
                                skill.id
                              }
                              completed={completed}
                              onClick={() =>
                                setSelectedSkill(skill)
                              }
                            />


                            {skillIndex <
                              section.skills.length -
                              1 && (
                                <RoadmapConnector />
                              )}

                          </div>
                        )
                      }
                    )}

                  </div>


                  {/* Section Connector */}
                  {sectionIndex <
                    roadmap.sections.length - 1 && (

                      <div className="my-8 h-12 w-px bg-gray-300"></div>

                    )}

                </div>
              )
            )}


            <div className="mt-8 rounded-full border border-[#6B9A38] bg-[#EFF5E6] px-5 py-2 text-sm font-semibold text-[#3D5A1E]">
              CAREER READY
            </div>

          </div>

        </div>

      </section>


      <SkillDrawer
        key={selectedSkill?.id || 'no-skill'}
        skill={selectedSkill}
        completed={
          selectedSkill
            ? completedSkills.includes(
              selectedSkill.id
            )
            : false
        }
        onClose={() =>
          setSelectedSkill(null)
        }
        onToggleComplete={() => {
          if (selectedSkill) {
            toggleComplete(selectedSkill.id)
          }
        }}
      />

    </div>
  )
}


function Legend({ color, text }) {

  return (
    <div className="flex items-center gap-2">

      <span
        className={`h-3 w-3 rounded-full ${color}`}
      ></span>

      <span className="text-gray-600">
        {text}
      </span>

    </div>
  )
}


export default Roadmap