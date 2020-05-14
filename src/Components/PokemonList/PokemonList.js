import "./pokemonList.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    getPokemonDetails,
} from "../../store/actions";

function PokemonList(props) {
    const dispatch = useDispatch();

    // const [pokemon] = useState([{ hp: "", attack: "", type: "", defence: "" }])
    const pokemonList = useSelector(
        ({ pokemonListReducer }) => pokemonListReducer.data
    );


    const renderGroupList = () =>
        pokemonList.map((pokemon, index) => {
            return (
                <li key={index}>
                    <div>{pokemon.name}</div>
                    <div>{pokemon.url}</div>
                    <div>
                        <button className="small">Delete</button>
                    </div>

                </li>
            )
        })



    useEffect(() => {
        let url = "https://pokeapi.co/api/v2/pokemon"
        dispatch(getPokemonDetails(url, 151));
    }, []);

    return (
        <>
            <div className="container primary-container" id="group-list-container">
                <div className="row">
                    <div className="col">
                        <div className="group-list">
                            <ul className="customHead">
                                <li>Name</li>
                                <li>Details</li>
                                <li>Action</li>
                            </ul>
                            <ul className="customBody">

                                {renderGroupList()}
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="btnContainer"><button className="addBtn">Add pokemon</button></div>

            </div>
        </>
    );
}

export { PokemonList };



