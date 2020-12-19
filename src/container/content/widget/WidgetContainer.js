import React from 'react';
import Widget from '../../../component/content/widget/Widget';
import { useSelector } from 'react-redux';

const WidgetContainer = ({ margin }) => {
	const { info } = useSelector(({ info }) => ({
		info: info.info,
	}));

	return <Widget margin={margin} info={info} />;
};

export default WidgetContainer;
