import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import WidgetTemplateContainer from '../../../container/content/widget/WidgetTemplateContainer';

const Content = styled.div`
    height: 182px;
    display: flex;
    align-items: center;
`;

const CategoryWrap = styled.div`
    width: 100px;
    height: 100%;
    text-align: left;

    &.light{
        border-right: 1px dashed white;
    }
    &.dark{
        border-right: 1px dashed black;
    }
`;

const Category = styled.div`
    height: calc(100%/6);
    height: -webkit-calc(100%/6);
    height: -moz-calc(100%/6);
    padding: 7px 10px;
    font-size: 14px;
    cursor:pointer;

    &.light{
        color: white;

        &:hover{
            background-color:rgba(255,255,255,0.15);
        }

        &.selected{
            font-weight:800;
            background-color:rgba(255,255,255,0.15);
        }
    }

    &.dark{
        color: black;

        &:hover{
            background-color:rgba(0,0,0,0.15);
        }

        &.selected{
            font-weight:800;
            background-color:rgba(0,0,0,0.15);
        }
    }
`;

const NewsWrap = styled.div`
    width: 510px;
    height: 100%;
    overflow-x:auto;

    ::-webkit-scrollbar {
        width: 0px;
    }
`;

const NewsList = styled.ul`
    width: 100%;
    margin: 0;
    padding: 0;
    text-align: left;
`;

const NewsItem = styled.li`
    display: flex;
    align-items: center;
    padding: 0 10px;
    margin:15px 0;
    list-style:none;

    &.light{
        color: white;
    }

    &.dark{
        color: black;
    }
`;

const Thumbnail = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 8px;
    cursor:pointer;
`;

const NewsText = styled.dl`
    margin: 0;
    margin-left: 5px;
    .title{
        width: 410px;
        margin: 0;
        font-weight: bold;
        margin-bottom: 5px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        cursor:pointer;

        &:hover{
            text-decoration:underline;
        }
    }
    .description{
        width: 420px;
        max-height: 32px;
        margin: 0;
        font-size:13px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }
`;

const NewsWidget = ({category,newsData,thema,onClick,goToURL}) => {
    if(!newsData) return null;
    return (
        <WidgetTemplateContainer name="news" thema={thema}>
            <Content>
                <CategoryWrap className={thema}>
                    <Category
                        className={cn(category==='all'?'selected':'',thema)}
                        onClick={()=>onClick('all')}
                    >
                        전체
                    </Category>
                    <Category
                        className={cn(category==='business'?'selected':'',thema)}
                        onClick={()=>onClick('business')}
                    >
                        비즈니스
                    </Category>
                    <Category
                        className={cn(category==='entertainment'?'selected':'',thema)}
                        onClick={()=>onClick('entertainment')}
                    >
                        엔터테인먼트
                    </Category>
                    <Category
                        className={cn(category==='sports'?'selected':'',thema)}
                        onClick={()=>onClick('sports')}
                    >
                        스포츠
                    </Category>
                    <Category
                        className={cn(category==='science'?'selected':'',thema)}
                        onClick={()=>onClick('science')}
                    >
                        과학
                    </Category>
                    <Category
                        className={cn(category==='technology'?'selected':'',thema)}
                        onClick={()=>onClick('technology')}
                    >
                        기술
                    </Category>
                </CategoryWrap>
                <NewsWrap>
                    <NewsList>
                        {
                            newsData.map(news=>(
                                <NewsItem key={news.url} className={thema}>
                                    <Thumbnail src={news.urlToImage?news.urlToImage:'/not_found_img.png'} onClick={()=>goToURL(news.url)} alt="썸네일"/>
                                    <NewsText>
                                        <dt className="title" onClick={()=>goToURL(news.url)}>{news.title}</dt>
                                        <dd className="description">{news.description}</dd>
                                    </NewsText>
                                </NewsItem>
                            ))
                        }
                    </NewsList>
                </NewsWrap>
            </Content>
        </WidgetTemplateContainer>
    );
};

export default NewsWidget;