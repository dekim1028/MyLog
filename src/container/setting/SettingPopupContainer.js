import React, { useState } from 'react';
import SettingPopup from '../../component/setting/SettingPopup';

const SettingPopupContainer = ({ onShowSettingPopup }) => {
	const [clicked, setClicked] = useState(false);
	const [view, setView] = useState('viewColor');

	const onClickOuter = (e) => {
		if (e.target === e.currentTarget) {
			setClicked(true);
			setTimeout(() => {
				setClicked(false);
			}, 700);
		}
	};

	const onClickMenu = (selected) => {
		setView(selected);
	};

	return (
		<SettingPopup
			view={view}
			clicked={clicked}
			onClickMenu={onClickMenu}
			onClickOuter={onClickOuter}
			onShowSettingPopup={onShowSettingPopup}
		/>
	);
};

export default SettingPopupContainer;
