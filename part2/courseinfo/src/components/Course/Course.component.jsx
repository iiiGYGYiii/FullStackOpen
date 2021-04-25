import React from 'react';
import './Course.styles.css';
import Header from '../Header/Header.component';
import CourseContent from '../CourseContent/CourseContent.component';

const Course = ({ courses }) => (
    <>
        {courses.map((course) => (
            <div>
                <Header courseName={course.name}/>
                <CourseContent
                parts={course.parts}
                totalExercises={course.totalExercise} />
            </div>
        ))}
    </>
);

export default Course;
