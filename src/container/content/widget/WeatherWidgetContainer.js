import React, { useEffect, useState } from 'react';
import WeatherWidget from '../../../component/content/widget/WeatherWidget';
import axios from 'axios';
import { useSelector } from 'react-redux';

const WeatherWidgetContainer = ({ thema }) => {
	const [weather, setWeather] = useState(null);
	const [weatherData, setWeatherData] = useState(null);
	const { info } = useSelector(({ info }) => ({
		info: info.info,
	}));

	const getWeather = () => {
		var apiURI =
			'https://api.openweathermap.org/data/2.5/weather?q=seoul&APPID=435a348a1fb9bceec1c8fa96c34752a5';
		axios({
			url: apiURI,
			dataType: 'json',
			type: 'GET',
			async: 'false',
		}).then(function (response) {
			const { data } = response;
			setWeatherData(data);
		});
	};

	useEffect(() => {
		getWeather();
	}, []);

	useEffect(() => {
		if (info) {
			setWeather(info.widget.weather);
		}
	}, [info]);

	return (
		<WeatherWidget weather={weather} weatherData={weatherData} thema={thema} />
	);
};

export default WeatherWidgetContainer;
