
const Player = ({ player }) => {              // receives (player as a prop) via the playersList component which defines player as an object from listPlayers which has the properties of id, name and points.
    return (                                  // Having received state through the prop player. Call on the properties of player to be displayed below.
        <div>
           {player.name}
           {player.points}
        </div>
    );
};

export default Player;
