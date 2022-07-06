
let urlPokemons= "https://pokeapi.co/api/v2/pokemon/"

export const getData = async ()=>{
    const fetching = await fetch(urlPokemons);
    const data = await fetching.json();
    const getPokemons = await Promise.all(data.results.map(async pokemon=>{
       const dataFetching = await fetch(pokemon.url)
       const response = await dataFetching.json()
       
       const types = response.types.map(t=>{
          return {name :t.type.name}
      })
      const stats = response.stats.map(t=>{
          return{
              name: t.stat.name,
              value: t.base_stat
          } 
      })

      //hay demasiados movimientos por poquemon entonces solo traere los primeros 10
      const movements = response.moves.map(m=>{
        return {
            name: m.move.name,
        }
      })

      const sprites = Object.values(response.sprites).filter(img=>{
         return typeof img == "string"
    
        })
      
      const imgRender = Object.values(response.sprites.other)
      const lastImageRender = imgRender.length-1

        return({
             id: response.id,
             height: response.height,
             name : response.name,
             img :  imgRender[lastImageRender].front_default,
             types,
             weight : response.weight,
             stats,
             movements: movements.splice(0,5),
             sprites
         })
    
    }))
    return getPokemons
 }