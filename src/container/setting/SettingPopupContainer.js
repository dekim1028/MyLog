import React,{useState} from 'react';
import SettingPopup from '../../component/setting/SettingPopup';

const SettingPopupContainer = ({onShowSettingPopup}) => {
    const [view,setView] = useState("viewColor");

    const onClickMenu=selected=>{
        setView(selected);
    };

    return (
        <SettingPopup
            view={view}
            onClickMenu={onClickMenu}    
            onShowSettingPopup={onShowSettingPopup}
        />
    );
};

export default SettingPopupContainer;