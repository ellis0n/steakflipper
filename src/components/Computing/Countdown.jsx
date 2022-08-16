import React, { useEffect, useReducer, useState } from "react";
import Steak from "../Shared/Steak";

const Countdown = ({ cookTime }) => {
  const [resetter, setResetter] = useState(false);
  const initialState = {
    length: cookTime,
    paused: true,
    reset: false,
    message: "Flip it! 🥩",
    display: "block",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "toggle_paused":
        return { ...state, paused: !state.paused };

      case "flip": {
        return {
          ...state,
          paused: true,
          ...state,
          length: initialState.length,
          ...state,
          reset: true,
        };
      }

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

      case "change_message": {
        return { ...state, message: "Finished 😋" };
      }

      case "change_display": {
        return { ...state, display: "none" };
      }

      default: {
        console.log(state.length);
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

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

  const handlePause = (e) => {
    dispatch({ type: "toggle_paused" });
  };

  function flip(e) {
    setResetter(true);
    dispatch({ type: "force_pause" });
    dispatch({ type: "flip" });
    dispatch({ type: "change_message" });
  }

  return (
    <div>
      <div style={{ display: state.display }}>
        <div>
          {state.length > 0 ? (
            <h3>{state.length} seconds... 👀</h3>
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
          <button onClick={handlePause}>Start/Pause</button>
        )}

        <button>
          <a href="./app">Restart</a>
        </button>
      </div>
      <div>
        <Steak />
      </div>
    </div>
  );
};
export default Countdown;
