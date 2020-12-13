import React from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import WidgetTemplateContainer from '../../../container/content/widget/WidgetTemplateContainer';

const Content = styled.div`
    height: 182px;
    padding: 2px 10px;
`;

const StyledCalendar = styled(Calendar)`
    &.react-calendar{
        background: transparent;
        border: none;
    }

    .react-calendar__navigation{
        height: 35px;
        margin:0;
    }

    .react-calendar__month-view__weekdays__weekday{
        padding: 3px !important;
    }

    .react-calendar__tile{
        padding: 3px !important;
    }

    .react-calendar__navigation button[disabled]{
        background:none;
    }

    .react-calendar__navigation button:enabled:hover, .react-calendar__navigation button:enabled:focus{
        background:none;
        color:white;
    }
`;

const CalenderWidget = ({thema}) => {
    return (
        <WidgetTemplateContainer name="calendar" thema={thema}>
            <Content>
                <StyledCalendar calendarType="US"/>
            </Content>
        </WidgetTemplateContainer>
    );
};

export default CalenderWidget;