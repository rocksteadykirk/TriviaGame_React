const Question = ({ question }) => {
    return (
    <>
        <h4>{question}</h4>
        <button className='btn-custom'>Show Answer</button>
    </>
    );
};

export default Question;