function ResourceFilters({
  cost,
  setCost,
  language,
  setLanguage,
  source,
  setSource
}) {

  return (
    <div className="space-y-5">

      <FilterGroup
        title="Cost"
        options={['All', 'Free', 'Paid']}
        selected={cost}
        onSelect={setCost}
      />

      <FilterGroup
        title="Language"
        options={['All', 'Nepali', 'English']}
        selected={language}
        onSelect={setLanguage}
      />

      <FilterGroup
        title="Source"
        options={['All', 'Local', 'Global']}
        selected={source}
        onSelect={setSource}
      />

    </div>
  )
}


function FilterGroup({
  title,
  options,
  selected,
  onSelect
}) {

  return (
    <div>

      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
        {title}
      </p>


      <div className="flex flex-wrap gap-2">

        {options.map((option) => (

          <button
            key={option}
            onClick={() => onSelect(option)}
            className={
              selected === option
                ? 'rounded-full bg-[#3D5A1E] px-3 py-1.5 text-xs font-medium text-white'
                : 'rounded-full border border-gray-200 px-3 py-1.5 text-xs text-gray-600 hover:border-[#6B9A38]'
            }
          >
            {option}
          </button>

        ))}

      </div>

    </div>
  )
}


export default ResourceFilters