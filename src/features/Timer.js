import React, { useState, useEffect } from "react";



// Define a functional component that takes initialSeconds as a prop
const Timer = ({ timerValue }) => {
    const [secondsLeft, setSecondsLeft] = useState(timerValue);       // Initialize secondsLeft to 0 initially
    // const [timerStarted, setTimerStarted] = useState(false); // Track whether the timer has been started


// Use the useEffect hook to perform side effects in function components
    useEffect(() => {
        // if (!timerStarted || secondsLeft <= 0) return            // If secondsLeft is less than or equal to 0, return to exit the function and stop the countdown.
        console.log( 'log', secondsLeft);
        const timeout = setTimeout(() => {                      // Set up a setTimeout to decrement secondsLeft every 1000 milliseconds (1 second)
            setSecondsLeft(secondsLeft - 1);                    // Update secondsLeft by decrementing it by 1
        }, 1000);

        return () => clearTimeout(timeout);                     // Return a cleanup function that clears the timeout to avoid memory leaks
    }, []);

    // const start = () => {
    //     setSecondsLeft(timerValue);
    //     // setTimerStarted(true)
    // };

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
