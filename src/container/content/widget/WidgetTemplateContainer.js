import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import WidgetTemplate from '../../../component/content/widget/WidgetTemplate';
import { setCookie } from '../../../lib/cookie';
import { setInfo } from '../../../modules/info';

const WidgetTemplateContainer = ({name,children}) => {
    const dispatch = useDispatch();
    const [widget,setWidget] = useState(null);
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

        let dir = null;

        if(pos.deltaX>0){
            dir = 'right';
        }else if(pos.deltaX<0){
            dir = 'left';
        }

        if(pos.deltaY>0){
            dir = 'down';
        }else if(pos.deltaY<0){
            dir = 'up';
        }

        onMovePosition(dir,posX,posY);

        if(Object.keys(onCheckOverlapping({thisX:posX,thisY:posY})).length>0){
            posX = info.widget[name].posX;
            posY = info.widget[name].posY;
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

        if(Object.keys(onCheckOverlapping({thisWidth:width,thisHeight:height})).length>0){
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
            thisHeight=widgetData.height,
            thisNames=[name],
        }
    ) =>{
        let overlapArr = {};
        const thisH = thisX+thisWidth;
        const thisV = thisY+thisHeight;

        for(let key in widget){
            if(!thisNames.includes(key) && widget[key].show){
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
                    overlapArr = {...overlapArr,[key]:widget[key]};
                }
            }
        }
        return overlapArr;
    };

    const onMovePosition = (dir,thisX,thisY) =>{
        let overlapArr = onCheckOverlapping({thisX,thisY,thisWidth:widgetData.width,thisHeight:widgetData.height});

        if(dir==='right'){
            for(let key in overlapArr){
                const newX = overlapArr[key].posX-widgetData.width-6;
                const checkOverlap = Object.keys(onCheckOverlapping({
                    thisX:newX,
                    thisY:overlapArr[key].posY,
                    thisWidth:overlapArr[key].width,
                    thisHeight:overlapArr[key].height,
                    thisNames:[name,key]
                })).length>0?true:false;
                
                if(newX>=0&&!checkOverlap){
                    overlapArr[key].posX=newX;
                }
            }
        }else if(dir==='left'){
            for(let key in overlapArr){
                const newX = overlapArr[key].posX+widgetData.width+5;
                const checkOverlap = Object.keys(onCheckOverlapping({
                    thisX:newX,
                    thisY:overlapArr[key].posY,
                    thisWidth:overlapArr[key].width,
                    thisHeight:overlapArr[key].height,
                    thisNames:[name,key]
                })).length>0?true:false;

                if(newX<860-overlapArr[key].width&&!checkOverlap){
                    overlapArr[key].posX=newX;
                }
            }
        }else if(dir==='up'){
            for(let key in overlapArr){
                const newY = overlapArr[key].posY-widgetData.height-5;
                const checkOverlap = Object.keys(onCheckOverlapping({
                    thisX:overlapArr[key].posX,
                    thisY:newY,
                    thisWidth:overlapArr[key].width,
                    thisHeight:overlapArr[key].height,
                    thisNames:[name,key]
                })).length>0?true:false;

                if(newY>=0&&!checkOverlap){
                    overlapArr[key].posY=newY;
                }
            }
        }else if(dir==='down'){
            for(let key in overlapArr){
                const newY = overlapArr[key].posY+widgetData.height+5;
                const checkOverlap = Object.keys(onCheckOverlapping({
                    thisX:overlapArr[key].posX,
                    thisY:newY,
                    thisWidth:overlapArr[key].width,
                    thisHeight:overlapArr[key].height,
                    thisNames:[name,key]
                })).length>0?true:false;

                if(newY<455-overlapArr[key].height&&!checkOverlap){
                    overlapArr[key].posY=newY;
                }
            }
        }

        const basicWidget = {
            ...widget,
            ...overlapArr
        };

        setWidget(basicWidget);
    };
    
    const onStop = () =>{
        const changePos = info.widget[name].posX!==widgetData.posX || info.widget[name].posY!==widgetData.posY;
        const changeSize = info.widget[name].width!==widgetData.width || info.widget[name].height!==widgetData.height;

        if(changePos||changeSize){
            const basicInfo = {
                ...info,
                widget:{
                    ...widget,
                    [name]:widgetData
                }
            };
    
            setCookie("info",JSON.stringify(basicInfo));
            dispatch(setInfo(basicInfo));
        }else{
            setWidget(info.widget);
            setWidgetData(info.widget[name]);
        }
    };

    useEffect(()=>{
        if(info){
            setWidget(info.widget);
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