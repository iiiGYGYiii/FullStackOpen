// MODULES
import React, { useState } from 'react';
import { createPhone, updatePhone } from '../../services/phonebook';
// STYLES
import './Form.styles.css'
// COMPONENTS
import InputField from '../InputField/InputField.component';

const isEmpty = (data) => {
    if (!data.trim() || !data){
        return true;
    }
    return false;
};

const valueExists = (value, field, data) => {
    if (data.map(d=>d[field]).indexOf(value[field])!==-1){
        const id = data.filter(d => d[field] === value[field] )[0].id;
        return id;
    }
    return false;
};

const Form = ({ persons, setPersons, nextId, setNextId }) => {
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
        if (valueExists(newPhone, 'name', persons)){
            if (window.confirm(`Want to overwrite ${newPhone.name}?`)){
                const id = valueExists(newPhone, 'name', persons);
                const newPerson = updatePhone({ number: newPhone.number } ,id);
                newPerson.then(res => {
                    setPersons(prevState=>{
                        return prevState.map(person => person.id===id ? res : person);
                    })
                });
                
            }
            return; 
        }
        const newPerson = {
            ...newPhone,
            id: nextId
        };
        createPhone(newPerson).then(res=>{
            setPersons(prevState=>[...prevState, res]);
            setNewPhone((prevState)=>{
                return{
                    ...prevState,
                    name:'',
                    number: ''
                }
            });
            setNextId(prevState => prevState+1);
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