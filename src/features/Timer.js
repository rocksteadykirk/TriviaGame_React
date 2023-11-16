import React, { useState, useEffect } from "react";

const Timer = ({ timerValue }) => {
    const [secondsLeft, setSecondsLeft] = useState(5);
    console.log('This is timer value ', timerValue)
    console.log('This is seconds left', secondsLeft)
    useEffect(() => {
        console.log('use effect seconds left')
        if (secondsLeft === 0) return; // Stop the countdown if secondsLeft reaches 0

        const timeout = setTimeout(() => {
            setSecondsLeft((prevSeconds) => prevSeconds - 1); // Decrement secondsLeft by 1
        }, 1000);

        return () => clearTimeout(timeout); // Cleanup function to clear the timeout

    }, [secondsLeft]); // Re-run the effect whenever secondsLeft changes

    useEffect(() => {
        // Reset the timer when timerValue changes (e.g., when rolling the dice)
        console.log('useEffect timer value')
        setSecondsLeft(timerValue);
    }, [timerValue]);

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
