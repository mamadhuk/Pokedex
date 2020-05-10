import "./pokemonList.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    getPokemonDetails,
} from "../../store/actions";

function Main(props) {
    const dispatch = useDispatch();
    const pokemonList = useSelector(
        ({ pokemonReducers }) => pokemonReducers.data
    );

    useEffect(() => {
        // dispatch(getPokemonDetails(axiosGetGroupList));

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

                                {/* {renderGroupList()} */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export { Main as PokemonList }



