import React, { useEffect, useReducer, useState } from "react";

const Countdown = ({ cookTime, isActive, paused }) => {
  const [resetter, setResetter] = useState(true);
  const initialState = {
    length: cookTime,
    paused: paused,
    isActive: isActive,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "toggle_paused": {
        return { ...state, paused: !state.paused };
      }

      case "reset": {
        if (state.paused === false) {
          return { ...state, paused: !state.paused };
        }
        return {
          ...state,
          length: cookTime,
        };
      }

      case "tick": {
        if (state.paused) {
          return state;
        } else {
          let newState = { ...state, length: state.length - 1 };
          if (newState.length === 0) {
            console.log("zilch");
            action.payload(newState);
          }
          return newState;
        }
      }

      default: {
        return initialState;
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let timerId;
    timerId = setInterval(() => {
      dispatch({
        type: "tick",
        payload: () => {
          clearInterval(timerId);
        },
      });
    }, 1000);
    return function clearTimer() {
      clearInterval(timerId);
    };
  }, [resetter]);

  const handlePause = (e) => {
    dispatch({ type: "toggle_paused" });
  };

  const reset = (e) => {
    setResetter(!resetter);
    return dispatch({ type: "reset" });
  };
  return (
    // <div style={{ display: display }}>
    <div>
      <div>
        {<h3>{state.length}</h3>}
        {/* {state.length > 0 ? <h3>{state.length}</h3> : <h3>TIME TO FLIP!</h3>} */}
      </div>
      <button onClick={handlePause}>Start/Pause</button>
      {state.length === 0 ? <button onClick={reset}>Flip!</button> : null}
      <button>
        <a href="./app">Restart</a>
      </button>
    </div>
  );
};
export default Countdown;
