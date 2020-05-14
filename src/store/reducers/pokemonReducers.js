import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    data: [],
};

const pokemonListReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SET_POKEMON_List:
            return {
                ...state,
                data: [...action.data],
            };
        default:
            return state;
    }
};

export { pokemonListReducer };