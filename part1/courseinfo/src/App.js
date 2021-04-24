import React from 'react';

const Header = (props) => (
  <div>
    <h1>{props.course}</h1>
  </div>
);

const Part = (props) => (
  <p>{props.part} {props.exercise}</p>
);

const Content = (props) => {
  const parts = props.parts;
  const part1 = parts[0]
  const part2 = parts[1]
  const part3 = parts[2]
  return(
  <div>
    <Part part={part1.name} exercise={part1.exercises} />
    <Part part={part2.name} exercise={part2.exercises} />
    <Part part={part3.name} exercise={part3.exercises} />
  </div>
)};

const Total = ({ exercises1, exercises2, exercises3 }) => (
  <p>Number of exercises  {exercises1 + exercises2 + exercises3}</p>
);

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const part1 = course.parts[0]
  const part2 = course.parts[1]
  const part3 = course.parts[2]
  return (
  <div>
    <Header course={course.name} />
    <Content parts={course.parts}/>
    <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
  </div>
)};

export default App;
