import React, { useEffect, useState } from 'react';
import CalenderWidget from '../../../component/content/widget/CalenderWidget';
import { useSelector } from 'react-redux';

const CalenderWidgetContainer = ({ thema }) => {
	const [calendar, setCalendar] = useState(null);

	const { info } = useSelector(({ info }) => ({
		info: info.info,
	}));

	useEffect(() => {
		if (info) {
			setCalendar(info.widget.calendar);
		}
	}, [setCalendar, info]);

	return <CalenderWidget thema={thema} calendar={calendar} />;
};

export default CalenderWidgetContainer;
