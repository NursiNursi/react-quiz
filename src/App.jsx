import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import StartScreen from "./components/StartScreen";

function App() {
  const [questions, setQuestions] = useState([]);
  const numQuestions = questions.length;

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((err) => alert(err));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        <StartScreen numQuestions={numQuestions} />
      </Main>
    </div>
  );
}

export default App;
