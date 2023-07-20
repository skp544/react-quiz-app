import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRestart } from "../redux/slices/quesSlice";

const FinishedScreen = ({ points, maxPoints }) => {
  const { highscore } = useSelector((state) => state.question);
  const dispatch = useDispatch();

  const percentage = (points / maxPoints) * 100;

  let emoji;

  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPoints} ({Math.ceil(percentage)}%)
      </p>

      <p className="highscore">(Highscore: {highscore} points)</p>

      <button className="btn btn-ui" onClick={() => dispatch(setRestart())}>
        Restart Quiz
      </button>
    </>
  );
};

export default FinishedScreen;
