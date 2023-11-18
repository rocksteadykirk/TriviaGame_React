import { useState } from 'react';
import Answer from './Answer';

const Question = ({ question, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    function handleShowAnswer() {
        setShowAnswer(true);
    };

    return (
        <>
            <h4>{question}</h4>
            <button className='btn-custom' onClick={handleShowAnswer}>Show Answer</button>
            {showAnswer ? <Answer answer={answer} /> : null}
        </>
    );
};

export default Question;