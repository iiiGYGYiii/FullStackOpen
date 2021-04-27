import React from 'react';
import './CourseContent.styles.css';
import CoursePart from '../CoursePart/CoursePart.component';

const CourseContent = ({ parts, totalExercises }) => (
    <>
        {parts.map(part =>
            <CoursePart key={part.id} {...part} />
        )}
        <p><strong>Total of {totalExercises} exercises</strong></p>
    </>
);

export default CourseContent;