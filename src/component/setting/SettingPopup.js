import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { IoIosClose } from 'react-icons/io';
import Draggable from 'react-draggable';
import SettingLeftMenu from './SettingLeftMenu';
import SettingFormContainer from '../../container/setting/form/SettingFormContainer';

const Wrap = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 999;
`;

const SettingPopupBlock = styled.div`
	width: 550px;
	height: 400px;
	box-shadow: 0 2px 10px #585858;
	border-radius: 10px;

	@keyframes clickedAnimation {
		0% {
			box-shadow: 0 2px 10px #585858;
		}

		50% {
			box-shadow: 0 2px 14px #2a1019;
		}

		100% {
			box-shadow: 0 2px 10px #585858;
		}
	}

	animation-name: clickedAnimation;
	animation-duration: 0.7s;
	animation-timing-function: ease-out;
	animation-timing-function: linear;
	animation-delay: 0s;
	animation-iteration-count: infinite;
	animation-direction: alternate-reverse;
	animation-fill-mode: forwards;
	animation-play-state: paused;

	&.clicked {
		animation-play-state: running;
	}
`;

const SettingHeader = styled.div`
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 0 10px;
	background: linear-gradient(to bottom, #d8d8d8, #a4a4a4);
	border-radius: 10px 10px 0 0;
`;

const CloseBtn = styled.button`
	width: 14px;
	height: 14px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;
	border: none;
	border-radius: 10px;
	outline: none;
	background: #df0101;
	svg {
		font-size: 17px;
		color: #df0101;
	}
	svg:hover {
		color: white;
	}
`;

const SettingBody = styled.div`
	width: 100%;
	height: 370px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
	background: #e6e6e6;
	border-radius: 0 0 10px 10px;
`;

const SettingContent = styled.div`
	position: relative;
	width: 355px;
	height: 100%;
	border-radius: 5px;
	background: #d8d8d8;
	padding: 20px;
`;

const SettingPopup = ({
	view,
	clicked,
	onClickMenu,
	onClickOuter,
	onShowSettingPopup,
}) => {
	return (
		<Wrap className={cn({ clicked })} onClick={onClickOuter}>
			<Draggable disabled={false} bounds="parent">
				<SettingPopupBlock className={cn({ clicked })}>
					<SettingHeader>
						<CloseBtn onClick={onShowSettingPopup}>
							<IoIosClose />
						</CloseBtn>
					</SettingHeader>
					<SettingBody onMouseDown={(e) => e.stopPropagation()}>
						<SettingLeftMenu view={view} onClickMenu={onClickMenu} />
						<SettingContent>
							<SettingFormContainer view={view} />
						</SettingContent>
					</SettingBody>
				</SettingPopupBlock>
			</Draggable>
		</Wrap>
	);
};

export default SettingPopup;
