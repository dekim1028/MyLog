import React from 'react';
import styled from 'styled-components';
import SearchInputContainer from '../container/SearchInputContainer';
import ContentContainer from '../container/content/ContentContainer';
import SettingPopupContainer from '../container/setting/SettingPopupContainer';

const MainBlock = styled.div`
    height: 100vh;
`;

const Wrap = styled.div`
    width: 100%;
    margin: 0 auto;
    text-align: center;
    padding-top: 10em;
    @media (max-width:768px){
        width:80%;
    }
`;

const Main = ({background}) => {
    if(!background) return null;
    return (
        <MainBlock style={{background}}>
            <Wrap>
                <SearchInputContainer/>
                <ContentContainer background={background}/>
            </Wrap>
        </MainBlock>
    );
};

export default Main;