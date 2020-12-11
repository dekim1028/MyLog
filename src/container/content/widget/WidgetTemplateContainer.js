import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import WidgetTemplate from '../../../component/content/widget/WidgetTemplate';
import { setCookie } from '../../../lib/cookie';
import { setInfo } from '../../../modules/info';

const WidgetTemplateContainer = ({name,children}) => {
    const dispatch = useDispatch();
    const [widget,setWidget] = useState(null);
    const [widgetData,setWidgetData] = useState({
        posX:0,
        posY:0,
        width:0,
        height:0,
    });

    const {info} = useSelector(({info})=>({
        info:info.info,
    }));

    const onDrag = (data,pos) =>{
        const posX = pos.x<0?0:pos.x;
        const posY = widgetData.height<455?pos.y:0;
        setWidgetData({...widgetData,posX,posY});
    };

    const onDragPrevent = e =>{
        e.stopPropagation();
    };

    const onResizing =(data,pos) =>{
        const width = widgetData.width+pos.deltaX;
        const height = widgetData.height+pos.deltaY;
        setWidgetData({...widgetData,width,height});
    };
    
    const onStop = () =>{
        const widgetInfo = {
            ...info,
            widget:{
                ...info.widget,
                [name]:widgetData
            }
        };

        setCookie("info",JSON.stringify(widgetInfo));
        dispatch(setInfo(widgetInfo));
    };

    useEffect(()=>{
        if(widget){
            const {posX,posY,width,height} = widget;
            setWidgetData({
                posX,
                posY,
                width,
                height,
            });
        }
    },[widget]);

    useEffect(()=>{
        if(info){
            setWidget(info.widget[name]);
        }
    },[info,name]);

    return (
        <WidgetTemplate
            widgetData={widgetData}
            onDrag={onDrag}
            onDragPrevent={onDragPrevent}
            onResizing={onResizing}
            onStop={onStop}
            children={children}
        />
    );
};

export default WidgetTemplateContainer;