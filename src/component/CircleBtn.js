import React from 'react';
import styled from 'styled-components';
import SettingBtn from './common/SettingBtn';

const CircleBtnBlock = styled.div`
    width:80px;
    height:80px;
    margin: 0 auto;
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

const CircleBtn = ({background,onChangeContent}) => {
    return (
        <CircleBtnBlock onClick={onChangeContent}>
            <InnerCircleBtn style={{background}}/>
        </CircleBtnBlock>
    );
};

export default CircleBtn;