import React from 'react';
import styled from 'styled-components';
import {AiTwotoneSetting} from 'react-icons/ai';
import SearchInputContainer from '../container/SearchInputContainer';

const MainBlock = styled.div`
    height: 100vh;
`;

const Wrap = styled.div`
    width: 500px;
    margin: 0 auto;
    text-align: center;
    padding-top: 12em;
    @media (max-width:768px){
        width:80%;
    }
`;

const SettingBlock = styled.div`
    width: 500px;
    position: relative;
    top: 35vh;
    @media (max-width:768px){
        width:100%;
    }
`;

const MenuBlock = styled.div`
    width:270px;
    height:270px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    border-radius:135px;
    background:gray;
    transition:0.6s;
`;

const CircleBtn = styled.div`
    width:80px;
    height:80px;
    position: absolute;
    top: 35%;
    left: 42%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:40px;
    background:white;

    @keyframes btnAnimation {
        0% {
            box-shadow: 0px 0px 0px white;
        }

        50% {
            box-shadow: 0px 0px 20px white;
        }
        
        100% {
            box-shadow: 0px 0px 0px white;
        }
    }
    animation-name: btnAnimation;
    animation-duration: 3.5s;
    animation-timing-function:ease-out;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
    animation-fill-mode: forwards;
    animation-play-state: running;
`;

const InnerCircleBtn = styled.div`
    width:50px;
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:25px;
`;

const SettingBtn = styled(AiTwotoneSetting)`
    color:white;
    font-size:30px;
    transition:0.6s;
`;

const MenuList = styled.ul`
    width:100%;
    height:100%;
    transition:0.6s;
`;

const MenuItem = styled.li`
    list-style-type:none;
`;

const Menu = styled.div`
    width: 40px;
`;

const MenuIcon = styled.div`
    width:100%;
    height: 40px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 10px;
    background:white;
`;

const MenuTitle = styled.h1`
    font-size: 13px;
    font-weight: 500;
    margin: 5px 0;
`;

const Main = ({info,menuVisible,onClick}) => {
    if(!info) return null;
    return (
        <MainBlock style={{background:info.background}}>
            <Wrap>
                <SearchInputContainer/>
                <SettingBlock>
                    <MenuBlock style={{background:menuVisible?"rgb(255,255,255,0.2)":"rgb(255,255,255,0)"}}>
                        <MenuList style={{opacity:menuVisible?1:0}}>
                            {
                                info.menu.map(menu=>(
                                    <MenuItem>
                                        <Menu style={{transform:"rotate(0) translateY(20px) translateX(73px)"}}>
                                            <MenuIcon>
                                                
                                            </MenuIcon>
                                            <MenuTitle>메뉴명</MenuTitle>
                                        </Menu>
                                    </MenuItem>
                                ))
                            }
                        </MenuList>
                    </MenuBlock>
                    <CircleBtn onClick={onClick}>
                        <InnerCircleBtn style={{background:info.background}}>
                            <SettingBtn style={{opacity:menuVisible?1:0}}/>
                        </InnerCircleBtn>
                    </CircleBtn>
                </SettingBlock>
            </Wrap>
        </MainBlock>
    );
};

export default Main;