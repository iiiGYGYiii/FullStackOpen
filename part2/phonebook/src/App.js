import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Phonebook from './components/Phonebook/Phonebook.component';
import Form from './components/Form/Form.component';

const App = () => {
  const [ persons, setPersons ] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(res => setPersons(res.data))
      .catch(err=>console.error);
  },
    []);

  return (
    <div className="App">
      <Form
      persons={persons}
      setPersons={setPersons}
      />
      <Phonebook
      persons={persons}
      />
    </div>
  );
};

export default App