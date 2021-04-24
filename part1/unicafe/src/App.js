import React, {useState} from 'react';
import './App.css';

const Title = () => (
  <h1>Give Feedback</h1>
);

const Button = ({ handleClick, btnText }) => (
  <button onClick={handleClick}>
    {btnText}
  </button>
);

const Statistic = ({ value, text }) =>(<tr>
<td>{text}</td><td>{value}{text==="positive" && '%'}</td>
</tr>
);

const DisplayStats = ({ good, neutral, bad }) => (
  <table><tbody>
    <Statistic
      value={good}
      text={"good"}
    />
    <Statistic
      value={neutral}
      text={"neutral"}
    />
    <Statistic
      value={bad}
      text={"bad"}
    />
    <Statistic
      value={good + neutral + bad}
      text={"all"}
    />
    <Statistic
      value={(good - bad)/(good + neutral + bad)}
      text={"average"}
    />
    <Statistic
      value={good*100/(good+bad+neutral)}
      text={"positive"}
    />
    </tbody>
  </table>
);

const App = () => {
  const [statistics, setStatistics] = useState({
    good:0,
    neutral:0,
    bad:0,
    empty: true
  });


  const handleClick = (event)=>{

    setStatistics({
      ...statistics,
      [event.target.innerText]: statistics[event.target.innerText]+1,
      empty: false
    });
  };

  return (
    <div>
      <Title/>
      <Button
        handleClick={handleClick}
        btnText="good"
        />
      <Button 
        handleClick={handleClick}
        btnText="neutral"
        />
      <Button 
        handleClick={handleClick}
        btnText="bad"
        />
      <h2>
        Statistics
      </h2>
      {statistics.empty ?
        <h3>
        No feedback given.
      </h3>:
      <DisplayStats
        {...statistics}
      />}
    </div>
  );
}

export default App;
