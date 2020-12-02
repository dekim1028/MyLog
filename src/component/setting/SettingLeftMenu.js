import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

const LeftMenu = styled.div`
    width: 165px;
    height: 100%;
    border-radius: 5px;
    background-color:white;
    overflow:hidden;
`;

const Setting = styled.div`
    width:100%;
    height:50px;
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #E6E6E6;
    font-size: 13px;
    color: #2E2E2E;

    &:hover{
        background-color:#81BEF7;
        border-bottom: 1px solid #81BEF7;
    }

    &.selected{
        background-color:#2E64FE;
        border-bottom: 1px solid #2E64FE;
        color:white;
    }
`;

const SettingLeftMenu = ({view,onClickMenu}) => {
    return (
        <LeftMenu>
            <Setting 
                onClick={()=>onClickMenu('viewColor')}
                className={cn({selected:view==='viewColor'})}
            >
                화면색상
            </Setting>
            <Setting
                onClick={()=>onClickMenu('searchTool')}
                className={cn({selected:view==='searchTool'})}
            >
                검색
            </Setting>
            <Setting
                onClick={()=>onClickMenu('shortcuts')}
                className={cn({selected:view==='shortcuts'})}
            >
                바로가기
            </Setting>
            <Setting
                onClick={()=>onClickMenu('reset')}
                className={cn({selected:view==='reset'})}
            >
                초기화
            </Setting>
        </LeftMenu>
    );
};

export default SettingLeftMenu;