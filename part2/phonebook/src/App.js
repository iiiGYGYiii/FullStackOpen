// MODULES
import React, { useState, useEffect } from 'react'
import axios from 'axios';
//STYLES
import './App.css';
//COMPONENTS
import Phonebook from './components/Phonebook/Phonebook.component';
import Form from './components/Form/Form.component';
import Notification from './components/Notification/Notification.component';

const App = () => {
  const [ persons, setPersons ] = useState([]);
  const [ nextId, setNextId] = useState(0);
  const [ message, setMessage] = useState({
    text: '',
    isBad: false
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/phonebook")
      .then(res =>{
        setPersons(res.data)
        setNextId(1+Math.max(...res.data.map(person=>person.id)));
      })
      .catch(console.error);
  },
    []);

  return (
    <div className="App">
      {message.text && <Notification 
        message={message}
      />}
      <div className='BodyApp'>
        <Form
        persons={persons}
        setPersons={setPersons}
        nextId={nextId}
        setNextId={setNextId}
        setMessage={setMessage}
        />
        <Phonebook
        persons={persons}
        setPersons={setPersons}
        setMessage={setMessage}
        />
      </div>
    </div>
  );
};

export default App