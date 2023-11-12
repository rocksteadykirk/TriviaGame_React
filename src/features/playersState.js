export const initialState = {
    listPlayers: [
        { id: 1, name: 'Samantha', pts: 0 },
        { id: 2, name: 'Bryan', pts: 0 },
        { id: 2, name: 'Tammy', pts: 0 }
    ]
};

export const listReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PLAYER':
            return {
                ...state, listPlayers: state.listPlayers.concat([
                    { id: state.listPlayers.length, name: action.payload, points: 0 }
                ])
            };
        default:
            return state;
    }
};