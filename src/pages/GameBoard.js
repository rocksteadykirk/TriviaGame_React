import {useContext, useState } from "react";
import { Col, Row, Container } from "reactstrap";
import PlayerNameForm from "../features/PlayerNameForm";
import PlayersList from "../features/PlayersList";
import Dice from "../features/Dice";
import { stateContext } from "../features/playersState";

const GameBoard = ({ trivia }) => {
    const [gameStarted, setGameStarted] = useState(false);
    const [state, dispatch] = useContext(stateContext);

    function startGame() {
        if(state.length < 2) {
            alert('You need at least 2 players to start the game!');
        } else {
            setGameStarted(true);
            dispatch({
                type: 'IS_PLAYING',
                payload: 0
            });
        }        
    }

    return (
       
        <Container fluid className='game-board'>
            <Row>
                <Col sm={3}>
                    <PlayersList listPlayers={state} />
                </Col>
                <Col sm={9}>
                    <Row >
                        <Col className='fw-bold text-white m-4 fs-1 text-center'>
                            DiceQuizz Trivia
                        </Col>
                    </Row>
                    <Row>
                        <Col className='trivia-block bg-white rounded-4 m-2 p-4 text-center'>
                            <Row>
                                <Col className="p-5">
                                    {!gameStarted &&
                                        <PlayerNameForm/>
                                    }

                                    {gameStarted
                                        && <Dice trivia={trivia} />
                                    }
                                </Col>
                            </Row>
                            {!gameStarted &&
                                <Row>
                                    <Col>
                                        <button onClick={startGame} className='btn-custom'>Ready</button>
                                    </Col>
                                </Row>
                            }
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default GameBoard;

/*
- useReducer hook is used to manage the state of the component and pass state to child components.
- useReducer takes two arguments: a reducer function (listReducer in this case) and an initial state (initialState).
  both listReducer and initialState defined in playersState.js.
  It returns an array with two elements:
  state: The current state of the component, initialized with initialState(which is defined in playersState.js).
  dispatch: A function used to dispatch actions to update the state. dispatch receives it's type specification from 
            from the reducer function defined in playersState and it's paylload and actual action is determined by 
            the function it is called in. In this case PlayersNameForm.
*/