import React,{useState, useEffect} from 'react';
import Main from '../component/Main';
import { useSelector } from 'react-redux';
import { paletteToCss } from '../lib/colorFormart';

const MainContainer = () => {
    const [background,setBackground] = useState(null);

    const {info} = useSelector(({info})=>({
        info:info.info,
    }));

    useEffect(()=>{
        if(info){
            setBackground(paletteToCss(info.background,info.backgroundAngle));
        }
    },[info]);

    return (
        <Main
            background={background}
        />
    );
};

export default MainContainer;