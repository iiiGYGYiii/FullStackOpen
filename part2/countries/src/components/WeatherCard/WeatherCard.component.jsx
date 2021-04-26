// MODULES
import React, { useState, useEffect} from 'react';
import axios from 'axios';
//STYLES
import './WeatherCard.styles.css';

const WeatherCard = ({ capital }) =>{

    const [weather, setWeather] = useState(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const weatherAPI = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${capital}`
        axios
            .get(weatherAPI)
            .then(res =>{
                if (res.status === 200 && res.data.code!==105){
                    setWeather(res.data);
                    setLoading(false);
                }
            })
            .catch(()=>{
                setLoading(true);
            });
        
    },[capital]);


    if (loading){
        return <div className='spinner'/>
    }else if(weather.success === false){
        return <h2>Something bad happened</h2>
    }

    return(<div className='weather-card'>
        <h2>{weather.location.name}</h2>
        <div className='weather-info'>
            <h3>{weather.current.weather_descriptions[0]}</h3>
            <img src={weather.current.weather_icons} alt='weather' width='200px'/>
            <p><strong>{weather.current.temperature}°</strong></p>
        </div>
    </div>)
};

export default WeatherCard;
