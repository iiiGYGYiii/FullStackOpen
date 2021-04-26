//MODULES
import React from 'react';
//STYLES
import './DisplayCountries.styles.css';
//COMPONENTS
import Country from '../Country/Country.component';
import CountryCard from '../CountryCard/CountryCard.component';

const DisplayCountries = ({ countries }) => (
    <div className="display-countries">
    {
        countries.length >10 ?
        <h2>Too many matches, be more specific.</h2> :
        countries.length === 1 ?
        <CountryCard country={countries[0]} showWeather={true}/>:
        countries.map((country, i) => <Country key={i} country={country}/>)
    }
    </div>
);

export default DisplayCountries;
