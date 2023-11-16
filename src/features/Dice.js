import { useState } from "react";
import Timer from "./Timer";

const Dice = () => {
    const [dice1, setDice1] = useState(0);
    const [dice2, setDice2] = useState(0);
    // const [timerValue, setTimerValue] = useState(dice1 + dice2);
    const timerValue = dice1 + dice2;
    console.log(timerValue)

    const rollDice = () => {
        const roll1 = Math.floor(Math.random() * 6) + 1;
        const roll2 = Math.floor(Math.random() * 6) + 1;
        setDice1(roll1);
        setDice2(roll2);
        // setTimerValue(roll1 + roll2);
    };

    

    return (
        <>
            <h1>You are seeing the dice component</h1>
            <div>
                <button onClick={rollDice}>Roll Dices!</button>
            </div>
            <div>
                <span className={`dice dice-${dice1}`} />
                <span className={`dice dice-${dice2}`} />
            </div>
            <Timer timerValue={timerValue}/>

        </>
    );
};

export default Dice;