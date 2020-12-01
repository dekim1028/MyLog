import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import Menu from '../component/Menu';

const MenuContainer = ({onShowSettingPopup}) => {
    const [menuVisible,setMenuVisible] = useState(false);

    const {info} = useSelector(({info})=>({
        info:info.info,
    }));

    const onShowMenu = e =>{
        setMenuVisible(!menuVisible);
    };

    return (
        <Menu
            info={info}
            menuVisible={menuVisible}
            onShowMenu={onShowMenu}
            onShowSettingPopup={onShowSettingPopup}
        />
    );
};

export default MenuContainer;