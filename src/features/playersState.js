export const initialState = [];


export const listReducer = (state, action) => {             
    switch (action.type) {  
        case 'ADD_PLAYER':
            return [
                ...state,
                { id: state.length,
                  name: action.payload, 
                  points: 0 
                }
            ];
        default:
            return state;
    }
};

/*
Reducer Function
- takes the current state and an action, and based on the action type, it returns a new state.
- This reducer function will be used by the useReducer hook in Gameboard to track state and perfrom actions updating the state via the dispatch function. 
*/