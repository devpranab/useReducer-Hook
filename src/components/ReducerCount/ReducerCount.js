import React, {useReducer, useState} from 'react';

const initialState = {count: 0};

const reducer = (state, action) => {
    //console.log(state, action);
}    

const ReducerCount = () => {
    const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Use of useReducer hook:</h1>
        </div>
    );
};

export default ReducerCount;