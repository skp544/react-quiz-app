import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAnswer,
  setHighscore,
  setIndex,
  setStatus,
} from "../redux/slices/quesSlice";

const NextButton = ({ numQuestions }) => {
  const dispatch = useDispatch();
  const { answer, index } = useSelector((state) => state.question);

  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button className="btn btn-ui" onClick={() => dispatch(setIndex())}>
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch(setStatus("finished"));
          dispatch(setHighscore());
        }}
      >
        Finish
      </button>
    );
};

export default NextButton;
