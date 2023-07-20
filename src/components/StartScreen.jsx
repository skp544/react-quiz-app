import { useDispatch } from "react-redux";
import { setStatus } from "../redux/slices/quesSlice";

const StartScreen = ({ numQuestions }) => {
  const dispatch = useDispatch();

  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React Mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch(setStatus("active"))}
      >
        Let&apos;s Start
      </button>
    </div>
  );
};

export default StartScreen;
