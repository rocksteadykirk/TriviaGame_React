import { Col, Row } from "reactstrap";

const Player = ({ player }) => {              // receives (player as a prop) via the playersList component which defines player as an object from listPlayers which has the properties of id, name and points.
    return (                                  // Having received state through the prop player. Call on the properties of player to be displayed below.
        <Row>
            <Col className='player-details m-1 p-2 h6'>
                <Row>
                    <Col>{player.name}</Col>
                </Row>
                <Row className='points-style fw-bold'>
                    <Col>{player.points} pts</Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Player;
