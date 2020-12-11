import React from 'react';
import styled,{css} from 'styled-components';
import Draggable from 'react-draggable';
import {IoIosMenu} from 'react-icons/io';
import {GiResize} from 'react-icons/gi';

const WidgetTemplateBlock = styled.div`
    ${props=>
        css`
            width:${props.width?props.width:"auto"};
            height:${props.height?props.height:"auto"};
        `
    }
    background-color:rgba(255,255,255,0.4);
    border-radius:4px;
    overflow:hidden;
    position:absolute;
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

const WidgetTemplate = ({widgetData,onDrag,onDragPrevent,onResizing,onStop,children}) => {
    if(!widgetData) return null;
    return (
        <Draggable onDrag={onDrag} onStop={onStop} position={{x:widgetData.posX,y:widgetData.posY}}>
            <WidgetTemplateBlock width={`${widgetData.width}px`} height={`${widgetData.height}px`}>
                    <Header>
                        <IoIosMenu/>
                    </Header>
                    <div onMouseDown={onDragPrevent}>
                        {children}
                        <Footer>
                            <Draggable onDrag={onResizing} onStop={onStop}>
                                <ResizeBtn/>
                            </Draggable>
                        </Footer>
                    </div>
            </WidgetTemplateBlock>
        </Draggable>
    );
};

export default WidgetTemplate;