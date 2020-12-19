import React, { useState, useEffect } from 'react';
import SearchTool from '../../../component/setting/form/SearchTool';
import { useDispatch, useSelector } from 'react-redux';
import { setCookie } from '../../../lib/cookie';
import { setInfo } from '../../../modules/info';

const SearchToolContainer = () => {
	const dispatch = useDispatch();
	const [searchTool, setSearchTool] = useState(null);

	const { info } = useSelector(({ info }) => ({
		info: info.info,
	}));

	const onChange = (e) => {
		const { name, value } = e.target;
		setSearchTool({
			...searchTool,
			[name]: value,
		});
	};

	const onClick = () => {
		const basicInfo = {
			...info,
			...searchTool,
		};

		setCookie('info', JSON.stringify(basicInfo));
		dispatch(setInfo(basicInfo));
		alert('저장되었습니다.');
	};

	useEffect(() => {
		if (info) {
			setSearchTool({
				searchTool: info.searchTool,
				openMode: info.openMode,
			});
		}
	}, [info]);

	return (
		<SearchTool searchTool={searchTool} onChange={onChange} onClick={onClick} />
	);
};

export default SearchToolContainer;
