//MODULES
import React from 'react';
//STYLES
import './CountryCard.styles.css';
//COMPONENTS
import WeatherCard from '../WeatherCard/WeatherCard.component';


const CountryCard = ({ country, showWeather=false }) =>(
    <div className='country-card'>
        <div className="card">
            <h1>{country.name}</h1>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h2>Languages</h2>
            <ul>
                {
                    country.languages.map(lang =><li key={lang.iso639_1}>{lang.name}</li>)
                }
            </ul>
            <img src={country.flag} alt='country-flag' width='250px' />
        </div>
        {
            showWeather && <WeatherCard capital={country.capital}/>
        }
    </div>
);

export default CountryCard;
