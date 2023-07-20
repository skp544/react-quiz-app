import { useEffect } from "react";
import {
  Error,
  FinishedScreen,
  Footer,
  Header,
  Loader,
  Main,
  NextButton,
  Progress,
  Question,
  StartScreen,
  Timer,
} from "./components";
import { useDispatch, useSelector } from "react-redux";
import { setData, setStatus } from "./redux/slices/quesSlice";

const App = () => {
  const { questions, status, index, answer, points } = useSelector(
    (state) => state.question
  );
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch(setData(data)))
      .catch((err) => dispatch(setStatus("error")));
  }, []);

  const numQuestions = questions.length;
  const maxPoints = questions.reduce((prev, curr) => prev + curr.points, 0);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen numQuestions={numQuestions} />}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestion={numQuestions}
              points={points}
              maxPoints={maxPoints}
              answer={answer}
            />
            <Question question={questions[index]} answer={answer} />
            <Footer>
              <Timer />
              <NextButton numQuestions={numQuestions} />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishedScreen points={points} maxPoints={maxPoints} />
        )}
      </Main>
    </div>
  );
};

export default App;
