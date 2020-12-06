import React from 'react';
import styled from 'styled-components';
import {IoIosMenu} from 'react-icons/io';
import '../../../style/weather/css/weather-icons-wind.css'
import '../../../style/weather/css/weather-icons.css'
import '../../../style/weather/css/weather-icons-wind.min.css'
import '../../../style/weather/css/weather-icons.min.css'

const WeatherWidgetBlock = styled.div`
    width:250px; 
    height : calc(100% - 10px);
    height : -webkit-calc(100% - 10px);
    height : -moz-calc(100% - 10px);
    margin:5px;
    background-color:rgba(255,255,255,0.4);
    border-radius:4px;
    overflow:hidden;
`;

const Header = styled.div`
    width:100%;
    height: 25px;
    background-color:rgba(255,255,255,0.3);

    svg{
        font-size: 25px;
        color: white;
    }
`;

const Content = styled.div``;

const WeatherIcon=styled.i`
    width: 100%;
    height: 155px;
    font-size: 95px;
    padding: 40px 0 0;
    color: white;
`;

const WeatherInfo = styled.div`
    color: white;

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
            border:1px solid white;
            padding: 7px;

            &>h1{
                margin-top: 5px;
                font-size: 12px;
            }
        }
    }

`;

const WeatherWidget = ({weatherData}) => {
    if(!weatherData) return null;
    return (
        <WeatherWidgetBlock>
            <Header>
                <IoIosMenu/>
            </Header>
            <Content>
                <WeatherIcon className={`wi wi-owm-${weatherData.weather[0].id}`}></WeatherIcon>
                <WeatherInfo>
                    <h1 className="name"><i>{weatherData.name}</i></h1>
                    <h1 className="description">{weatherData.weather[0].description}</h1>
                    <h1 className="temp">
                        <i className="wi wi-thermometer"/>
                        {Math.round(weatherData.main.temp-273.15)}<sup><i className="wi wi-celsius"/></sup>
                    </h1>
                    <div className="etc">
                        <div>
                            <i className="wi wi-strong-wind"/>
                            <h1>{Math.round(weatherData.wind.speed)}m/s</h1>
                        </div>
                        <div>
                            <i className="wi wi-humidity"/>
                            <h1>{weatherData.main.humidity}%</h1>
                        </div>
                        <div>
                            <i className="wi wi-cloud"/>
                            <h1>{weatherData.clouds.all}%</h1>
                        </div>
                    </div>
                </WeatherInfo>
            </Content>
        </WeatherWidgetBlock>
    );
};

export default WeatherWidget;