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
            posX = 860-widgetData.width;
        }

        if(posY>455-widgetData.height){ //아래
            posY = 455-widgetData.height;
        }

        if(onCheckOverlapping({thisX:posX,thisY:posY})){
            posX = widgetData.posX;
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

        //resizing 가능 범위 제한
        if(widgetData.posX+width>860){
            width=860-widgetData.posX;
        }else if(width<widgetData.minWidth){
            width=widgetData.minWidth;
        }

        if(widgetData.posY+height>455){
            height=455-widgetData.posY;
        }else if(height<=widgetData.minHeight){
            height=widgetData.minHeight;
        }

        if(onCheckOverlapping({thisWidth:width,thisHeight:height})){
            width = widgetData.width;
            height = widgetData.height;
        }

        setWidgetData({...widgetData,width,height});
    };

    const onCheckOverlapping = (
        {
            thisX=widgetData.posX,
            thisY=widgetData.posY,
            thisWidth=widgetData.width,
            thisHeight=widgetData.height
        }
    ) =>{
        const {widget} = info;
        const thisH = thisX+thisWidth;
        const thisV = thisY+thisHeight;

        for(let key in widget){
            if(key!==name && widget[key].show){
                const targetX = widget[key].posX;
                const targetY = widget[key].posY;
                const targetH = targetX+widget[key].width;
                const targetV = targetY+widget[key].height;
                
                //가로 겹칩여부
                const checkHorizontal = (thisX>=targetX&&thisH<=targetH)||(thisX<=targetX&&thisH<=targetH&&thisH>=targetX)||(thisX<=targetH&&thisH>=targetH)||(thisX>=targetX&&thisX<=targetH&&thisH>=targetH);
                //세로 겹침여부
                const checkVertical = (thisY>=targetY&&thisV<=targetV)||(thisY<=targetY&&thisV<=targetV&&thisV>=targetY)||(thisY<=targetY&&thisV>=targetV)||(thisY>=targetY&&thisY<=targetV&&thisV>=targetV);
                
                //겹치면 true
                if(checkHorizontal&&checkVertical){
                    return true;
                }
            }
        }
        return false;
    }
    
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