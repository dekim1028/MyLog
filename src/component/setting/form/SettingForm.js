import React from 'react';
import ViewColorContainer from '../../../container/setting/form/ViewColorContainer';

const SettingForm = ({view}) => {
    return (
        <>
            {
                view==='viewColor' &&(
                    <ViewColorContainer/>
                )
            }
            {
                view==='search' &&(
                    <>
                        
                    </>
                )
            }
            {
                view==='shortcuts' &&(
                    <>
                        
                    </>
                )
            }
            {
                view==='reset' &&(
                    <>
                        
                    </>
                )
            }
        </>
    );
};

export default SettingForm;