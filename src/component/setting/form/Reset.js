import React from 'react';
import styled from 'styled-components';
import SettingBtn from '../../common/SettingBtn';

const ResetBlock = styled.div``;

const Title = styled.h1`
    margin:0;
    margin-bottom:10px;
    font-size:13px;
`;

const Reset = ({onClick}) => {
    return (
        <ResetBlock>
            <Title>초기화시 기존에 변경된 설정 및 추가된 바로가기 메뉴가 모두 삭제됩니다.</Title>
            <SettingBtn onClick={onClick}>초기화...</SettingBtn>
        </ResetBlock>
        
    );
};

export default Reset;