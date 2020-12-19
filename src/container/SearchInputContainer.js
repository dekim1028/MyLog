import React, { useState } from 'react';
import SearchInput from '../component/SearchInput';
import { useSelector } from 'react-redux';

const SearchInputContainer = () => {
	const [searchText, setSearchText] = useState('');
	const { info } = useSelector(({ info }) => ({
		info: info.info,
	}));

	const onChange = (e) => {
		const { value } = e.target;
		setSearchText(value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (info.searchTool === 'google') {
			const searchUrl = `https://www.google.co.kr/search?q=${searchText}`;
			if (info.openMode === 'new') {
				window.open(searchUrl);
			} else {
				window.location.href = searchUrl;
			}
		} else if (info.searchTool === 'naver') {
			const searchUrl = `https://search.naver.com/search.naver?query=${searchText}`;
			if (info.openMode === 'new') {
				window.open(searchUrl);
			} else {
				window.location.href = searchUrl;
			}
		}
	};

	return (
		<SearchInput
			onChange={onChange}
			onSubmit={onSubmit}
			searchText={searchText}
		/>
	);
};

export default SearchInputContainer;
