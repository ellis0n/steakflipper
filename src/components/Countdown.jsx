import React, { useEffect, useReducer, useState } from "react";

const Countdown = ({ cookTime }) => {
  // Resetter keeps track of reset status and is used in  the useEffect depency array below
  const [resetter, setResetter] = useState(false);

  const initialState = {
    length: cookTime,
    paused: true,
    reset: false,
    message: "Flip it! 🥩",
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
        return { ...state, message: "Finished 😋" };
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

  //
  const handlePause = (e) => {
    dispatch({ type: "toggle_paused" });
  };

  function flip(e) {
    setResetter(true);
    dispatch({ type: "force_pause" });
    dispatch({ type: "flip" });
    dispatch({ type: "change_message" });
  }

  let minute = Math.floor(state.length / 60);
  let rest_seconds = state.length % 60;

  return (
    <div>
      <div style={{ display: state.display }}>
        <div>
          {state.length > 0 ? (
            <h3>
              {minute.toString().padStart(2) +
                ":" +
                rest_seconds.toString().padStart(2, "0")}
              👀
            </h3>
          ) : (
            <h3>{state.message} </h3>
          )}
        </div>

        {state.length === 0 ? (
          !resetter ? (
            <button className="flip_btn" onClick={flip}>
              Flip!
            </button>
          ) : null
        ) : (
          <button className="pause_btn" onClick={handlePause}>
            ⏯
          </button>
        )}

        <button>
          <a href="./app">Restart</a>
        </button>
      </div>
    </div>
  );
};
export default Countdown;
