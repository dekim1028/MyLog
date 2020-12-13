import React from 'react';
import MemoWidget from '../../../component/content/widget/MemoWidget';
import { useSelector, useDispatch } from 'react-redux';
import { setCookie } from '../../../lib/cookie';
import { setInfo } from '../../../modules/info';

const MemoWidgetContainer = ({thema}) => {
    const dispatch = useDispatch();
    const {info} = useSelector(({info})=>({
        info:info.info,
    }))

    const onChange = e =>{
        const {value} = e.target;

        const basicInfo = {
            ...info,
            widget:{
                ...info.widget,
                memo:{
                    ...info.widget.memo,
                    content:value
                }
            }
        };
        
        setCookie("info",JSON.stringify(basicInfo));
        dispatch(setInfo(basicInfo));
    };

    return (
        <MemoWidget
            info={info}
            thema={thema}
            onChange={onChange}
        />
    );
};

export default MemoWidgetContainer;