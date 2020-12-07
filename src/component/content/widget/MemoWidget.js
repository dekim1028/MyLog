import React from 'react';
import styled from 'styled-components';
import {IoIosMenu} from 'react-icons/io';

const MemoWidgetBlock = styled.div`
    width:50%;
    height : 220px;
    margin: 5px 5px 10px;
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

const Content = styled.div`
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
    height:145px;
    border: none;
    outline: none;
    background: transparent;
    resize:none;
    color:white;
    font-size: 14px;
`;

const MemoWidget = ({info,onChange}) => {
    if(!info) return null;
    return (
        <MemoWidgetBlock>
            <Header>
                <IoIosMenu/>
            </Header>
            <Content>
                <Title>Memo</Title>
                <TextArea onChange={onChange}>{info.widget.memo}</TextArea>
            </Content>
        </MemoWidgetBlock>
    );
};

export default MemoWidget;