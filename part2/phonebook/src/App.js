import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Phonebook from './components/Phonebook/Phonebook.component';
import Form from './components/Form/Form.component';

const App = () => {
  const [ persons, setPersons ] = useState([]);
  const [ nextId, setNextId] = useState(0);
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
      <Form
      persons={persons}
      setPersons={setPersons}
      nextId={nextId}
      setNextId={setNextId}
      />
      <Phonebook
      persons={persons}
      setPersons={setPersons}
      />
    </div>
  );
};

export default App