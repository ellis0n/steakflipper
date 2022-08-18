import React, { useEffect, useReducer, useState } from "react";

const Countdown = ({ cookTime }) => {
  // Resetter keeps track of reset status and is used in  the useEffect depency array below
  const [resetter, setResetter] = useState(false);

  const initialState = {
    length: cookTime,
    paused: true,
    message: "Flip it! ",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      // If pause button pressed:
      case "toggle_paused":
        return { ...state, paused: !state.paused };

      // If flip button pressed:
      case "flip": {
        return {
          ...state,
          paused: false,
          ...state,
          length: initialState.length,
          ...state,
          reset: true,
        };
      }

      // Handles timer decrement and pause
      case "tick": {
        if (state.paused) {
          return state;
        } else {
          let newState = { ...state, length: state.length - 1 };
          if (newState.length === 0) {
            action.payload(newState);
          }
          return newState;
        }
      }

      // Notifies user that the program has finished
      case "change_message": {
        return { ...state, message: "Finished" };
      }

      default: {
        console.log(state.length);
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // Set timer and interval, spreads ar
  useEffect(() => {
    let timer;
    timer = setInterval(() => {
      dispatch({
        type: "tick",
        payload: () => {
          clearInterval(timer);
        },
      });
    }, 1000);
    return function clearTimer() {
      clearInterval(timer);
    };
  }, [resetter]);

  // If pause button pressed
  const handlePause = (e) => {
    dispatch({ type: "toggle_paused" });
  };

  // If flip button pressed
  function flip(e) {
    setResetter(true);
    dispatch({ type: "force_pause" });
    dispatch({ type: "flip" });
    dispatch({ type: "change_message" });
  }

  // Create variables for MM:SS timer display
  let minute = Math.floor(state.length / 60);
  let seconds = state.length % 60;

  return (
    <div>
      <div className="timerDisplay">
        <div className="timerReadout">
          {state.length > 0 ? (
            <div className="timerClock">
              {minute.toString().padStart(2) +
                ":" +
                seconds.toString().padStart(2, "0")}
            </div>
          ) : (
            <div className="timerMessage">{state.message} </div>
          )}
        </div>
      </div>

      {state.length === 0 ? (
        !resetter ? (
          <button className="flip_btn" onClick={flip}>
            Flip!
          </button>
        ) : null
      ) : (
        <button className="pause_btn" onClick={handlePause}>
          {!state.paused ? "Pause" : "Start"}
        </button>
      )}

      <button>
        <a id="restart" href="./app">
          Restart
        </a>
      </button>
    </div>
  );
};
export default Countdown;
