//MODULES
import React, { useState } from 'react';
//STYLES
import './Country.styles.css';
//COMPONENTS
import CountryCard from '../CountryCard/CountryCard.component';

const Country = ({ country }) =>{

    const [show, setShow] = useState(false);

    const handleShowClick = () =>{
        setShow(prevState => !prevState);
    }

    return(
    <div className='country'>
        <p>
            <span className='country-name'>{country.name}</span>
            <span onClick={handleShowClick} className='show'>{show ? 'Hide' : 'Show'}</span>
        </p>
        {show && <CountryCard country={country} />}
    </div>
    );
};

export default Country;
