import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import WidgetTemplate from '../../../component/content/widget/WidgetTemplate';
import { setCookie } from '../../../lib/cookie';
import { setInfo } from '../../../modules/info';
import toPX from 'to-px';

const WidgetTemplateContainer = ({ name, thema, children }) => {
	const dispatch = useDispatch();
	const [widget, setWidget] = useState(null); /* 위젯 전체 */
	const [widgetData, setWidgetData] = useState(null); /* name에 해당하는 위젯 */
	const content_width = toPX('80vw') - 40; /* content 가로길이 */
	const content_height = toPX('63vh') - 40; /* content 세로길이 */

	const { info } = useSelector(({ info }) => ({
		info: info.info,
	}));

	const onDrag = (data, pos) => {
		// 1. 범위 벗어나는 경우 원래 위치로 초기화
		let posX = pos.x < 0 ? 0 : pos.x; //왼쪽
		let posY = pos.y < 0 ? 0 : pos.y; //위

		if (posX > content_width - widgetData.width) {
			//오른쪽
			posX = content_width - widgetData.width;
		}

		if (posY > content_height - widgetData.height) {
			//아래
			posY = content_height - widgetData.height;
		}

		// 2. 이동방향
		let dir = null;

		if (pos.deltaX > 0) {
			dir = 'right';
		} else if (pos.deltaX < 0) {
			dir = 'left';
		}

		if (pos.deltaY > 0) {
			dir = 'down';
		} else if (pos.deltaY < 0) {
			dir = 'up';
		}

		// 3. (가상으로) 위치이동
		onMovePosition(dir, posX, posY);

		// 4. 위치 중복 여부 확인
		if (
			Object.keys(onCheckOverlapping({ thisX: posX, thisY: posY })).length > 0
		) {
			// 해당 위치가 다른 위젯과 중복될 경우 원래 좌표로 초기화
			posX = info.widget[name].posX;
			posY = info.widget[name].posY;
		}

		setWidgetData({ ...widgetData, posX, posY });
	};

	const onDragPrevent = (e) => {
		e.stopPropagation();
	};

	const onResizing = (data, pos) => {
		let width = widgetData.width + pos.deltaX;
		let height = widgetData.height + pos.deltaY;

		// 1. resizing 가능 범위 제한
		if (widgetData.posX + width > content_width) {
			width = content_width - widgetData.posX;
		} else if (width < widgetData.minWidth) {
			width = widgetData.minWidth;
		}

		if (widgetData.posY + height > content_height) {
			height = content_height - widgetData.posY;
		} else if (height <= widgetData.minHeight) {
			height = widgetData.minHeight;
		}

		// 2. 위치 중복 여부 확인
		if (
			Object.keys(onCheckOverlapping({ thisWidth: width, thisHeight: height }))
				.length > 0
		) {
			width = widgetData.width;
			height = widgetData.height;
		}

		setWidgetData({ ...widgetData, width, height });
	};

	const onCheckOverlapping = ({
		thisX = widgetData.posX /* 변경된 x 좌표 */,
		thisY = widgetData.posY /* 변경된 y 좌표 */,
		thisWidth = widgetData.width /* 변경된 위젯 가로길이 */,
		thisHeight = widgetData.height /* 변경된 위젯 세로길이 */,
		exceptKeys = [name] /* 비교 제외 항목 */,
	}) => {
		let overlapArr = {};
		const thisH = thisX + thisWidth;
		const thisV = thisY + thisHeight;

		for (let key in widget) {
			if (!exceptKeys.includes(key) && widget[key].show) {
				const targetX = widget[key].posX;
				const targetY = widget[key].posY;
				const targetH = targetX + widget[key].width;
				const targetV = targetY + widget[key].height;

				//가로 겹칩여부
				const checkHorizontal =
					(thisX >= targetX && thisH <= targetH) ||
					(thisX <= targetX && thisH <= targetH && thisH >= targetX) ||
					(thisX <= targetH && thisH >= targetH) ||
					(thisX >= targetX && thisX <= targetH && thisH >= targetH);
				//세로 겹침여부
				const checkVertical =
					(thisY >= targetY && thisV <= targetV) ||
					(thisY <= targetY && thisV <= targetV && thisV >= targetY) ||
					(thisY <= targetY && thisV >= targetV) ||
					(thisY >= targetY && thisY <= targetV && thisV >= targetV);

				//겹치면 true
				if (checkHorizontal && checkVertical) {
					overlapArr = { ...overlapArr, [key]: widget[key] };
				}
			}
		}
		return overlapArr;
	};

	const onMovePosition = (dir, thisX, thisY) => {
		// 1. 가상으로 이동한 좌표와 겹치는 위젯 리스트 조회
		let overlapArr = onCheckOverlapping({
			thisX,
			thisY,
			thisWidth: widgetData.width,
			thisHeight: widgetData.height,
		});

		// 2. 겹치는 위젯들 좌표 변경
		if (dir === 'right') {
			for (let key in overlapArr) {
				const newX = overlapArr[key].posX - widgetData.width - 10;
				const checkOverlap =
					Object.keys(
						onCheckOverlapping({
							thisX: newX,
							thisY: overlapArr[key].posY,
							thisWidth: overlapArr[key].width,
							thisHeight: overlapArr[key].height,
							exceptKeys: [name, key],
						}),
					).length > 0
						? true
						: false;

				if (newX >= 0 && !checkOverlap) {
					overlapArr[key].posX = newX;
				}
			}
		} else if (dir === 'left') {
			for (let key in overlapArr) {
				const newX = overlapArr[key].posX + widgetData.width + 10;
				const checkOverlap =
					Object.keys(
						onCheckOverlapping({
							thisX: newX,
							thisY: overlapArr[key].posY,
							thisWidth: overlapArr[key].width,
							thisHeight: overlapArr[key].height,
							exceptKeys: [name, key],
						}),
					).length > 0
						? true
						: false;

				if (newX <= content_width - overlapArr[key].width && !checkOverlap) {
					overlapArr[key].posX = newX;
				}
			}
		} else if (dir === 'down') {
			for (let key in overlapArr) {
				const newY = overlapArr[key].posY - widgetData.height - 11;
				const checkOverlap =
					Object.keys(
						onCheckOverlapping({
							thisX: overlapArr[key].posX,
							thisY: newY,
							thisWidth: overlapArr[key].width,
							thisHeight: overlapArr[key].height,
							exceptKeys: [name, key],
						}),
					).length > 0
						? true
						: false;

				if (newY >= 0 && !checkOverlap) {
					overlapArr[key].posY = newY;
				}
			}
		} else if (dir === 'up') {
			for (let key in overlapArr) {
				const newY = overlapArr[key].posY + widgetData.height + 11;
				const checkOverlap =
					Object.keys(
						onCheckOverlapping({
							thisX: overlapArr[key].posX,
							thisY: newY,
							thisWidth: overlapArr[key].width,
							thisHeight: overlapArr[key].height,
							exceptKeys: [name, key],
						}),
					).length > 0
						? true
						: false;

				if (newY <= content_height - overlapArr[key].height && !checkOverlap) {
					overlapArr[key].posY = newY;
				}
			}
		}

		const basicWidget = {
			...widget,
			...overlapArr,
		};

		setWidget(basicWidget);
	};

	const onStop = () => {
		// 1. 위치 또는 사이즈 변경 여부 확인
		const changePos =
			info.widget[name].posX !== widgetData.posX ||
			info.widget[name].posY !== widgetData.posY;
		const changeSize =
			info.widget[name].width !== widgetData.width ||
			info.widget[name].height !== widgetData.height;

		if (changePos || changeSize) {
			// 2-1. 변경되었을 경우 데이터 업데이트
			const basicInfo = {
				...info,
				widget: {
					...widget,
					[name]: widgetData,
				},
			};

			setCookie('info', JSON.stringify(basicInfo));
			dispatch(setInfo(basicInfo));
		} else {
			//2-2. 변경되지 않은 경우 데이터 원복
			setWidget(info.widget);
			setWidgetData(info.widget[name]);
		}
	};

	useEffect(() => {
		//위젯 기본정보 세팅
		if (info) {
			setWidget(info.widget);
			setWidgetData(info.widget[name]);
		}
	}, [info, name]);

	useEffect(() => {
		if (widgetData) {
			const showList = Object.keys(widget).filter((key) => widget[key].show);
			const count = showList.length; /* 사용중인 위젯 개수 */
			const index = showList.indexOf(name); /* 위젯의 index */

			// 첫 접속시 해상도에 따라 크기조절
			if (
				widgetData.width === 0 &&
				widgetData.height === 0 &&
				widgetData.posX === 0
			) {
				const width = content_width / count - 10;
				const height = content_height;
				const posX = width * index + 10 * index;

				const basicInfo = {
					...info,
					widget: {
						...widget,
						[name]: {
							...widgetData,
							width,
							height,
							posX,
						},
					},
				};

				setCookie('info', JSON.stringify(basicInfo));
				dispatch(setInfo(basicInfo));
			}
		}
	}, [dispatch, info, name, widgetData, widget, content_width, content_height]);

	return (
		<WidgetTemplate
			widgetData={widgetData}
			thema={thema}
			onDrag={onDrag}
			onDragPrevent={onDragPrevent}
			onResizing={onResizing}
			onStop={onStop}
			children={children}
		/>
	);
};

export default WidgetTemplateContainer;
