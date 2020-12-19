import React, { useState, useEffect } from 'react';
import MyLog from '../../../component/setting/form/MyLog';
import { useSelector, useDispatch } from 'react-redux';
import { setCookie } from '../../../lib/cookie';
import { setInfo } from '../../../modules/info';

const MyLogContainer = () => {
	const dispatch = useDispatch();
	const [update, setUpdate] = useState(false);
	const [selected, setSelected] = useState(null);
	const [myLog, setMyLog] = useState([]);
	const [newLog, setNewLog] = useState({
		id: '',
		name: '',
		url: '',
		type: 'mylog',
		checked: false,
	});

	const { info } = useSelector(({ info }) => ({
		info: info.info,
	}));

	const initializeNewLog = () => {
		setSelected(null);
		setNewLog({
			id: '',
			name: '',
			url: '',
			type: 'mylog',
			checked: false,
		});
	};

	const onChange = (e) => {
		const { name, value } = e.target;
		setNewLog({
			...newLog,
			[name]: value,
		});
	};

	const getDomain = (url) => {
		const urlSplit = url
			.replace('http://', '')
			.replace('https://', '')
			.split('/')[0]
			.split('.');
		const start = urlSplit.length > 2 ? 1 : 0;
		const domain = `${urlSplit[start]}.${urlSplit[start + 1]}`;

		return domain;
	};

	const onAdd = () => {
		const domain = getDomain(newLog.url);
		const image = `https://www.google.com/s2/favicons?sz=64&domain_url=${domain}`;

		const basicInfo = {
			...info,
			menu: {
				...info.menu,
				mylog: [
					...info.menu.mylog,
					{
						...newLog,
						id: domain,
						image,
					},
				],
			},
		};

		setCookie('info', JSON.stringify(basicInfo));
		dispatch(setInfo(basicInfo));

		initializeNewLog();

		alert('추가되었습니다.');
	};

	const onUpdate = () => {
		const domain = getDomain(newLog.url);
		const image = `https://www.google.com/s2/favicons?sz=64&domain_url=${domain}`;

		const temp = info.menu.mylog.map((item) => {
			if (item.id === newLog.id) {
				return {
					...newLog,
					id: domain,
					image,
				};
			} else {
				return item;
			}
		});

		const basicInfo = {
			...info,
			menu: {
				...info.menu,
				mylog: temp,
			},
		};

		setCookie('info', JSON.stringify(basicInfo));
		dispatch(setInfo(basicInfo));

		setUpdate(false);
		initializeNewLog();

		alert('수정되었습니다.');
	};

	const onDelete = () => {
		if (newLog.id !== '') {
			const temp = info.menu.mylog.filter((item) => item.id !== newLog.id);

			const basicInfo = {
				...info,
				menu: {
					...info.menu,
					mylog: temp,
				},
			};

			setCookie('info', JSON.stringify(basicInfo));
			dispatch(setInfo(basicInfo));

			setUpdate(false);
			initializeNewLog();

			alert('삭제되었습니다.');
		} else {
			alert('선택된 항목이 없습니다.');
		}
	};

	const onChecked = (target) => {
		setSelected(target.id);
		setNewLog(target);
		setUpdate(true);
	};

	useEffect(() => {
		if (info) {
			setMyLog(info.menu.mylog);
		}
	}, [info]);

	return (
		<MyLog
			newLog={newLog}
			myLog={myLog}
			selected={selected}
			update={update}
			onChange={onChange}
			onAdd={onAdd}
			onUpdate={onUpdate}
			onDelete={onDelete}
			onChecked={onChecked}
		/>
	);
};

export default MyLogContainer;
