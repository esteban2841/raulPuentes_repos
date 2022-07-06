import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const PokemonDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #191c1f;
    width: 25%;
    gap: 5px;
    border: 1px solid #ffffff;
    border-radius: 10px;
    p{
        line-height: 0%;
        padding: 0;
    }
    h3{
        line-height: 0%;
        padding: 0;
    }
    .container{
        width: 100%;
        padding: 10px;
    }
    .pokeImage{
        height: 125px;
        
    }
    .pokemonInfo{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
    }
    .movements{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
        width: 100%;
    }
    .types{
        display: flex;
        flex-direction: row;
        gap: 5px;
        align-items: center;
        width: 100%;
    }
    .sprites{
        flex-wrap: wrap;
        width: 100%;
    }
    @media (max-width: 910px) {
       width: 40%;
    }
    @media (max-width: 500px) {
       width: 100%;
    }
`

export default function PokemonDetails() {

    const pokemon = useSelector(state=> {
        return state.pokemonsSelected
    })
    if(pokemon){

        return (
          <PokemonDetailsContainer>
              {
                pokemon && 
                <div className='container'>
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
                    <h3>Peso</h3>
                    <p>{pokemon.weight}</p>
                    <h3>Sprites</h3>
                    <div className='sprites'>{
                        
                        pokemon.sprites && pokemon.sprites.map(url=>{
                            return (
                                <img src={url} alt="File not found"/>
                            )
                        })
                    }</div>
                    <h3>Movements</h3>
                    <div className='movements'>{
                        
                        pokemon.movements && pokemon.movements.map(m=>{
                            return (
                                <p>{m.name}</p>
                                )
                            })
                        }</div>
                </div>
                  
              }
              
          </PokemonDetailsContainer>
        )
    }

}
