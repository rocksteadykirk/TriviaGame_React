import { Col, Row } from 'reactstrap';
import Player from './Player';

// PlayersList receives its props from the parent component GameBoard
// Allows us to pass on state to other components by receiving listPlayers as a prop which has the value of state as defined in GameBoard.
const PlayersList = ({ listPlayers }) => {
    return (
        <Row>
            <Col className='player-list m-2'>
                <Row>
                    <h2>Players</h2>
                </Row>
                {listPlayers.map((player, index) => (
                    <Player key={index} player={player} />
                ))}
            </Col>
        </Row>
    )
};

export default PlayersList;