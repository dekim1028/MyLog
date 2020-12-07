import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import {IoIosMenu} from 'react-icons/io';

const NewsWidgetBlock = styled.div`
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
    height:calc(100%-25px);
    height:-webkit-calc(100% - 25px);
    height:-moz-calc(100% - 25px);
    display: flex;
    align-items: center;
`;

const CategoryWrap = styled.div`
    width: 100px;
    height: 100%;
    text-align: left;
    border-right: 1px dashed white;
`;

const Category = styled.div`
    height: calc(100%/6);
    height: -webkit-calc(100%/6);
    height: -moz-calc(100%/6);
    padding: 7px 10px;
    color: white;
    font-size: 14px;
    cursor:pointer;

    &:hover{
        background-color:rgba(255,255,255,0.15);
    }

    &.selected{
        font-weight:800;
        background-color:rgba(255,255,255,0.15);
    }
`;

const NewsWrap = styled.div`
    width: 510px;
    height: 100%;
    overflow-x:auto;
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
    color:white;
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

const NewsWidget = ({category,newsData,onClick,goToURL}) => {
    if(!newsData) return null;
    return (
        <NewsWidgetBlock>
            <Header>
                <IoIosMenu/>
            </Header>
            <Content>
                <CategoryWrap>
                    <Category
                        className={cn(category==='all'?'selected':'')}
                        onClick={()=>onClick('all')}
                    >
                        전체
                    </Category>
                    <Category
                        className={cn(category==='business'?'selected':'')}
                        onClick={()=>onClick('business')}
                    >
                        비즈니스
                    </Category>
                    <Category
                        className={cn(category==='entertainment'?'selected':'')}
                        onClick={()=>onClick('entertainment')}
                    >
                        엔터테인먼트
                    </Category>
                    <Category
                        className={cn(category==='sports'?'selected':'')}
                        onClick={()=>onClick('sports')}
                    >
                        스포츠
                    </Category>
                    <Category
                        className={cn(category==='science'?'selected':'')}
                        onClick={()=>onClick('science')}
                    >
                        과학
                    </Category>
                    <Category
                        className={cn(category==='technology'?'selected':'')}
                        onClick={()=>onClick('technology')}
                    >
                        기술
                    </Category>
                </CategoryWrap>
                <NewsWrap>
                    <NewsList>
                        {
                            newsData.map(news=>(
                                <NewsItem key={news.url}>
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
        </NewsWidgetBlock>
    );
};

export default NewsWidget;