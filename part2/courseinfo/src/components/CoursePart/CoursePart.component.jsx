import React from 'react';

const CoursePart = ({ name, exercises }) => (
    <li>
        {name} {exercises}
    </li>
);

export default CoursePart;