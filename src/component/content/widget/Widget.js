import React from 'react';
import styled from 'styled-components';
import WeatherWidgetContainer from '../../../container/content/widget/WeatherWidgetContainer';
import MemoWidgetContainer from '../../../container/content/widget/MemoWidgetContainer';
import CalenderWidgetContainer from '../../../container/content/widget/CalenderWidgetContainer';

const WidgetBlock = styled.div`
    width: 50%;
    height: 63vh;
    position:relative;
    display:flex;
    transition:1s;
    background-color: rgba(255,255,255,0.3);
    padding:20px;
`;

const Widget = ({margin,info}) => {
    if(!info) return null;
    return (
        <WidgetBlock style={{marginLeft:margin?'-50%':'0'}}>
            {info.widget.weather.show && <WeatherWidgetContainer thema={info.widgetThema}/>}
            {info.widget.calendar.show && <CalenderWidgetContainer thema={info.widgetThema}/>}
            {info.widget.memo.show &&<MemoWidgetContainer thema={info.widgetThema}/>}
        </WidgetBlock>
    );
};

export default Widget;