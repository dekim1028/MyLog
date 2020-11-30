import React, { useState } from 'react';
import Main from '../component/Main';
import { useSelector } from 'react-redux';

const MainContainer = () => {
    const [menuVisible,setMenuVisible] = useState(false);
    const {info} = useSelector(({info})=>({
        info:info.info,
    }));

    const onClick = () =>{
        setMenuVisible(!menuVisible);
    };

    return (
        <Main
            info={info}
            menuVisible={menuVisible}
            onClick={onClick}    
        />
    );
};

export default MainContainer;