import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const PokemonDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
    align-items: flex-start;
    width: 40%;
    gap: 5px;
    border: 1px solid black;

    .pokeImage{
        height: 200px;
    }
    .pokemonInfo{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .types{
        display: flex;
        flex-direction: row;
        gap: 5px;
        align-items: center;
    }
`

export default function PokemonDetails() {

    const pokemon = useSelector(state=> {
        return state.pokemonsFiltered
    })
    if(pokemon){

        return (
          <PokemonDetailsContainer>
              {
                pokemon && 
                <div>
                    <div className='pokemonInfo'>
                        <img className='pokeImage' src={pokemon.img} alt="File not Found"/>
                        <p>#{pokemon.id}</p>
                        <p>{pokemon.name}</p>

                    </div>
                    <h3>Types</h3>
                    <div className='types'>{
                        
                        pokemon.types && pokemon.types.map(t=>{
                            return (
                                <p>{t.name}</p>
                            )
                        })
                    }</div>
                    <h3>Sprites</h3>
                    <div className='sprites'>{
                        
                        pokemon.sprites && pokemon.sprites.map(url=>{
                            return (
                                <img src={url} alt="File not found"/>
                            )
                        })
                    }</div>
                </div>
                  
              }
              
          </PokemonDetailsContainer>
        )
    }

}
