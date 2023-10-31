function Option({ question, answer }) {
  console.log(question, "from option");
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            answer
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          // className="btn btn-option"
          disabled={answer}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Option;
