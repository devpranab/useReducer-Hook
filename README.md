# useReducer() Hook
The useReducer Hook is used to store and update states, just like the useState Hook. It accepts a reducer function as its first parameter and the initial state as the second.  
Simple uses of Redux which is built-in of React.  

 - A simple introduction of useReducer hook
 - Use useReducer for a simple case
 - useReducer with collection
 - useReducer with action and payload (useRef())

 https://beta.reactjs.org/reference/react/useReducer  
 ```js
 import { useReducer } from 'react';

function reducer(state, action) {
  if (action.type === 'incremented_age') {
    return {
      age: state.age + 1
    };
  }
  throw Error('Unknown action.');
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <>
      <button onClick={() => {
        dispatch({ type: 'incremented_age' })
      }}>
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}
```