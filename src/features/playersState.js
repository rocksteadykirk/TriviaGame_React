import { createContext } from "react";

export const initialState = [];

export const listReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PLAYER':
            return [
                ...state,
                {
                    id: state.length,
                    name: action.payload,
                    points: 0,
                    isPlaying: false
                }
            ];
        case 'RESET_IS_PLAYING':
            return state.map(({ id, name, points }) => ({
                id: id, name: name, points: points, isPlaying: false
            }));
        case 'IS_PLAYING':
            Object.assign(state[action.payload], { isPlaying: true });
            return state;
        default:
            return state;
    }
};

export const stateContext = createContext();

/*
Reducer Function
- takes the current state and an action, and based on the action type, it returns a new state.
- This reducer function will be used by the useReducer hook in Gameboard to track state and perfrom actions updating the state via the dispatch function. 
*/