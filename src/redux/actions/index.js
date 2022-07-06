import {getData} from "../../utils/getPokemons"
export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const FILTER_BY_ID = 'FILTER_BY_ID';
export const NEW_PAGE = 'NEW_PAGE';
export const PAGINATION = 'PAGINATION';
export const FILTER_NAME = 'FILTER_NAME';



export const getAllPokemons =   () => async (dispatch, getState) => {
  const res = await getData()
  
   const pokemonFiltered = res[0]
   dispatch({
      type : FILTER_BY_ID,
      payload : pokemonFiltered
   })
   dispatch({
      type : GET_ALL_POKEMONS,
      payload : res
   })
   dispatch({
      type : PAGINATION,
      payload : applyPagination(getState)
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
export const getPage = (page) => async (dispatch, getState) => {

   dispatch({
      type : NEW_PAGE,
      payload : page
   })
   dispatch({
      type : PAGINATION,
      payload : applyPagination(getState)
   })


};
export const filterByName = (pokemonName) => async (dispatch, getState) => {

   
   dispatch({
      type : FILTER_NAME,
      payload : pokemonName
   })


};

const filterText = (data, value) => {
   console.log(value, "action value filter")
   if( value === "") return data
   return [...data].filter(p=> p.name === value)
}


function applyPagination(getState){

   const { pagination:page, pokemons: data, filter} = getState()

   let pokemones = [...data]
   
   pokemones = filterText(pokemones, filter)
   
   
   let quantityPerPage = 4
    
    const inicio = (page-1) * quantityPerPage
    const fin = page * quantityPerPage
    
    pokemones = pokemones.slice(inicio,fin)

    return pokemones



}

