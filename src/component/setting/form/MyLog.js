import React from 'react';
import styled from 'styled-components';
import { RiAddLine, RiEditLine } from 'react-icons/ri';
import cn from 'classnames';
import SettingBtn from '../../common/SettingBtn';

const MyLogBlock = styled.div`
	text-align: left;
`;

const InputBlock = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
	overflow: hidden;
`;

const InputBox = styled.input`
	width: 282px;
	height: 25px;
	border: none;
	outline: none;
	padding: 0 7px 0 5px;
	&:first-child {
		margin-bottom: 2px;
	}
`;

const AddBtn = styled.button`
	height: 50px;
	border: none;
	outline: none;
	background-color: #a4a4a4;
	color: white;
	font-size: 20px;
	&:hover {
		background-color: #bdbdbd;
	}
`;

const Wrap = styled.div`
	width: 100%;
	height: 200px;
	overflow-y: auto;
	background-color: white;
	border-radius: 5px;
	padding: 10px;
	margin: 15px 0;
`;

const Icon = styled.label`
	display: inline-block;
	margin: 5px 5px;
	.text {
		width: 40px;
		text-align: center;
		font-size: 10px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	&.checked {
		font-weight: bold;
	}
`;

const IconWrap = styled.div`
	width: 40px;
	height: 40px;
	margin-bottom: 3px;
	overflow: hidden;
	border-radius: 5px;
`;

const IconImage = styled.img`
	width: 40px;
	height: 40px;
`;

const MyLogIcon = ({ item, selected, onChecked }) => {
	return (
		<Icon
			className={cn({ checked: item.id === selected })}
			onClick={() => onChecked(item)}
		>
			<IconWrap>
				<IconImage src={item.image} alt={item.id} />
			</IconWrap>
			<div className="text">{item.name}</div>
		</Icon>
	);
};

const MyLog = ({
	newLog,
	myLog,
	selected,
	update,
	onChange,
	onAdd,
	onUpdate,
	onDelete,
	onChecked,
}) => {
	if (!myLog) return null;
	return (
		<MyLogBlock>
			<InputBlock>
				<div>
					<InputBox
						type="text"
						name="name"
						placeholder="사이트 이름"
						value={newLog.name}
						onChange={onChange}
					/>
					<InputBox
						type="text"
						name="url"
						placeholder="사이트 주소"
						value={newLog.url}
						onChange={onChange}
					/>
				</div>
				{update ? (
					<AddBtn onClick={onUpdate}>
						<RiEditLine />
					</AddBtn>
				) : (
					<AddBtn onClick={onAdd}>
						<RiAddLine />
					</AddBtn>
				)}
			</InputBlock>
			<Wrap>
				{myLog.map((item) => (
					<MyLogIcon
						key={item.id}
						item={item}
						selected={selected}
						onChecked={onChecked}
					/>
				))}
			</Wrap>
			<SettingBtn onClick={onDelete}>선택항목 삭제</SettingBtn>
		</MyLogBlock>
	);
};

export default MyLog;
