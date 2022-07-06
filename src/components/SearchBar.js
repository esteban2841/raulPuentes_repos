import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { filterByName } from '../redux/actions';

const SearchBarContainer = styled.div`
  width: 680px;
  padding: 20px;
  input{
    width: 100%;
  }
`

export default function SearchBar() {
    const [searchInput, setSearchInput] = useState("")
    const dispatch = useDispatch()


    function handleInputChange(e){
        const search = e.target.value
        console.log(search)
        dispatch(filterByName(search))
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
