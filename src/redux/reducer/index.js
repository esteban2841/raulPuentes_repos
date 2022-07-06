
import { 
    
    FILTER_BY_ID,
    GET_ALL_POKEMONS,
    
} from "../actions/index";


const initialState = {
    pokemons: [],
    pokemonsFiltered: [],
};

const rootReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case GET_ALL_POKEMONS :
            return { ...state, pokemons : action.payload }
        case FILTER_BY_ID:
            console.log("FILTER_BY_ID", action)
            return { ...state, pokemonsFiltered : action.payload }
        
       default : return state
    };
};

export default rootReducer;
