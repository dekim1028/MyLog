import React from 'react';
import styled, { css } from 'styled-components';
import Draggable from 'react-draggable';
import { IoIosMenu } from 'react-icons/io';
import { GiResize } from 'react-icons/gi';

const WidgetTemplateBlock = styled.div`
	${(props) =>
		css`
			width: ${props.width ? props.width : 'auto'};
			height: ${props.height ? props.height : 'auto'};
		`}

	border-radius:4px;
	overflow: hidden;
	position: absolute;

	&.light {
		background-color: rgba(255, 255, 255, 0.4);
	}

	&.dark {
		background-color: rgba(0, 0, 0, 0.4);
	}
`;

const Header = styled.div`
	width: 100%;
	height: 25px;
	cursor: move;

	svg {
		font-size: 25px;
		color: white;
	}

	&.light {
		background-color: rgba(255, 255, 255, 0.3);
		svg {
			color: white;
		}
	}

	&.dark {
		background-color: rgba(0, 0, 0, 0.3);
		svg {
			color: black;
		}
	}
`;

const Footer = styled.div`
	text-align: right;
`;

const ResizeBtn = styled(GiResize)`
	position: fixed;
	bottom: 0;
	right: 0;
	transform: rotate(90deg);
	font-size: 15px;
	cursor: se-resize;

	&.light {
		color: white;
	}

	&.dark {
		color: black;
	}
`;

const WidgetTemplate = ({
	widgetData,
	thema,
	onDrag,
	onDragPrevent,
	onResizing,
	onStop,
	children,
}) => {
	if (!widgetData) return null;
	return (
		<Draggable
			onDrag={onDrag}
			onStop={onStop}
			position={{ x: widgetData.posX, y: widgetData.posY }}
		>
			<WidgetTemplateBlock
				className={thema}
				width={`${widgetData.width}px`}
				height={`${widgetData.height}px`}
			>
				<Header className={thema}>
					<IoIosMenu />
				</Header>
				<div onMouseDown={onDragPrevent}>
					{children}
					<Footer>
						<Draggable onDrag={onResizing} onStop={onStop}>
							<ResizeBtn className={thema} />
						</Draggable>
					</Footer>
				</div>
			</WidgetTemplateBlock>
		</Draggable>
	);
};

export default WidgetTemplate;
