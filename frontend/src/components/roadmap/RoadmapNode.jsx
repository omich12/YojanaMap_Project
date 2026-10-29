import { Check } from 'lucide-react'

function RoadmapNode({
  skill,
  selected,
  completed,
  onClick
}) {

  function getTypeStyle() {

    if (skill.type === 'required') {
      return 'border-[#3D5A1E]'
    }

    if (skill.type === 'recommended') {
      return 'border-[#F07B5A]'
    }

    return 'border-gray-300'
  }


  return (
    <button
      onClick={onClick}
      className={`
        relative w-64 rounded-xl border-2 px-5 py-4
        text-left transition
        hover:-translate-y-1 hover:shadow-md

        ${getTypeStyle()}

        ${
          selected
            ? 'bg-[#FFF3EE]'
            : completed
            ? 'bg-[#EFF5E6]'
            : 'bg-white'
        }
      `}
    >

      <div className="flex items-center justify-between gap-4">

        <div>

          <span className="font-medium text-[#2C2C2A]">
            {skill.title}
          </span>

          <p className="mt-1 text-xs capitalize text-gray-400">
            {skill.type}
          </p>

        </div>


        {completed && (

          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#6B9A38] text-white">
            <Check size={14} />
          </div>

        )}

      </div>

    </button>
  )
}

export default RoadmapNode