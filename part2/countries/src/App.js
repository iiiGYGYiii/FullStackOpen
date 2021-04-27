// MODULES
import React, { useState, useEffect} from 'react';
import axios from 'axios';
// COMPONENTS
import DisplayCountries from './components/DisplayCountries/DisplayCountries.component';
//STYLES
import './App.css';

const countriesAPI = "https://restcountries.eu/rest/v2/all";

function App() {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);
  const [showCountries, setShowCountries] = useState([]);

  const handleChange = (event) => {
    setSearch(event.target.value);
    setShowCountries(
      countries.filter(country => country.name.toLowerCase().includes(event.target.value.toLowerCase()))
    );
  };

  useEffect(()=>{
    axios
    .get(countriesAPI)
    .then(response=>setCountries(response.data))
    .catch(console.error);
  },
  []);

  return (<div className='App'>
    <div className="inputField">
      <input value={search} onChange={handleChange} name='search' />
    </div>
    {
      search ? <DisplayCountries countries={showCountries}/> : <h2>Search for a country</h2>
    }
    </div>
  );
}

export default App;
