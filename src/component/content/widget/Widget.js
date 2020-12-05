import React from 'react';
import styled from 'styled-components';

const WidgetBlock = styled.div`
    width: 900px;
    height: 500px;
    transition:1s;
    background-color: rgba(255,255,255,0.3);
`;

const Widget = ({margin}) => {
    return (
        <WidgetBlock style={{marginLeft:margin?'-900px':'0'}}>
            
        </WidgetBlock>
    );
};

export default Widget;