import React from 'react';
import './InputField.styles.css';

const InputField = ({ name, handleChange, newName}) => (
    <div style={{textTransform: 'uppercase'}}>
    <span>{name}:</span> <input name={name} onChange={handleChange} value={newName} />
    </div>
);

export default InputField;