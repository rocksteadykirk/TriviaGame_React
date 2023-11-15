import React, { useState, useEffect } from "react";



// Define a functional component called CountdownComponent that takes initialSeconds as a prop
const CountdownComponent = ({ initialSeconds }) => {
    const [secondsLeft, setSecondsLeft] = useState(0);       // Initialize secondsLeft to 0 initially
    const [timerStarted, setTimerStarted] = useState(false); // Track whether the timer has been started


// Use the useEffect hook to perform side effects in function components
    useEffect(() => {
        if (!timerStarted || secondsLeft <= 0) return;                       // If secondsLeft is less than or equal to 0, return to exit the function and stop the countdown.

        const timeout = setTimeout(() => {                  // Set up a setTimeout to decrement secondsLeft every 1000 milliseconds (1 second)
            setSecondsLeft(secondsLeft - 1);                // Update secondsLeft by decrementing it by 1
        }, 1000);

        return () => clearTimeout(timeout);                 // Return a cleanup function that clears the timeout to avoid memory leaks
    }, [timerStarted, secondsLeft]);

    const startTimer = () => {
        setSecondsLeft(initialSeconds);
        setTimerStarted(true);                              // Set timerStarted to true when the countdown is explicitly started

    };

    return (
        <div>
            <p>Time: {secondsLeft}</p>
            {/* <button onClick={startTimer}>Start Countdown</button> */}
        </div>
    );
};

export default CountdownComponent;



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
