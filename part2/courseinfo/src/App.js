import React from 'react';
import Course from './components/Course/Course.component';
import courses from './courses';

const App = () => {

  const coursesMod = courses.map(
    (course) => {
      return {
        ...course,
        totalExercise: course.parts.reduce((acc, value) => acc+value.exercises, 0)
      }
    }
  );

  return <Course courses={coursesMod} />
}

export default App;
