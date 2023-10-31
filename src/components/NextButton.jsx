function NextButton({ answer, index, numQuestions }) {
  if (answer === null) return null;

  if (index < numQuestions - 1) return <div className="btn btn-ui">Next</div>;

  if (index === numQuestions - 1)
    return <div className="btn btn-ui">Finish</div>;
}

export default NextButton;
