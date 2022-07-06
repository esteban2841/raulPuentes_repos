import React, { useState } from 'react'
import styled from 'styled-components'

const SearchBarContainer = styled.div`
  width: 680px;
  padding: 20px;
  input{
    width: 100%;
  }
`

export default function SearchBar() {
    const [searchInput, setSearchInput] = useState("")

    function handleInputChange(e){
        const search = e.target.value
        setSearchInput(search)
    }
  return (
    <SearchBarContainer>
      <input
          onChange={(e)=>handleInputChange(e)}
          type="search"
          placeholder='Search...'
          name='searchInput'
      />

    </SearchBarContainer>
  )
}
