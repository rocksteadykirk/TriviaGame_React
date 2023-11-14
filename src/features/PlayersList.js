import Player from './Player';

// PlayersList receives its props from the parent component GameBoard
// Allows us to pass on state to other components by receiving listPlayers as a prop which has the value of state as defined in GameBoard.
const PlayersList = ({ listPlayers }) => {
    return (
        <>
            <h1> You are seeing the PlayersList component</h1>
            <h2>Players:</h2>
            <ol>
                {listPlayers.map((player, index) => (
                    <Player key={index} player={player} />
                ))}
            </ol>
        </>
    )
};

export default PlayersList;