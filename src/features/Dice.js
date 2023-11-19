import { useState } from "react";
import Timer from "./Timer";
import Question from "./Question";

const Dice = ({ trivia }) => {
    const [questionIdx, setTriviaQuestion] = useState(0);
    const [dice1, setDice1] = useState(0);
    const [dice2, setDice2] = useState(0);
    const timerValue = (dice1 + dice2);
    // console.log('timer', timerValue)

    const rollDice = () => {
        const roll1 = Math.floor(Math.random() * 6) + 1;
        const roll2 = Math.floor(Math.random() * 6) + 1;
        setDice1(roll1);
        setDice2(roll2);

        if (questionIdx < trivia.length - 1) {
            setTriviaQuestion(questionIdx + 1)
        }
        // console.log('trivia length ', trivia.length)
        // console.log('question index ', questionIdx)
    };

    return (
        <>
            <div>
                <button onClick={rollDice} className='btn-custom'>Roll Dice!</button>
            </div>
            <div>
                <span className={`dice dice-${dice1}`} />
                <span className={`dice dice-${dice2}`} />
            </div>
            <Timer timerValue={timerValue} />
            {Boolean(dice1) &&
                <Question question={trivia[questionIdx].question.text} answer={trivia[questionIdx].correctAnswer} />
            }
        </>
    );
};

export default Dice;