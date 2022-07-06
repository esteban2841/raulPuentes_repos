import React from 'react'
import styled from 'styled-components'
import PokemonCards from './PokemonCards'
import PokemonDetails from './PokemonDetails'

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    padding: 20px;
    gap: 20px;
    @media (max-width: 500px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 20px;
    }
`

export default function MainPokemonContainer() {
    

  return (
    <MainContainer>
        <PokemonCards/>
        <PokemonDetails/>
    </MainContainer>
  )
}
