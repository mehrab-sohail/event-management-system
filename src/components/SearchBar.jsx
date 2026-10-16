import { useState } from 'react'

function SearchBar({ onSearch }) {
  const [text, setText] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    onSearch(text)
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search events, artists, venues"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar