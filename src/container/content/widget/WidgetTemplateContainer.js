import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import WidgetTemplate from '../../../component/content/widget/WidgetTemplate';
import { setCookie } from '../../../lib/cookie';
import { setInfo } from '../../../modules/info';

const WidgetTemplateContainer = ({name,children}) => {
    const dispatch = useDispatch();
    const [widgetData,setWidgetData] = useState(null);

    const {info} = useSelector(({info})=>({
        info:info.info,
    }));

    const onDrag = (data,pos) =>{
        //범위 벗어나는 경우 원래 위치로
        let posX = pos.x<0?0:pos.x; //왼쪽
        let posY = pos.y<0?0:pos.y; //위

        if(posX>860-widgetData.width){ //오른쪽
            posX = widgetData.posX;
        }

        if(posY>455-widgetData.height){ //아래
            posY = widgetData.posY;
        }

        setWidgetData({...widgetData,posX,posY});
    };

    const onDragPrevent = e =>{
        e.stopPropagation();
    };

    const onResizing =(data,pos) =>{
        let width = widgetData.width+pos.deltaX;
        let height = widgetData.height+pos.deltaY;

        if(width>860){
            width=860;
        }else if(width<widgetData.minWidth){
            width=widgetData.minWidth;
        }

        if(height>455){
            height=455;
        }else if(height<=widgetData.minHeight){
            height=widgetData.minHeight;
        }

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
        if(info){
            setWidgetData(info.widget[name]);
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