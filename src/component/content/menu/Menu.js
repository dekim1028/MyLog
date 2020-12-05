import React from 'react';
import styled from 'styled-components';
import {AiTwotoneSetting} from 'react-icons/ai';
import SettingPopupContainer from '../../../container/setting/SettingPopupContainer';

const MenuBlock = styled.div`
    width: 900px;
    height: 500px;
    transition:1s;
    background-color: rgba(255,255,255,0.3);
`;

const MenuBox = styled.div`
    width:100%;
    height:100%;
    padding: 10px 45px;
`;

const MenuList = styled.ul`
    width:100%;
    height:100%;
    margin: 0;
    padding: 0;
    text-align:left;
`;

const MenuListItem = styled.li`
    width: 80px;
    display:inline-block;
    list-style-type:none;
    margin: 10px;
    padding: 5px;
    &:hover{
        border-radius: 5px;
        background-color:rgba(255,255,255,0.3);
    }
`;

const MenuIcon = styled.img`
    width: 40px;
    height: 40px;
    display:block;
    margin: 0 auto;
    border-radius: 10px;
`;

const MenuTitle = styled.h1`
    width: 100%;
    color:#2E2E2E;
    font-size: 13px;
    font-weight: bold;
    margin: 5px 0 0;
    text-align:center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const SettingBtn = styled(AiTwotoneSetting)`
    position: relative;
    top: 10px;
    left: 425px;
    color:rgba(255,255,255,0.6);
    font-size:25px;
    transition: all ease 1s;
    &:hover{
        transform: rotate( 90deg );
        color:rgba(255,255,255,0.9);
    }
`;

const Menu = ({info,menuList,settingPopupVisible,onShowSettingPopup}) => {
    if(!info||!menuList) return null;
    return (
        <MenuBlock>
            <SettingBtn onClick={onShowSettingPopup}/>
            <MenuBox>
                <MenuList>
                    {
                        menuList.map(menu=>(
                            <MenuListItem key={menu.id}>
                                <MenuIcon src={menu.image}/>
                                <MenuTitle>{menu.name}</MenuTitle>
                            </MenuListItem>
                        ))
                    }
                </MenuList>
            </MenuBox>
            { settingPopupVisible && <SettingPopupContainer onShowSettingPopup={onShowSettingPopup}/>}
        </MenuBlock>
    );
};

export default Menu;