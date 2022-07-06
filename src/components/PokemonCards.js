import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemons, getPokemonById } from '../redux/actions';
import {capitalize} from "lodash"
import styled from "styled-components"
const StyledContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 65%;
    gap: 20px;
    
    .cardContainer{
      display: flex;
      flex-direction: column;
      gap:5px;
      align-items: center;
      width: 350px;
      height: 250px;
      background-color: #191c1f;
      border: 1px solid #ffffff;
      border-radius: 10px;
      padding: 10px;
    }
    .cardContainer:hover .pokeImage{
        
        transform: scale(1.1);
        
    }
    img{
      height: 150px;
    }
    @media (max-width: 1230px) {
       .cardContainer{
        width: 300px;
        height: 250px;
       }   
    }
    @media (max-width: 1100px) {
       .cardContainer{
        width: 250px;
        height: 200px;
       }  
       img{
        height: 100px;
        } 
    }
    @media (max-width: 910px) {
       width: 50%;
    }
    @media (max-width: 500px) {
       width: 100%;

       .cardContainer{
        width: 95%;
        height: 200px;
       }  
       img{
        height: 100px;
        } 
    }
`

export default function PokemonCards() {

    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getAllPokemons())
    },[])

    const pokemons = useSelector(state=> state.pokemonsFiltered)

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
                  <img className="pokeImage"src={pokemon.img} alt=''/>
                  <p>#{`${pokemon.id}`.padStart(3, 0)}</p>
                  <p>{capitalize(pokemon.name)}</p>
                </div>
              )
            })
          }
    </StyledContainer>
  )
}
