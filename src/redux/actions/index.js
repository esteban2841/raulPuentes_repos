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
   dispatch({
      type : PAGINATION,
      payload : applyPagination(getState)
   })
};

const filterText =  (data, value) => {
   console.log(value, data, "action value filter")
   const pokeFiltered = [...data].filter(pokemon=>{
      return pokemon.name.includes(value)
   })
   if( value === "") return data
   else return pokeFiltered
}


function applyPagination(getState){
   const { filter } = getState()
   const { pagination:page, pokemons: data } = getState()
   console.log(filter, "desde apply pagination")
   let pokemones = [...data]
   
   pokemones = filterText(pokemones, filter)
   
   
   let quantityPerPage = 4
    
    const inicio = (page-1) * quantityPerPage
    const fin = page * quantityPerPage
    
    pokemones = pokemones.slice(inicio,fin)

    return pokemones



}

