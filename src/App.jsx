import { useState } from "react";

const questions = [
  {
    question: "What is React?",
    options: ["A library", "A framework", "A database"],
    correct: 0,
  },
  {
    question: "Which hook manages state?",
    options: ["useEffect", "useState", "useFetch"],
    correct: 1,
  },
  {
    question: "What is JSX?",
    options: ["JavaScript XML", "JavaScript Extension", "JSON XML"],
    correct: 0,
  },
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);

  const totalQuestions = questions.length;
  const isFinished = current === totalQuestions;
  const question = questions[current];
  const progress = (current / totalQuestions) * 100;

  function handleSelect(index) {
    const updated = [...answers];
    updated[current] = index;
    setAnswers(updated);
  }

  function handleNext() {
    setCurrent((prev) => prev + 1);
  }

  function handlePrevious() {
    setCurrent((prev) => prev - 1);
  }

  function handleReset() {
    setCurrent(0);
    setAnswers([]);
  }

  if (isFinished) {
    return (
      <ResultScreen
        answers={answers}
        totalQuestions={totalQuestions}
        onReset={handleReset}
      />
    );
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Mini React Challenge</h1>

        <p className="subtitle">
          Question {current + 1} of {totalQuestions}
        </p>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <h2 className="question">{question.question}</h2>

        <div className="options">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`option ${
                answers[current] === index ? "selected" : ""
              }`}
              onClick={() => handleSelect(index)}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="controls">
          <button
            className="btn-secondary"
            onClick={handlePrevious}
            disabled={current === 0}
          >
            Previous
          </button>

          <button
            className="btn-primary"
            onClick={handleNext}
            disabled={answers[current] === undefined}
          >
            {current === totalQuestions - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

function ResultScreen({ onReset, answers, totalQuestions }) {
  const score = answers.filter(
    (answer, i) => answer === questions[i]?.correct,
  ).length;

  const percentage = (score / totalQuestions) * 100;

  function getLevel() {
    if (percentage === 100) return "Advanced 🚀";
    if (percentage >= 60) return "Intermediate ⚡";
    return "Beginner 🌱";
  }
  return (
    <div className="container">
      <div className="card result-card">
        <h1>Challenge Completed</h1>
        <p className="subtitle">
          You scored {score} out of {totalQuestions}
        </p>

        <div className="score-ring" style={{ "--score": `${percentage}%` }}>
          <div className="score-inner">
            {score}/{totalQuestions}
          </div>
        </div>

        <p className="level">{getLevel()}</p>

        <button className="btn-primary" onClick={onReset}>
          Retake Challenge
        </button>
      </div>
    </div>
  );
}
