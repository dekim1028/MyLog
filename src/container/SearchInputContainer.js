import React, { useState } from 'react';
import SearchInput from '../component/SearchInput';
import { withRouter } from 'react-router-dom';

const SearchInputContainer = () => {
    const [searchText,setSearchText] = useState('');

    const onChange = e =>{
        const {value}=e.target;
        setSearchText(value);
    };

    const onSubmit = e =>{
        e.preventDefault();
        window.location.href = `https://www.google.co.kr/search?q=${searchText}`;
    }

    return (
        <SearchInput
            onChange={onChange}
            onSubmit={onSubmit}
            searchText={searchText}
        />
    );
};

export default SearchInputContainer;