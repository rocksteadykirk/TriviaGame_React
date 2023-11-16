import { useReducer, useState } from "react";
import { initialState } from "../features/playersState";
import { listReducer } from "../features/playersState";
import PlayerNameForm from "../features/PlayerNameForm";
import PlayersList from "../features/PlayersList";
import Dice from "../features/Dice";
import Question from "../features/Question";


const GameBoard = ({ trivia }) => {
    const [state, dispatch] = useReducer(listReducer, initialState);
    const [questionIdx, setTriviaQuestion] = useState(0);

    return (
        <>
            <h1>You are seeing the GameBoard component</h1>
            <PlayerNameForm dispatch={dispatch} />
            <PlayersList listPlayers={state} />
            <Dice />
            <Question question={trivia[questionIdx].question.text}/>
        </>
    );
};

export default GameBoard;


/*
- useReducer hook is used to manage the state of the component and pass state to child components.
- useReducer takes two arguments: a reducer function (listReducer in this case) and an initial state (initialState).
  both listReducer and initialState defined in playersState.js.
  It returns an array with two elements:
  state: The current state of the component, initialized with initialState(which is defined in playersState.js).
  dispatch: A function used to dispatch actions to update the state. dispatch receives it's type specification from 
            from the reducer function defined in playersState and it's paylload and actual action is determined by 
            the function it is called in. In this case PlayersNameForm.
*/