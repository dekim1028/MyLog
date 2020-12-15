import React from 'react';
import styled from 'styled-components';
import WidgetTemplateContainer from '../../../container/content/widget/WidgetTemplateContainer';

const Content = styled.div`
    padding:10px;
    text-align:left;
`;

const Title = styled.h1`
    margin:0;
    margin-bottom: 8px;
    font-size:17px;
    font-style:italic;

    &.light{
        color:white;
    }

    &.dark{
        color:black;
    }
`;

const TextArea = styled.textarea`
    width:100%;
    height:85%;
    border: none;
    outline: none;
    background: transparent;
    resize:none;
    font-size: 14px;

    ::-webkit-scrollbar {
        width: 0px;
    }

    &.light{
        color:white;
    }

    &.dark{
        color:black;
    }
`;

const MemoWidget = ({info,thema,onChange}) => {
    if(!info) return null;
    return (
        <WidgetTemplateContainer name="memo" thema={thema}>
            <Content style={{height:`${info.widget.memo.height-25}px`}}>
                <Title className={thema}>Memo</Title>
                <TextArea className={thema} onChange={onChange} value={info.widget.memo.content}>{info.widget.memo.content}</TextArea>
            </Content>
        </WidgetTemplateContainer>
    );
};

export default MemoWidget;