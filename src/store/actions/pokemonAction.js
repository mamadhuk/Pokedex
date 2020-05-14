import * as actionTypes from "./actionTypes";

const setPokemon = (data) => ({
    type: actionTypes.SET_POKEMON_List,
    data,
})

export const getPokemonDetails = (url, limit) => (
    dispatch
) => {
    fetch(url + "?" + limit)
        .then((res) => res.json())
        .then(res => dispatch(setPokemon(res.results)))
        .catch((err) => { });
};