import { useState, useEffect } from 'react';
import Answer from './Answer';

const Question = ({ question, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    console.log('showAnswer', showAnswer);
    console.log('question', question)
    function handleShowAnswer() {
        setShowAnswer(true);
    };

    useEffect(() => {
        setShowAnswer(false);
    },[question])


    return (
        <>
            <h4>{question}</h4>
            <button className='btn-custom' onClick={handleShowAnswer}>Show Answer</button>
            {showAnswer ? <Answer answer={answer} /> : null}
        </>
    );
};

export default Question;