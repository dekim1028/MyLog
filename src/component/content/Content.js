import React from 'react';
import CircleBtn from '../CircleBtn';
import WidgetContainer from '../../container/content/widget/WidgetContainer';
import MenuContainer from '../../container/content/menu/MenuContainer';
import styled from 'styled-components';

const ContentBlock = styled.div`
    height: 100%;
`;

const ContentWrap = styled.div`
    width: 900px;
    height: 500px;
    margin:30px auto;
    overflow:hidden;
    border-radius: 25px;
`;

const Wrap = styled.div`
    width: 1900px;
    display:flex;
`;

const Content = ({background,margin,onChangeContent}) => {
    return (
        <ContentBlock>
            <ContentWrap>
                <Wrap>
                    <WidgetContainer margin={margin}/>
                    <MenuContainer/>
                </Wrap>
            </ContentWrap>
            <CircleBtn
                background={background}
                onChangeContent={onChangeContent}
            />
        </ContentBlock>
    );
};

export default Content;