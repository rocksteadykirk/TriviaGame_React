import { useReducer, useState } from "react";
import { initialState } from "../features/playersState";
import { listReducer } from "../features/playersState";
import { Col, Row, Container } from "reactstrap";
import PlayerNameForm from "../features/PlayerNameForm";
import PlayersList from "../features/PlayersList";
import Dice from "../features/Dice";
import Question from "../features/Question";

const GameBoard = ({ trivia }) => {
    const [state, dispatch] = useReducer(listReducer, initialState);
    const [questionIdx, setTriviaQuestion] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);

    function startGame() {
        if(state.length < 2) {
            alert('You need at least 2 players to start the game!');
        } else {
            setGameStarted(true);
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
                                        <PlayerNameForm dispatch={dispatch} />
                                    }

                                    {gameStarted
                                        && <Dice />
                                       /*  && <Question question={trivia[questionIdx].question.text} /> */
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