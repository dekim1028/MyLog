import React from 'react';
import styled from 'styled-components';
import WidgetTemplate from './WidgetTemplate';

const Content = styled.div`
    height: 182px;
    padding:10px;
    text-align:left;
`;

const Title = styled.h1`
    margin:0;
    margin-bottom: 8px;
    font-size:17px;
    font-style:italic;
    color:white;
`;

const TextArea = styled.textarea`
    width:100%;
    height:140px;
    border: none;
    outline: none;
    background: transparent;
    resize:none;
    color:white;
    font-size: 14px;

    ::-webkit-scrollbar {
        width: 0px;
    }
`;

const MemoWidget = ({info,onChange}) => {
    if(!info) return null;
    return (
        <WidgetTemplate width="295px" height="222px">
            <Content>
                <Title>Memo</Title>
                <TextArea onChange={onChange}>{info.widget.memo}</TextArea>
            </Content>
        </WidgetTemplate>
    );
};

export default MemoWidget;