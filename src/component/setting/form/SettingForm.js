import React from 'react';
import ViewColorContainer from '../../../container/setting/form/ViewColorContainer';
import SearchToolContainer from '../../../container/setting/form/SearchToolContainer';

const SettingForm = ({view}) => {
    return (
        <>
            {
                view==='viewColor' &&(
                    <ViewColorContainer/>
                )
            }
            {
                view==='searchTool' &&(
                    <>
                        <SearchToolContainer/>
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