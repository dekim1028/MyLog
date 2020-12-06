import React from 'react';
import styled from 'styled-components';
import WeatherWidgetContainer from '../../../container/content/widget/WeatherWidgetContainer';

const WidgetBlock = styled.div`
    width: 900px;
    height: 500px;
    transition:1s;
    background-color: rgba(255,255,255,0.3);
    padding:30px;
`;

const Widget = ({margin}) => {
    return (
        <WidgetBlock style={{marginLeft:margin?'-900px':'0'}}>
            <WeatherWidgetContainer/>
        </WidgetBlock>
    );
};

export default Widget;