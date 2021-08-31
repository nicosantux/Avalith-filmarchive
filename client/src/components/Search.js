import React from 'react'
import { SearchContainer, SearchInput, Icon } from 'elements/search'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = ({ search, setSearch }) => {
  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <SearchContainer>
      <SearchInput
        name="search"
        placeholder="Search"
        type="text"
        value={search}
        onChange={handleChange}
      />
      <Icon icon={faSearch} />
    </SearchContainer>
  )
}

export default Search
