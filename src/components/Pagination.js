import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getPage } from '../redux/actions'

const PaginationContainer = styled.div`
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
    justify-content: space-between;
    width: 99%;
    margin-top: 5px;
    button{
        color: white;
        background-color: blue;
        border-style: none;
        padding: 10px;
        border-radius: 4px;
        height: 40px;
        width: 100px;

    }
    
`

export default function Pagination() {
    
    const dispatch = useDispatch()
    const {pagination, pokemons} = useSelector((state) => state)
    const page = pagination
    const quantityPerPage = 4
    const maxPage = pokemons.length / quantityPerPage
    

    const handlePrev = ()=>{
        let newPage
        if(page<=1) newPage = 1
        else newPage = page -1 

        dispatch(getPage(newPage))
    }
    const handleNext = ()=>{
        let newPage
        if(page>=maxPage) newPage = 1
        else newPage = page +1 
        
        dispatch(getPage(newPage))
    }

  return (
    <PaginationContainer>
        <button onClick={handlePrev}>{`${"< Anterior"}`}</button>
        <button onClick={handleNext}>{`${"Siguiente >"}`}</button>
    </PaginationContainer>
  )
}
