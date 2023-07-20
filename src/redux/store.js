import { combineReducers, configureStore } from "@reduxjs/toolkit";
import quesSlice from "./slices/quesSlice";

const rootReducer = combineReducers({
  question: quesSlice,
});

export default configureStore({ reducer: rootReducer });
