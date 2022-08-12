import React, { useEffect, useReducer } from "react";
import Conversion from "./Conversion";

const Countdown = ({ cookTime }) => {
  const initialState = {
    length: cookTime,
    paused: false,
    flip: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "toggle_paused": {
        return { ...state, paused: !state.paused };
      }

      case "tick": {
        if (state.paused) {
          return state;
        } else {
          let newState = { ...state, length: state.length - 1 };
          if (newState.length === 0) {
            action.payload(newState);
          }
          if (newState.length === 0 && state.flip) {
            newState.length = cookTime;
          }
          return newState;
        }
      }

      case "toggle_flip": {
        console.log("Toggle Flip");
        console.log(state);
        return { ...state, length: cookTime, flip: !state.flip };
      }

      default: {
        return state;
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
  }, []);

  const handlePause = (e) => {
    dispatch({ type: "toggle_paused" });
  };

  const handleFlip = (e) => {
    dispatch({ type: "toggle_flip" });
  };

  return (
    <div>
      <div>
        {state.length > 0 ? (
          <h3>
            <Conversion cookTime={initialState.length} />
            {state.length}
          </h3>
        ) : (
          <h3>TIME TO FLIP!</h3>
        )}
      </div>
      <button onClick={handlePause}>Start/Stop</button>
      <button>
        <a href="./app">Restart</a>
      </button>
      {state.length === 0 ? <button onClick={handleFlip}>Flip!</button> : null}
    </div>
  );
};
export default Countdown;
