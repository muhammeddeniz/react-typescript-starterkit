import * as React from 'react';

interface Deneme {
    name?: string;
}


const Counter : React.FC<Deneme> = ({name = "muhammed deniz"}) => {
    return(
        <div>
        <h1>{name}</h1>
        </div>
    )
}

export default Counter;