import { BookOpen } from 'lucide-react'

function ResourceCard({ resource }) {

  return (
    <div className="rounded-lg border border-gray-200 p-4">

      <div className="flex gap-3">

        <div className="mt-1 text-[#3D5A1E]">
          <BookOpen size={18} />
        </div>

        <div>

          <h4 className="text-sm font-semibold">
            {resource.title}
          </h4>

          <p className="mt-1 text-xs text-gray-500">
            {resource.provider}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">

            <Badge text={resource.type} />

            <Badge text={resource.cost} />

            <Badge text={resource.language} />

          </div>

        </div>

      </div>

    </div>
  )
}


function Badge({ text }) {
  return (
    <span className="rounded-full bg-[#EFF5E6] px-2.5 py-1 text-xs text-[#3D5A1E]">
      {text}
    </span>
  )
}


export default ResourceCard