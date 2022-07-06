import React from 'react'
import styled from 'styled-components'
import PokemonCards from './PokemonCards'
import PokemonDetails from './PokemonDetails'

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`

export default function MainPokemonContainer() {
    

  return (
    <MainContainer>
        <PokemonCards/>
        <PokemonDetails/>
    </MainContainer>
  )
}
