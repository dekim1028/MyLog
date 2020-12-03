import React from 'react';
import ViewColorContainer from '../../../container/setting/form/ViewColorContainer';
import SearchToolContainer from '../../../container/setting/form/SearchToolContainer';
import ResetContainer from '../../../container/setting/form/ResetContainer';
import ShortcutsContainer from '../../../container/setting/form/ShortcutsContainer';

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
                    <SearchToolContainer/>
                )
            }
            {
                view==='shortcuts' &&(
                    <ShortcutsContainer/>
                )
            }
            {
                view==='reset' &&(
                    <ResetContainer/>
                )
            }
        </>
    );
};

export default SettingForm;