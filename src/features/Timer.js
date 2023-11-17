import React, { useState, useEffect } from "react";

const Timer = ({ timerValue }) => {
    const [secondsLeft, setSecondsLeft] = useState(timerValue);
    console.log('the whole thing');

    useEffect(() => {
        console.log('seconds left', secondsLeft);
        if (secondsLeft === 0) return; // Stop the countdown when secondsLeft reaches 0

        const timeOut = setTimeout(() => {
            setSecondsLeft(secondsLeft - 1); // Decrement secondsLeft by 1
        }, 1000);

        return () => clearTimeout(timeOut);

    }, [secondsLeft]); // Re-run the effect whenever secondsLeft changes

    useEffect(() => {
        setSecondsLeft(timerValue);
    }, [timerValue]); //use to re-render the Timer component when the prop value change - Timer component will not be automatically re-rendered when prop value from the Dice component change.

    return (
        <div>
            <p>Time: {secondsLeft}</p>
        </div>
    );
};

export default Timer;




/*

The useEffect hook is used to perform side effects in function components. 
It takes a function as its first argument and an array of dependencies as its second argument.


setTimeout is a function provided by the JavaScript runtime environment, typically found in web browsers. 
It is a standard part of the JavaScript language and is used for scheduling the execution of a function or 
evaluating an expression after a specified period of time.


Dependency Array [secondsLeft]:
The dependency array [secondsLeft] specifies that the effect should re-run whenever the value of secondsLeft changes.
This ensures that the timeout is cleared and set again if secondsLeft changes during the component's lifecycle.

*/
