import * as actionTypes from "./actionTypes";

const setPokemon = (data) => ({
    type: actionTypes.SET_POKEMON_List,
    data,
})

export const getPokemonDetails = (axiosInstance) => (
    dispatch
) => {
    axiosInstance({
        method: "GET",
        data: {}
    })
        .then((res) => {
            dispatch(setPokemon(res.data));
        })
        .catch((err) => { });
};