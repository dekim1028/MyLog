import React from 'react';
import styled from 'styled-components';
import '../../../style/weather/css/weather-icons-wind.css'
import '../../../style/weather/css/weather-icons.css'
import '../../../style/weather/css/weather-icons-wind.min.css'
import '../../../style/weather/css/weather-icons.min.css'
import WidgetTemplateContainer from '../../../container/content/widget/WidgetTemplateContainer';

const Content = styled.div`
    height: 415px;
`;

const WeatherIcon=styled.i`
    width: 100%;
    height: 155px;
    font-size: 95px;
    padding: 40px 0 0;
    
    &.light{
        color: white;
    }

    &.dark{
        color: black;
    }
`;

const WeatherInfo = styled.div`
    &.light{
        color: white;
    }

    &.dark{
        color: black;
    }

    h1{
        margin: 0;
    }

    .name{
        margin-bottom: 3px;
        font-weight: 500;
        font-size: 18px;
    }

    .description{
        font-size: 20px;
    }

    .temp{
        margin: 35px 0;
        font-size: 50px;

        .wi-thermometer{
            margin-right: 10px;
        }

        sup{
            vertical-align: top;
        }
    }

    .etc{
        margin: 0 20px;
        display:flex;
        align-items:center;
        justify-content:space-around;

        &>div{
            width: 60px;
            height: 60px;
            font-size: 20px;
            border-radius:4px;
            padding: 7px;

            &.light{
                border:1px solid white;
            }

            &.dark{
                border:1px solid black;
            }

            &>h1{
                margin-top: 5px;
                font-size: 12px;
            }
        }
    }

`;

const WeatherWidget = ({weatherData,thema}) => {
    if(!weatherData) return null;
    return (
        <WidgetTemplateContainer name="weather" thema={thema}>
            <Content>
                <WeatherIcon className={`wi wi-owm-${weatherData.weather[0].id} ${thema}`}></WeatherIcon>
                <WeatherInfo className={thema}>
                    <h1 className="name"><i>{weatherData.name}</i></h1>
                    <h1 className="description">{weatherData.weather[0].description}</h1>
                    <h1 className="temp">
                        <i className="wi wi-thermometer"/>
                        {Math.round(weatherData.main.temp-273.15)}<sup><i className="wi wi-celsius"/></sup>
                    </h1>
                    <div className="etc">
                        <div className={thema}>
                            <i className="wi wi-strong-wind"/>
                            <h1>{Math.round(weatherData.wind.speed)}m/s</h1>
                        </div>
                        <div className={thema}>
                            <i className="wi wi-humidity"/>
                            <h1>{weatherData.main.humidity}%</h1>
                        </div>
                        <div className={thema}>
                            <i className="wi wi-cloud"/>
                            <h1>{weatherData.clouds.all}%</h1>
                        </div>
                    </div>
                </WeatherInfo>
            </Content>
        </WidgetTemplateContainer>
    );
};

export default WeatherWidget;