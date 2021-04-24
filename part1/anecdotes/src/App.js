import React, { useState } from 'react';
import './App.css';

const Anecdote = ({ anecdote }) => (
  <div className="anecdote">
    <h1 >
      {anecdote}
    </h1>
  </div>
);

const DisplayVotes = ({ votes }) => (
  <h2>
    has {votes} votes.
  </h2>
);

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>
    {text}
  </button>
);

const App = () =>{
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ];
   
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const handleVotesClick = () =>{
    const newVotes = [...votes];
    newVotes[selected]++;
    setVotes(newVotes);
  };

  const handleQuoteClick =() => {setSelected(Math.floor(Math.random()*6))};

  return (
    <div className="app">
      <h1 className="header">Anecdote of the Day</h1>
      <Anecdote anecdote={anecdotes[selected]}/>
      <DisplayVotes votes={votes[selected]} />
      <Button
        text={"Vote"}
        handleClick={handleVotesClick}/>
      <Button
        handleClick={handleQuoteClick}
        text={"Change anecdote"}
      />
      <h1 className="header">Most voted anecdote with {Math.max(...votes)} votes.</h1>
      <Anecdote anecdote={anecdotes[votes.indexOf(Math.max(...votes))]}/>
    </div>
  );
}

export default App;
