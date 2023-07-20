import React from "react";
import { Options } from "./";

const Question = ({ question, answer }) => {
  return (
    <div>
      <h4>{question?.question}</h4>
      <Options question={question} answer={answer} />
    </div>
  );
};

export default Question;
