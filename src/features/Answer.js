import { useContext } from 'react';
import { stateContext } from './playersState';

const Answer = ({ answer }) => {
    const [state,dispatch] = useContext(stateContext);

    function nextPlayer() {
        //use state from context to get the id of the user currently playing
        //player object isPlaying property is true
        const isPlaying = state.find((player) => player.isPlaying === true).id;
        const nextPlayer = isPlaying + 1;

        dispatch({
            type: 'RESET_IS_PLAYING'
        });

        if(nextPlayer < state.length) {
            dispatch({
                type: 'IS_PLAYING',
                payload: nextPlayer
            });
        } else {
            dispatch({
                type: 'IS_PLAYING',
                payload: 0
            });
        }

        console.log('next player ',nextPlayer);
    }
    ////////////////Working
    function addPoints() {
        dispatch({
            type: 'ADD_POINTS'
        });

        nextPlayer()
    }
    ////////////////Working

    return (
        <>
            <h4>{answer}</h4>
            <button className='btn-custom'onClick={addPoints} >Right, and On Time</button>{' '}
            <button className='btn-custom' onClick={nextPlayer}>Whoops!</button>
        </>
    );
}

export default Answer;

/*
Why was the show answr button originally placed in the Question component?

Still Fuzzy: How to pass on the action of an onClick event from a sibling component 
so that it triggers an action in a different sibling componenent. Must I use a reducer for that functionality?
*/