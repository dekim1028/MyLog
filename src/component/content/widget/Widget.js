import React from 'react';
import styled from 'styled-components';
import WeatherWidgetContainer from '../../../container/content/widget/WeatherWidgetContainer';
import NewsWidgetContainer from '../../../container/content/widget/NewsWidgetContainer';
import MemoWidgetContainer from '../../../container/content/widget/MemoWidgetContainer';
import CalenderWidgetContainer from '../../../container/content/widget/CalenderWidgetContainer';

const WidgetBlock = styled.div`
    width: 900px;
    height: 500px;
    display:flex;
    transition:1s;
    background-color: rgba(255,255,255,0.3);
    padding:20px;
`;

const Block = styled.div`
    width:calc(100%-250px);
    width : -webkit-calc(100% - 250px);
    width : -moz-calc(100% - 250px);
    height:100%;
`;

const FlexBlock = styled.div`
    display:flex;
    align-items:center;
`;

const Widget = ({margin}) => {
    return (
        <WidgetBlock style={{marginLeft:margin?'-900px':'0'}}>
            <WeatherWidgetContainer/>
            <NewsWidgetContainer/>
            <CalenderWidgetContainer/>
            <MemoWidgetContainer/>
        </WidgetBlock>
    );
};

export default Widget;