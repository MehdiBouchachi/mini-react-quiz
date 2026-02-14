/* const questions = [
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
]; */

export default function App() {
  return (
    <div className="container">
      <div className="card">
        <h1>Mini React Challenge</h1>

        <p className="subtitle">Question 1 of 3</p>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: "33%" }} />
        </div>

        <h2 className="question">What is React?</h2>

        <div className="options">
          <button className="option">A library</button>

          <button className="option">A framework</button>

          <button className="option">A database</button>
        </div>

        <div className="controls">
          <button className="btn-secondary">Previous</button>

          <button className="btn-primary">Next</button>
        </div>
      </div>
    </div>
  );
}

export function ResultScreen() {
  return (
    <div className="container">
      <div className="card result-card">
        <h1>Challenge Completed</h1>

        <p className="subtitle">You scored 3 out of 3</p>

        <div className="score-ring" style={{ "--score": "100%" }}>
          <div className="score-inner">3/3</div>
        </div>

        <p className="level">Advanced 🚀</p>

        <button className="btn-primary">Retake Challenge</button>
      </div>
    </div>
  );
}
