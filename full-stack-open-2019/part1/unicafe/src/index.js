import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <table>
      <tbody className="stats">
        <Statistic title="good" score={good} />
        <Statistic title="neutral" score={neutral} />
        <Statistic title="bad" score={bad} />
        <Statistic title="all" score={good + neutral + bad} />
        <Statistic title="average" score={(good - bad) / 2} />
        <Statistic
          title="positive"
          score={`${(good / (good + neutral + bad)) * 100} %`}
        />
      </tbody>
    </table>
  );
};

const Statistic = ({ title, score }) => (
  <tr className="stats__row">
    <td className="stats__cell">{title}</td>
    <td className="stats__cell">{score}</td>
  </tr>
);

const Button = ({ title, onClick }) => (
  <button className="button-group__button" onClick={onClick}>
    {title}
  </button>
);

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <div className="button-group">
        <Button title="good" onClick={() => setGood(good + 1)} />
        <Button title="neutral" onClick={() => setNeutral(neutral + 1)} />
        <Button title="bad" onClick={() => setBad(bad + 1)} />
      </div>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
