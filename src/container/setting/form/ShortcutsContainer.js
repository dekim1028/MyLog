import React, { useEffect, useState } from 'react';
import Shortcuts from '../../../component/setting/form/Shortcuts';
import shortcutsInfo from '../../../lib/shortcutsInfo';
import { useSelector, useDispatch } from 'react-redux';
import { setCookie } from '../../../lib/cookie';
import { setInfo } from '../../../modules/info';

const ShortcutsContainer = () => {
    const dispatch = useDispatch();
    const [shortcutsList,setShortcutsList] = useState(null);
    const [myShortcuts,setMyShortcuts] = useState(null);

    const {info} = useSelector(({info})=>({
        info:info.info,
    }));

    const onChange = e =>{
        const {name,value,checked} = e.target;

        if(checked){
            setMyShortcuts({
                ...myShortcuts,
                [name]:[
                    ...myShortcuts[name],
                    JSON.parse(value)
                ]
            });
        }else{
            const filterArr = myShortcuts[name].filter(item=>item.id!==JSON.parse(value).id);
            setMyShortcuts({
                ...myShortcuts,
                [name]:filterArr
            });
        }
    }

    const onClick = () =>{
        const mylog = info.menu.mylog.map(item=>{
            item.checked=checkExist(item);
            return item;
        });

        const basicInfo = {
            ...info,
            menu:{
                ...myShortcuts,
                mylog
            }
        };
        
        setCookie("info",JSON.stringify(basicInfo));
        dispatch(setInfo(basicInfo));
        alert("수정되었습니다.");
    };

    const checkExist = (item) =>{
        for(let key in myShortcuts){
            if(myShortcuts[key].filter(myItem=>myItem.id===item.id).length>0){
                return true;
            }
        }
        return false;
    }

    useEffect(()=>{
        if(info){
            setShortcutsList({
                ...shortcutsInfo,
                mylog:info.menu.mylog,
            });

            const mylog = info.menu.mylog.filter(item=>item.checked);
            setMyShortcuts({
                ...info.menu,
                mylog,
            });
        }
    },[info]);

    return (
        <Shortcuts
            shortcutsList={shortcutsList}
            onChange={onChange}
            onClick={onClick}
            checkExist={checkExist}
        />
    );
};

export default ShortcutsContainer;