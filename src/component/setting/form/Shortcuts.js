import React from 'react';
import styled from 'styled-components';
import SettingBtn from '../../common/SettingBtn';

const ShortcutsBlock = styled.div``;

const ShortcutsWrap = styled.div`
    width:100%;
    height: 275px;
    overflow-y: auto;
    background-color:white;
    border-radius:5px;
    padding: 10px;
`;

const Wrap = styled.div`
    padding: 10px 0;
    border-bottom: 1px solid #D8D8D8;
`;

const Title = styled.h1`
    margin:0;
    margin-right:10px;
    font-size:13px;
    font-weight: 500;
`;

const Icon = styled.label`
    display:inline-block;
    margin: 5px 0;
    .text{
        width:40px;
        text-align: center;
        font-size: 10px;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

const IconCheckbox = styled.input`
    position: relative;
    left: -10px;
`;

const IconImage = styled.img`
    width: 40px;
    height: 40px;
`;

const ShortcutIcon = ({item,onChange,checkExist})=>{
    return (
        <Icon>
            <IconImage src={item.image} alt={item.id}/>
            <IconCheckbox type="checkbox" name={item.type} onChange={onChange} value={JSON.stringify(item)} checked={checkExist(item)?'checked':''}/>
            <div className="text">{item.name}</div>
        </Icon>
    )
};

const Shortcuts = ({shortcutsList,onChange,onClick,checkExist}) => {
    if(!shortcutsList) return null;
    return (
        <ShortcutsBlock>
            <ShortcutsWrap>
                <Wrap>
                    <Title>포탈</Title>
                    {
                        shortcutsList.portal.map(item=>(
                            <ShortcutIcon key={item.id} item={item} onChange={onChange} checkExist={checkExist}/>
                        ))
                    }
                </Wrap>
                <Wrap>
                    <Title>SNS</Title>
                    {
                        shortcutsList.sns.map(item=>(
                            <ShortcutIcon key={item.id} item={item} onChange={onChange} checkExist={checkExist}/>
                        ))
                    }
                </Wrap>
                <Wrap>
                    <Title>스트리밍</Title>
                    {
                        shortcutsList.streaming.map(item=>(
                            <ShortcutIcon key={item.id} item={item} onChange={onChange} checkExist={checkExist}/>
                        ))
                    }
                </Wrap>
                <Wrap>
                    <Title>블로그</Title>
                    {
                        shortcutsList.blog.map(item=>(
                            <ShortcutIcon key={item.id} item={item} onChange={onChange} checkExist={checkExist}/>
                        ))
                    }
                </Wrap>
                <Wrap>
                    <Title>MyLog</Title>
                    {
                        shortcutsList.mylog.map(item=>(
                            <ShortcutIcon key={item.id} item={item} onChange={onChange} checkExist={checkExist}/>
                        ))
                    }
                </Wrap>
            </ShortcutsWrap>
            <SettingBtn onClick={onClick}>선택항목 수정</SettingBtn>
        </ShortcutsBlock>
    );
};

export default Shortcuts;