import React,{useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import Menu from '../../../component/content/menu/Menu';

const MenuContainer = () => {
    const [menuList,setMenuList] = useState([]);
    const [settingPopupVisible,setSettingPopupVisible] = useState(false);

    const {info} = useSelector(({info})=>({
        info:info.info,
    }));

    const onShowSettingPopup = e =>{
        e.stopPropagation();
        setSettingPopupVisible(!settingPopupVisible);
    };

    const onClickLink = (url) =>{
        if(info.openMode==='new'){
            window.open(url);
        }else{
            window.location.href = url;
        }
    };

    useEffect(()=>{
        if(info){
            let arr = [];
            const {menu} = info;
            for(let key in menu){
                if(key!=='mylog'){
                    for(let i=0;i<menu[key].length;i++){
                        arr.push(menu[key][i]);
                    }
                }else{
                    const mylog = menu[key].filter(item=>item.checked);
                    for(let i=0;i<mylog.length;i++){
                        arr.push(mylog[i]);
                    }
                }   
            }
            setMenuList(arr);
        }
    },[info]);

    return (
        <Menu
            info={info}
            menuList={menuList}
            settingPopupVisible={settingPopupVisible}
            onShowSettingPopup={onShowSettingPopup}
            onClickLink={onClickLink}
        />
    );
};

export default MenuContainer;