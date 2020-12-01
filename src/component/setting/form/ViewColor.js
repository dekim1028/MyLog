import React from 'react';
import styled from 'styled-components';
import { SketchPicker } from 'react-color';
import { GradientPickerPopover } from 'react-linear-gradient-picker';

const ViewColorBlock = styled.div`
    .gpw{
        padding:0;
        
        .trigger{
            width: 100%;
            height: 40px;

            .inner{
                width: 100%;
                height: 100%;
            }
        }
    }
`;

const Title = styled.h1`
    margin:0;
    margin-bottom:10px;
    font-size:13px;
    font-weight:normal;
`;

const rgbToRgba = (rgb, a = 1) => {
    return rgb.replace('rgb(', 'rgba(').replace(')', `, ${a})`);
};

const WrappedSketchPicker = ({ onSelect, ...rest }) => {
    return (
        <SketchPicker {...rest}
                      color={rgbToRgba(rest.color, rest.opacity)}
                      onChange={c => {
                          const { r, g, b, a } = c.rgb;
                          onSelect(`rgb(${r}, ${g}, ${b})`, a);
                      }}/>
    );
};

const ViewColor = ({open,setOpen,angle,setAngle,palette,setPalette}) => {
    return (
        <ViewColorBlock>
            <Title>배경색상 선택 :</Title>
            <GradientPickerPopover {...{
                open,
                setOpen,
                angle,
                setAngle,
                showAnglePicker: true,
                width: 220,
                maxStops: 3,
                paletteHeight: 32,
                palette,
                onPaletteChange: setPalette
            }}>
                <WrappedSketchPicker/>
            </GradientPickerPopover>
        </ViewColorBlock>
    );
};

export default ViewColor;