
import { 
    
    FILTER_BY_ID,
    FILTER_NAME,
    GET_ALL_POKEMONS,
    NEW_PAGE,
    PAGINATION,
    
} from "../actions/index";


const initialState = {
    pokemons: [],
    pokemonsSelected: [],
    pokemonsFiltered: [],
    pagination:1,
    filter:"",
};

const rootReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case GET_ALL_POKEMONS :
            return { ...state, pokemons : action.payload }
        case FILTER_BY_ID:
            return { ...state, pokemonsSelected : action.payload }
        case PAGINATION:
            return { ...state, pokemonsFiltered : action.payload }
        case NEW_PAGE:
            return { ...state, pagination : action.payload }
        case FILTER_NAME:
            console.log(action.payload, "entro al reducer")
            return { ...state, filter : action.payload }
        
       default : return state
    };
};

export default rootReducer;
