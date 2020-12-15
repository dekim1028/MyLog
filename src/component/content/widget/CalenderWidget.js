import React from 'react';
import styled,{css} from 'styled-components';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import WidgetTemplateContainer from '../../../container/content/widget/WidgetTemplateContainer';

const Content = styled.div`
    padding: 2px 10px;
`;

const StyledCalendar = styled(Calendar)`
    &.react-calendar{
        width:100%;
        background: transparent;
        border: none;
    }

    .react-calendar__navigation{
        height: 35px;
        margin:0;
    }

    .react-calendar__month-view>div>div{
        ${props=>
            props.height&&
            css`
                height:${props.height};
            `
        }
    }

    .react-calendar__month-view__days{
        height:85%;
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

const CalenderWidget = ({thema,calendar}) => {
    if(!calendar) return null;
    return (
        <WidgetTemplateContainer name="calendar" thema={thema}>
            <Content>
                <StyledCalendar calendarType="US" height={`${calendar.height-70}px`}/>
            </Content>
        </WidgetTemplateContainer>
    );
};

export default CalenderWidget;