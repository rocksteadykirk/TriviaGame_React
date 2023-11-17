import { useState } from 'react';

const Answer = ({ answer }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const handleClick = () => {
        setShowAnswer(true);
    };

    return (
        <>
            <h1>You are seeing the Answer component</h1>
            <button className='btn-custom' onClick={handleClick} >Show Answer </button>
            {showAnswer ? <h4>{answer}</h4> : null}
        </>
    );
}

export default Answer;

/*
Why was the show answr button originally placed in the Question component?

Still Fuzzy: How to pass on the action of an onClick event from a sibling component 
so that it triggers an action in a different sibling componenent. Must I use a reducer for that functionality?
*/