import React from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar'
import {IoIosMenu} from 'react-icons/io';
import 'react-calendar/dist/Calendar.css';

const CalenderWidgetBlock = styled.div`
    width:50%;
    height : 220px;
    margin: 5px 5px 10px;
    background-color:rgba(255,255,255,0.4);
    border-radius:4px;
    overflow:hidden;
`;

const Header = styled.div`
    width:100%;
    height: 25px;
    background-color:rgba(255,255,255,0.3);

    svg{
        font-size: 25px;
        color: white;
    }
`;

const Content = styled.div`
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
`;

const CalenderWidget = () => {
    return (
        <CalenderWidgetBlock>
            <Header>
                <IoIosMenu/>
            </Header>
            <Content>
                <StyledCalendar />
            </Content>
        </CalenderWidgetBlock>
    );
};

export default CalenderWidget;