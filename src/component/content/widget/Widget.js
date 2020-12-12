import React from 'react';
import styled from 'styled-components';
import WeatherWidgetContainer from '../../../container/content/widget/WeatherWidgetContainer';
import NewsWidgetContainer from '../../../container/content/widget/NewsWidgetContainer';
import MemoWidgetContainer from '../../../container/content/widget/MemoWidgetContainer';
import CalenderWidgetContainer from '../../../container/content/widget/CalenderWidgetContainer';

const WidgetBlock = styled.div`
    width: 900px;
    height: 500px;
    position:relative;
    display:flex;
    transition:1s;
    background-color: rgba(255,255,255,0.3);
    padding:20px;
`;

const Widget = ({margin,info}) => {
    if(!info) return null;
    return (
        <WidgetBlock style={{marginLeft:margin?'-900px':'0'}}>
            {info.widget.weather.show && <WeatherWidgetContainer/>}
            {info.widget.news.show && <NewsWidgetContainer/>}
            {info.widget.calendar.show && <CalenderWidgetContainer/>}
            {info.widget.memo.show &&<MemoWidgetContainer/>}
        </WidgetBlock>
    );
};

export default Widget;