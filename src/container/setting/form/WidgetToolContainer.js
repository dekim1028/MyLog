import React, { useEffect, useState } from 'react';
import WidgetTool from '../../../component/setting/form/WidgetTool';
import { useSelector, useDispatch } from 'react-redux';
import { setCookie, initialCookie } from '../../../lib/cookie';
import { setInfo } from '../../../modules/info';

const WidgetToolContainer = () => {
    const dispatch = useDispatch();
    const [widgetThema,setWidgetThema] = useState(null);
    const [widget,setWidget] = useState(null);

    const {info} = useSelector(({info})=>({
        info:info.info
    }));

    const onChangeThema = e =>{
        const {value} = e.target;
        setWidgetThema(value);
    };

    const onChangeWidget = e =>{
        const {name} = e.target;
        setWidget({
            ...widget,
            [name]:{
                ...widget[name],
                show:!widget[name].show
            }
        });
    };

    const onClick = () =>{
        let widgetTemp = {...widget};
        
        for(let key in widgetTemp){
            widgetTemp[key] = {
                ...initialCookie.widget[key],
                show:widgetTemp[key].show
            };
        }

        const basicInfo = {
            ...info,
            widget:widgetTemp,
            widgetThema,
        };

        setCookie("info",JSON.stringify(basicInfo));
        dispatch(setInfo(basicInfo));
        alert("저장되었습니다.");
    };

    useEffect(()=>{
        if(info){
            setWidgetThema(info.widgetThema);
            setWidget(info.widget);
        }
    },[info]);

    return (
        <WidgetTool
            widget={widget}
            widgetThema={widgetThema}
            onChangeThema={onChangeThema}
            onChangeWidget={onChangeWidget}
            onClick={onClick}
        />
    );
};

export default WidgetToolContainer;