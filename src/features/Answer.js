import { useState } from 'react';

const Answer = ({ answer }) => {

    return (
        <>
            <h4>{answer}</h4>
        </>
    );
}

export default Answer;

/*
Why was the show answr button originally placed in the Question component?

Still Fuzzy: How to pass on the action of an onClick event from a sibling component 
so that it triggers an action in a different sibling componenent. Must I use a reducer for that functionality?
*/