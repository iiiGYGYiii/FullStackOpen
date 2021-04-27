import React, { useState } from 'react';
import './Phonebook.styles.css'
import InputField from '../InputField/InputField.component';
import { deletePhone } from '../../services/phonebook';

const Phonebook = ({ persons, setPersons}) => {
    const [search, setSearch] = useState('');

    const handleChange = (event) =>{
        setSearch(event.target.value);
    };

    const handleDelete = (id) =>{
        if(window.confirm('Delete number?')){
            deletePhone(id)
            setPersons(prevState=>{
                return prevState.filter(person=>person.id!==id);
            });
        }
    }

    return(
    <div className="phonebook">
        <h2>Numbers</h2>
        <InputField
            name={'search'}
            handleChange={handleChange}
            newName={search}
        />
        {
        persons
        .filter(person=>person.name.toLowerCase().includes(search.toLowerCase()))
        .map((person) =>(
            <p key={person.id}>
                {person.name} : {person.number} <span onClick={()=>{handleDelete(person.id)}} id="delete">Delete</span>
            </p>
        ))
        }
    </div>
);};

export default Phonebook;