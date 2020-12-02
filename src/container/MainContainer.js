import React,{useState, useEffect} from 'react';
import Main from '../component/Main';
import { useSelector } from 'react-redux';
import { paletteToCss } from '../lib/colorFormart';

const MainContainer = () => {
    const [background,setBackground] = useState(null);
    const [settingPopupVisible,setSettingPopupVisible] = useState(false);
    const {info} = useSelector(({info})=>({
        info:info.info,
    }));

    const onShowSettingPopup = e =>{
        e.stopPropagation();
        setSettingPopupVisible(!settingPopupVisible);
    };

    useEffect(()=>{
        if(info){
            setBackground(paletteToCss(info.background,info.backgroundAngle));
        }
    },[info]);

    return (
        <Main
            background={background} 
            settingPopupVisible={settingPopupVisible}
            onShowSettingPopup={onShowSettingPopup}
        />
    );
};

export default MainContainer;