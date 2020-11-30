import React from 'react';
import Main from '../component/Main';
import { useSelector } from 'react-redux';

const MainContainer = () => {
    const {info} = useSelector(({info})=>({
        info:info.info,
    }));

    return (
        <Main info={info}/>
    );
};

export default MainContainer;