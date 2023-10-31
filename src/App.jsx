import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import StartScreen from "./components/StartScreen";
import Loader from "./components/Loader";
import Error from "./components/Error";
import Question from "./components/Question";

function App() {
  const [questions, setQuestions] = useState([]);
  const [status, setStatus] = useState("loading");
  const [index] = useState(0);
  const numQuestions = questions.length;

  function handleStart() {
    setStatus("active");
  }

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  console.log(questions);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} handleStart={handleStart} />
        )}
        {status === "active" && <Question question={questions[index]} />}
      </Main>
    </div>
  );
}

export default App;
