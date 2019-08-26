import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = props => {
  const [selected, setSelected] = useState(0);
  const [likesArray, setLikesArray] = useState(props.anecdotes.map(() => 0));

  const handleNextClick = () => {
    const randomNum = Math.floor(Math.random() * props.anecdotes.length);
    setSelected(randomNum);
  };

  const handleLikeClick = () => {
    setLikesArray(
      likesArray.map((value, idx) => {
        if (idx === selected) {
          return (value += 1);
        }
        return value;
      })
    );
  };

  return (
    <div className="container" style={{ padding: "20px" }}>
      <h1>Anecdote of the day</h1>
      <div>{props.anecdotes[selected]}</div>
      <p>has {likesArray[selected]} votes</p>
      <button onClick={handleLikeClick}>vote</button>
      <button onClick={handleNextClick}>next anecdote</button>
      <h1>Anecdote with the most votes</h1>
      <div>{props.anecdotes[likesArray.indexOf(Math.max(...likesArray))]}</div>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
