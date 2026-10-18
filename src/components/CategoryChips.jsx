const CATEGORIES = ['Music', 'Sports', 'Arts & Theatre', 'Film', 'Miscellaneous']

function CategoryChips({ selected, onSelect }) {
  return (
    <div className="chip-row">
      <button
        type="button"
        className={selected === '' ? 'chip chip-active' : 'chip'}
        onClick={() => onSelect('')}
      >
        All
      </button>
      {CATEGORIES.map((name) => (
        <button
          key={name}
          type="button"
          className={selected === name ? 'chip chip-active' : 'chip'}
          onClick={() => onSelect(name)}
        >
          {name}
        </button>
      ))}
    </div>
  )
}

export default CategoryChips