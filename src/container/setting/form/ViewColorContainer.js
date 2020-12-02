import React,{useState, useEffect} from 'react';
import ViewColor from '../../../component/setting/form/ViewColor';
import { useSelector, useDispatch } from 'react-redux';
import { setCookie } from '../../../lib/cookie';
import { setInfo } from '../../../modules/info';

const ViewColorContainer = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [angle, setAngle] = useState(null);
    const [palette, setPalette] = useState([]);

    const {info} = useSelector(({info})=>({
        info:info.info,
    }));

    const onClick = () =>{
        const basicInfo = {
            ...info,
            background: palette,
            backgroundAngle:angle,
        };
        setCookie("info",JSON.stringify(basicInfo));
        dispatch(setInfo(basicInfo));
    };

    useEffect(()=>{
        if(info){
            setPalette(info.background);
            setAngle(info.backgroundAngle);
        }
    },[info]);

    return (
        <ViewColor
            open={open}
            setOpen={setOpen}
            angle={angle}
            setAngle={setAngle}
            palette={palette}
            setPalette={setPalette}
            onClick={onClick}
        />
    );
};

export default ViewColorContainer;