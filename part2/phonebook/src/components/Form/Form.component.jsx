import React, { useState } from 'react';
import './Form.styles.css'
import InputField from '../InputField/InputField.component';

const isEmpty = (data) => {
    if (!data.trim() || !data){
        return true;
    }
    return false;
};

const valueExists = (value, field, data) => {
    if (data.map(d=>d[field]).indexOf(value[field])!==-1){
        return true;
    }
    return false;
};

const Form = ({ persons, setPersons }) => {
    const [newPhone, setNewPhone] = useState({
        name: '',
        number: ''
    });
    const handleChange = (event) =>{
        setNewPhone({
            ...newPhone,
            [event.target.name]: event.target.value
        });
    };

    const handleClick = (event) =>{
        event.preventDefault();
        if (isEmpty(newPhone.name)||isEmpty(newPhone.number)){
            alert('Field is required');
            return;
        }
        if (valueExists(newPhone, 'name', persons)||valueExists(newPhone, 'number',persons)){
            alert(`${newPhone.name} already exists!`)
            return;
        }
        const newPerson = {
            ...newPhone,
            id: persons.length+1
        };
        setPersons((prevState)=> [...prevState, newPerson] );
        setNewPhone((prevState)=>{
            return{
                ...prevState,
                name:'',
                number: ''
            }
        });
    }

    return(
    <div className="form">
      <h1>Phonebook</h1>
        <form>
          <div className="inputField">
            <InputField
            handleChange={handleChange}
            newName={newPhone.name}
            name={'name'}
            />
            <InputField
                handleChange={handleChange}
                newName={newPhone.number}
                name={'number'}
            />
          </div>
          <div className="btn">
            <button onClick={handleClick} type="submit">add</button>
          </div>
        </form>
    </div>
);};
export default Form;