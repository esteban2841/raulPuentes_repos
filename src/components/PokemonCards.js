import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemons, getPokemonById } from '../redux/actions';
import {capitalize} from "lodash"
import styled from "styled-components"
const StyledContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 60%;
    gap: 40px;
    padding-left: 10px;
    padding-right: 10px;
    
    .cardContainer{
      display: flex;
      flex-direction: column;
      gap:5px;
      align-items: center;
      width: 300px;
      height: 350px;
      border: 1px solid black;
      border-radius: 10px;
      padding: 10px;
    }
    img{
      height: 200px;
    }
`

export default function PokemonCards() {

    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getAllPokemons())
    },[])

    const pokemons = useSelector(state=> state.pokemons)

    const handleClick = (event)=>{
      const pokemonSelected = event.currentTarget.id
      dispatch(getPokemonById(pokemonSelected))
      
    }

  return (
    <StyledContainer >
          {
            pokemons && pokemons.map(pokemon=>{
              return(

                <div id={pokemon.id} className='cardContainer' key={pokemon.id} onClick={handleClick}>
                  <img src={pokemon.img} alt=''/>
                  <p>#{`${pokemon.id}`.padStart(3, 0)}</p>
                  <p>{capitalize(pokemon.name)}</p>
                </div>
              )
            })
          }
    </StyledContainer>
  )
}
