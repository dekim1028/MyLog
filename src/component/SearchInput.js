import React from 'react';
import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';

const SearchInputBlock = styled.form`
    width:500px;
    height: 3em;
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 0 10px;
    background:white;
    box-shadow:0 1px 6px rgba(32, 33, 36, .28);
    border-radius: 20px;
    overflow:hidden;
    @media (max-width:768px){
        width:100%;
    }
`;

const InputBox = styled.input`
    width: 90%;
    height: 100%;
    padding: 0 4px;
    color: #424242;
    font-size: 15px;
    border: none;
    outline: none;
`;

const SearchBtn = styled.button`
    background: transparent;
    border: none;
    outline:none;
    cursor:pointer;
    svg{
        color: gray;
        font-size: 20px;
        cursor:pointer;
    }
`;

const SearchInput = ({onChange,onSubmit,searchText}) => {
    return (
        <SearchInputBlock onSubmit={onSubmit}>
            <InputBox type="text" name="searchText" value={searchText} onChange={onChange}/>
            <SearchBtn><FaSearch/></SearchBtn>
        </SearchInputBlock>
    );
};

export default SearchInput;