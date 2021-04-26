import React, { useState } from 'react';
import './Phonebook.styles.css'
import InputField from '../InputField/InputField.component';

const Phonebook = ({ persons }) => {
    const [search, setSearch] = useState('');

    const handleChange = (event) =>{
        setSearch(event.target.value);
    };

    return(
    <div className="phonebook">
        <h2>Numbers</h2>
        <InputField
            name={'search'}
            handleChange={handleChange}
            newName={search}
        />
        {
        persons.filter(person=>person.name.toLowerCase().includes(search.toLowerCase())).map((person) => <p key={person.id}>{person.name} : {person.number}</p>)
        }
    </div>
);};

export default Phonebook;