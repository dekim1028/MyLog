import React from 'react';
import styled from 'styled-components';
import SettingBtn from '../../common/SettingBtn';

const WidgetToolBlock = styled.div`
    text-align: left;
`;

const Wrap = styled.div`
    margin-bottom:10px;
`;

const Title = styled.h1`
    width: fit-content;
    display: inline-block;
    margin:0;
    margin-right:10px;
    font-size:13px;
    font-weight:normal;
`;

const StyledSelectBox = styled.select`
    outline: none;
    padding: 1px 3px;
    border-radius: 5px;
    border: 1px solid #BDBDBD;
`;

const WidgetList = styled.div`
    display: flex;
    align-items: center;
    margin-top:10px;
`;

const WidgetListItem = styled.label`
    display: flex;
    align-items: center;
    font-size:13px;
    margin-right:10px;
`;

const WidgetTool = ({widget,widgetThema,onChangeThema,onChangeWidget,onClick}) => {
    if(!widget) return null;
    return (
        <WidgetToolBlock>
            <Wrap>
                <Title>테마: </Title>
                <StyledSelectBox value={widgetThema} onChange={onChangeThema}>
                    <option value="light">라이트</option>
                    <option value="dark">다크</option>
                </StyledSelectBox>
                
            </Wrap>
            <Wrap>
                <Title>사용할 위젯:</Title>
                <WidgetList>
                    <WidgetListItem><input type="checkbox" name="weather" checked={widget.weather.show?'checked':''} onChange={onChangeWidget}/>날씨</WidgetListItem>
                    <WidgetListItem><input type="checkbox" name="news" checked={widget.news.show?'checked':''} onChange={onChangeWidget}/>뉴스</WidgetListItem>
                    <WidgetListItem><input type="checkbox" name="calendar" checked={widget.calendar.show?'checked':''} onChange={onChangeWidget}/>달력</WidgetListItem>
                    <WidgetListItem><input type="checkbox" name="memo" checked={widget.memo.show?'checked':''} onChange={onChangeWidget}/>메모</WidgetListItem>
                </WidgetList>
            </Wrap>
            <SettingBtn onClick={onClick}>저장</SettingBtn>
        </WidgetToolBlock>
    );
};

export default WidgetTool;