import React,{useState} from 'react';
import ViewColor from '../../../component/setting/form/ViewColor';

const ViewColorContainer = () => {
    const [open, setOpen] = useState(false);
    const [angle, setAngle] = useState(90);
    const [palette, setPalette] = useState([
        { offset: '0.00', color: 'rgb(238, 241, 11)' },
        { offset: '1.00', color: 'rgb(126, 32, 207)' }
    ]);

    return (
        <ViewColor
            open={open}
            setOpen={setOpen}
            angle={angle}
            setAngle={setAngle}
            palette={palette}
            setPalette={setPalette}
        />
    );
};

export default ViewColorContainer;