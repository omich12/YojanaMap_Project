import { Check } from 'lucide-react'


function QuestionCard({
  question,
  selectedAnswer,
  onSelect
}) {

  return (
    <div>

      <h2 className="text-2xl font-bold text-[#2C2C2A] md:text-3xl">
        {question.question}
      </h2>

      <p className="mt-3 text-gray-500">
        {question.description}
      </p>


      <div className="mt-8 grid gap-3 sm:grid-cols-2">

        {question.options.map((option) => {

          const selected =
            selectedAnswer === option.value


          return (
            <button
              key={option.value}
              onClick={() =>
                onSelect(option.value)
              }
              className={
                selected
                  ? 'flex items-center justify-between rounded-xl border-2 border-[#3D5A1E] bg-[#EFF5E6] p-5 text-left'
                  : 'flex items-center justify-between rounded-xl border-2 border-gray-200 bg-white p-5 text-left transition hover:border-[#6B9A38]'
              }
            >

              <span className="font-medium">
                {option.label}
              </span>


              {selected && (

                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3D5A1E] text-white">

                  <Check size={14} />

                </div>

              )}

            </button>
          )
        })}

      </div>

    </div>
  )
}


export default QuestionCard