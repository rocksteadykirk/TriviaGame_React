import { useState } from 'react';


const PlayerNameForm = ({ dispatch }) => {
    const [newPlayer, setNewPlayer] = useState('');             // to handle state of each new player added
    const inputRegex = /^[A-Za-z]{2,10}$/;                      // Regex to handle form validation: Alphabet Only / At least 3 Characters, At most 10 characters

    function handleSubmit(e) {
        e.preventDefault();                                     // Prevent the default form submission behavior

        if (inputRegex.test(newPlayer)) {                       // Check fo valid input 
            dispatch({
                type: 'ADD_PLAYER',
                payload: newPlayer
            })
            setNewPlayer('');                                    // Reset the newPlayer state to an empty string after submission
        }
    }

    return (
        <>
            <h1>Join Game</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type='text'
                        value={newPlayer}                                       // Bind the input value to the newPlayer state
                        onChange={(e) => setNewPlayer(e.target.value)}          // Update the newPlayer state as the user types
                        placeholder='Enter player name'
                    />
                    <button type='submit'>Add</button>
                    <h6>Player names must consist of alphabetical characters, be at least 3 characters long, and not exceed 10 characters.</h6>
                </div>
            </form>
        </>
    );
};

export default PlayerNameForm;
























