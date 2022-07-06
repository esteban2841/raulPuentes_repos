import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { filterByName } from '../redux/actions';

const SearchBarContainer = styled.div`
  width: 50%;
  padding-inline: 20px;
  margin: 0;
  margin-top: 10px;
  margin-right: 10px;
  input{
    width: 100%;
    border-style: none;
    height: 25px;
    border-radius: 5px;
  }
  @media (max-width: 800px) {
    width: 90%;
    margin-right: 20px;
  }
`

export default function SearchBar() {
    const [searchInput, setSearchInput] = useState("")
    const dispatch = useDispatch()


    function handleInputChange(e){
        const search = e.target.value
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
