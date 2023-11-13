import { useReducer } from "react";
import { initialState } from "../features/playersState";
import { listReducer } from "../features/playersState";
import PlayerNameForm from "../features/PlayerNameForm";
import PlayersList from "../features/PlayersList";

const GameBoard = () => {
    const [state, dispatch] = useReducer(listReducer, initialState);
    const [listPlayers] = state;

    return (
        <>
            <h1>You are seeing the GameBoard component</h1>
            <PlayerNameForm dispatch={dispatch} />
            <PlayersList listPlayers={listPlayers} />
        </>
    );
};

export default GameBoard;
