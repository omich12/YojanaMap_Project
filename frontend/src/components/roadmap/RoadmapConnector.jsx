import { ChevronDown } from 'lucide-react'

function RoadmapConnector() {
  return (
    <div className="flex flex-col items-center">

      <div className="h-8 w-px bg-gray-300"></div>

      <ChevronDown
        size={16}
        className="-mt-1 text-gray-400"
      />

    </div>
  )
}

export default RoadmapConnector