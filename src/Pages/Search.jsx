import React from 'react'

function Search() {
  return (
   <section class="search-section">
  <header>
    <h2>Search</h2>
    <p>Find what you're looking for</p>
  </header>
  
  <form class="search-form" role="search">
    <label for="search-input">Search query:</label>
    <input 
      type="text" 
      id="search-input" 
      name="query" 
      placeholder="Type keywords..." 
      required
    />
    <button type="submit">Search</button>
  </form>

  <div class="search-results">
    <h3>Results</h3>
    <ul>
      <li>No results yet</li>
    </ul>
  </div>
</section>

  )
}

export default Search