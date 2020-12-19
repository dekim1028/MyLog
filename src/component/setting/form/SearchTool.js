import React from 'react';
import styled from 'styled-components';
import SettingBtn from '../../common/SettingBtn';

const SearchToolBlock = styled.div`
	text-align: left;
`;

const Wrap = styled.div`
	margin-bottom: 10px;
`;

const Title = styled.h1`
	width: fit-content;
	display: inline-block;
	margin: 0;
	margin-right: 10px;
	font-size: 13px;
	font-weight: normal;
`;

const StyledSelectBox = styled.select`
	outline: none;
	padding: 1px 3px;
	border-radius: 5px;
	border: 1px solid #bdbdbd;
`;

const SearchTool = ({ searchTool, onChange, onClick }) => {
	if (!searchTool) return null;
	return (
		<SearchToolBlock>
			<Wrap>
				<Title>검색 툴 :</Title>
				<StyledSelectBox
					name="searchTool"
					onChange={onChange}
					value={searchTool.searchTool}
				>
					<option value="google">GOOGLE</option>
					<option value="naver">NAVER</option>
				</StyledSelectBox>
			</Wrap>
			<Wrap>
				<Title>창 모드 :</Title>
				<StyledSelectBox
					name="openMode"
					onChange={onChange}
					value={searchTool.openMode}
				>
					<option value="now">현재 창</option>
					<option value="new">새 창</option>
				</StyledSelectBox>
			</Wrap>
			<SettingBtn onClick={onClick}>저장</SettingBtn>
		</SearchToolBlock>
	);
};

export default SearchTool;
