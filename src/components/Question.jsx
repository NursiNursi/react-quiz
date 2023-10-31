import Option from "./Option";

function Question({ question, answer }) {
  console.log(question, "from question");

  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} answer={answer} />
    </div>
  );
}

export default Question;
