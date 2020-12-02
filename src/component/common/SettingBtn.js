import React from 'react';
import styled from 'styled-components';

const ButtonBlock = styled.button`
    position:absolute;
    bottom: 20px;
    right: 20px;
    background-color:white;
    border: none;
    outline:none;
    font-size: 12px;
    padding: 3px 15px;
    border-radius: 5px;
    box-shadow: 0px 1px 1px grey;
    cursor: pointer;
    
    &:hover{
        background: #F2F2F2;
    }
`;

const SettingBtn = props => {
    return (
        <ButtonBlock {...props}/>
        
    );
};

export default SettingBtn;