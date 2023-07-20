import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSecondRemaining } from "../redux/slices/quesSlice";

const Timer = () => {
  const dispatch = useDispatch();
  const { secondsRemaining } = useSelector((state) => state.question);

  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch(setSecondRemaining());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && 0}
      {seconds}
    </div>
  );
};

export default Timer;
