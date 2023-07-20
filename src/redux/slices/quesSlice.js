import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

const SECS_PER_SECOND = 30;

export const quesSlice = createSlice({
  name: "question",
  initialState: initialState,
  reducers: {
    setData: (state, action) => {
      state.questions = action.payload;
      state.status = "ready";
    },
    setStatus: (state, action) => {
      state.status = action.payload;
      state.secondsRemaining =
        state.status === "active"
          ? state.questions.length * SECS_PER_SECOND
          : state.secondsRemaining;
    },
    setIndex: (state, action) => {
      state.index = state.index + 1;
      state.answer = null;
    },
    setAnswer: (state, action) => {
      const question = state.questions.at(state.index);
      state.answer = action.payload;
      state.points =
        action.payload === question.correctOption
          ? state.points + question.points
          : state.points;
    },
    setHighscore: (state, action) => {
      state.highscore =
        state.points > state.highscore ? state.points : state.highscore;
    },
    setRestart: (state, action) => {
      state.points = 0;
      state.index = 0;
      state.answer = null;
      state.status = "ready";
      state.secondsRemaining = 10;
    },

    setSecondRemaining: (state, action) => {
      state.secondsRemaining = state.secondsRemaining - 1;
      state.status = state.secondsRemaining === 0 ? "finished" : state.status;
    },
  },
});

export const {
  setData,
  setStatus,
  setIndex,
  setAnswer,
  setHighscore,
  setRestart,
  setSecondRemaining,
} = quesSlice.actions;

export default quesSlice.reducer;
