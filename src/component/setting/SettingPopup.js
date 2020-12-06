import React, { useState } from 'react';
import styled from 'styled-components';
import {IoIosClose} from 'react-icons/io';
import Draggable from 'react-draggable';
import SettingLeftMenu from './SettingLeftMenu';
import SettingFormContainer from '../../container/setting/form/SettingFormContainer';

const Wrap = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left:0;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const SettingPopupBlock = styled.div`
    width:550px;
    height:400px;
    box-shadow: 0 2px 10px #585858;
    border-radius: 10px;
`;

const SettingHeader = styled.div`
    height: 30px;
    display:flex;
    align-items:center;
    justify-content: flex-end;
    padding: 0 10px;
    background: linear-gradient(to bottom,#D8D8D8,#A4A4A4);
    border-radius: 10px 10px 0 0;
`;

const CloseBtn = styled.button`
    width: 14px;
    height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border:none;
    border-radius: 10px;
    outline:none;
    background:#DF0101;
    svg{
        font-size:17px;
        color:#DF0101;
    }
    svg:hover{
        color:white;
    }
`;

const SettingBody = styled.div`
    width: 100%;
    height: 370px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:10px;
    background: #E6E6E6;
    border-radius: 0 0 10px 10px;
`;

const SettingContent = styled.div`
    position: relative;
    width: 355px;
    height: 100%;
    border-radius: 5px;
    background:#D8D8D8;
    padding: 20px;
`;

const SettingPopup = ({view,onClickMenu,onShowSettingPopup}) => {
    return (
        <Wrap>
            <Draggable disabled={false} bounds="parent">
                <SettingPopupBlock>
                    <SettingHeader>
                        <CloseBtn onClick={onShowSettingPopup}><IoIosClose/></CloseBtn>
                    </SettingHeader>
                    <SettingBody>
                        <SettingLeftMenu view={view} onClickMenu={onClickMenu}/>
                        <SettingContent>
                            <SettingFormContainer view={view}/>
                        </SettingContent>
                    </SettingBody>
                </SettingPopupBlock>
            </Draggable>
        </Wrap>
    );
};

export default SettingPopup;