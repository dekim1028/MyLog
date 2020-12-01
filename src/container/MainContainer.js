import React,{useState} from 'react';
import Main from '../component/Main';
import { useSelector } from 'react-redux';

const MainContainer = () => {
    const [settingPopupVisible,setSettingPopupVisible] = useState(false);
    const {info} = useSelector(({info})=>({
        info:info.info,
    }));

    const onShowSettingPopup = e =>{
        e.stopPropagation();
        setSettingPopupVisible(!settingPopupVisible);
    };

    return (
        <Main
            info={info} 
            settingPopupVisible={settingPopupVisible}
            onShowSettingPopup={onShowSettingPopup}
        />
    );
};

export default MainContainer;