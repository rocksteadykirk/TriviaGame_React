const Question = ({ question }) => {
    return (
    <>
        <h1>You are seeing Question component</h1>
        <h4>{question}</h4>
        <button className='btn-custom'>Show Answer</button>
    </>
    );
};

export default Question;