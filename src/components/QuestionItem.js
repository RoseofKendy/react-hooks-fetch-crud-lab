import React from "react";

function QuestionItem({ question, onDeleteQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label htmlFor={`correctAnswer-${id}`}>Correct Answer:</label>
      <select
        id={`correctAnswer-${id}`}
        defaultValue={correctIndex}
        onChange={(e) => console.log(`Answer updated to: ${e.target.value}`)}
      >
        {options}
      </select>
      <button onClick={() => onDeleteQuestion(id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
