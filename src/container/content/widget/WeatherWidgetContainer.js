import React, { useEffect, useState } from 'react';
import WeatherWidget from '../../../component/content/widget/WeatherWidget';
import axios from 'axios';

const WeatherWidgetContainer = ({thema}) => {
    const [weatherData,setWeatherData] = useState(null);

    const getWeather = () =>{
        var apiURI = "https://api.openweathermap.org/data/2.5/weather?q=seoul&APPID=435a348a1fb9bceec1c8fa96c34752a5";
        axios({
            url: apiURI,
            dataType: "json",
            type: "GET",
            async: "false",
        }).then(function(response){
            const {data}=response; 
            setWeatherData(data);
        });
    };

    useEffect(()=>{
        getWeather();
    },[]);

    return (
        <WeatherWidget
            weatherData={weatherData}
            thema={thema}
        />
    );
};

export default WeatherWidgetContainer;