import React from 'react';
import ViewColorContainer from '../../../container/setting/form/ViewColorContainer';

const SettingForm = ({view}) => {
    return (
        <form>
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
        </form>
    );
};

export default SettingForm;