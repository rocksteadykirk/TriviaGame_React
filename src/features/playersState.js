export const initialState = [];

export const listReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PLAYER':
            return [
                ...state, state.concat([
                    { id: state.length, name: action.payload, points: 0 }
                ])
            ];
        default:
            return state;
    }
};