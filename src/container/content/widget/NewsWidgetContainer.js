import React, { useEffect, useState, useCallback } from 'react';
import NewsWidget from '../../../component/content/widget/NewsWidget';
import axios from 'axios';
import { useSelector } from 'react-redux';

const NewsWidgetContainer = ({thema}) => {
    const [category,setCategory] = useState('all');
    const [newsData,setNewsData] = useState(null);

    const {info} = useSelector(({info})=>({
        info:info.info
    }));

    const getNews = useCallback(() =>{
        const query = category === 'all' ? '' :`&category=${category}`;
        const apiURI = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=48aed99515594502bf6fa0cf43c7c46e`;
        axios({
            url: apiURI,
            dataType: "json",
            type: "GET",
            async: "false",
        }).then(function(response){
            setNewsData(response.data.articles);
        });
    },[category]);

    const onClick = target =>{
        setCategory(target);
    };

    const goToURL = url =>{
        if(info.openMode==='new'){
            window.open(url);
        }else{
            window.location.href = url;
        }
    };

    useEffect(()=>{
        getNews();
    },[getNews]);

    return (
        <NewsWidget
            category={category}
            newsData={newsData}
            thema={thema}
            onClick={onClick}
            goToURL={goToURL}
        />
    );
};

export default NewsWidgetContainer;