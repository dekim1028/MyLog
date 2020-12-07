import React from 'react';
import styled,{css} from 'styled-components';
import {IoIosMenu} from 'react-icons/io';
import {GiResize} from 'react-icons/gi';

const WidgetTemplateBlock = styled.div`
    ${props=>
        css`
            width:${props.width?props.width:"auto"};
            height:${props.height?props.height:"auto"};
        `
    }

    margin:5px;
    background-color:rgba(255,255,255,0.4);
    border-radius:4px;
    overflow:hidden;
`;

const Header = styled.div`
    width:100%;
    height: 25px;
    background-color:rgba(255,255,255,0.3);
    cursor:move;

    svg{
        font-size: 25px;
        color: white;
    }
`;

const Footer = styled.div`
    text-align: right;
`;

const ResizeBtn = styled(GiResize)`
    transform:rotate(90deg);
    font-size: 15px;
    color: white;
    cursor:se-resize;
`;

const WidgetTemplate = ({width,height,children}) => {
    return (
        <WidgetTemplateBlock width={width} height={height}>
            <Header>
                <IoIosMenu/>
            </Header>
            {children}
            <Footer>
                <ResizeBtn/>
            </Footer>
        </WidgetTemplateBlock>
    );
};

export default WidgetTemplate;