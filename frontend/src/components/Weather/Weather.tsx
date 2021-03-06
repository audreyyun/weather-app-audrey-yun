import React from 'react';
import styles from './Weather.module.scss';
import LocationForm from '../LocationForm/LocationForm';
import WeatherInfo from '../WeatherInfo/WeatherInfo';

const Weather = ({ weather, fetchWeather } : any) => { 
    return (
        <div className={styles.weatherPageContainer}>
            <h1 className={styles.appTitle}>Audrey's Weather App</h1>
            
            <LocationForm fetchWeather={fetchWeather}/>
            <WeatherInfo weather={weather} />
        </div>
    );
};

export default Weather;