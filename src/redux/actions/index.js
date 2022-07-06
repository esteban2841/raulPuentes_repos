import {getData} from "../../utils/getPokemons"
export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const FILTER_BY_ID = 'FILTER_BY_ID';



export const getAllPokemons =   () => async (dispatch, getState) => {
  const res = await getData()
  const pokemonFiltered = res[0]
   console.log(pokemonFiltered, "actions pokemon filtrado")
   dispatch({
      type : FILTER_BY_ID,
      payload : pokemonFiltered
   })
   dispatch({
      type : GET_ALL_POKEMONS,
      payload : res
   })
};
export const getPokemonById =   (id) => async (dispatch, getState) => {
   const {pokemons} = getState()
   const pokemonFiltered = [...pokemons].find(p=> p.id == id)
   console.log(pokemonFiltered)
   dispatch({
      type : FILTER_BY_ID,
      payload : pokemonFiltered
   })
};

