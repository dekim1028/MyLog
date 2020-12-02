import React from 'react';
import styled from 'styled-components';
import SearchInputContainer from '../container/SearchInputContainer';
import MenuContainer from '../container/MenuContainer';
import SettingPopupContainer from '../container/setting/SettingPopupContainer';

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

const Main = ({background,settingPopupVisible,onShowSettingPopup}) => {
    if(!background) return null;
    return (
        <MainBlock style={{background}}>
            <Wrap>
                <SearchInputContainer/>
                <MenuContainer onShowSettingPopup={onShowSettingPopup}/>
            </Wrap>
            { settingPopupVisible && <SettingPopupContainer onShowSettingPopup={onShowSettingPopup}/>}
        </MainBlock>
    );
};

export default Main;