import React from 'react';
import ViewColorContainer from '../../../container/setting/form/ViewColorContainer';
import SearchToolContainer from '../../../container/setting/form/SearchToolContainer';
import ResetContainer from '../../../container/setting/form/ResetContainer';
import ShortcutsContainer from '../../../container/setting/form/ShortcutsContainer';
import MyLogContainer from '../../../container/setting/form/MyLogContainer';
import WidgetToolContainer from '../../../container/content/widget/WidgetToolContainer';

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
                view==='widgetTool' &&(
                    <WidgetToolContainer/>
                )
            }
            {
                view==='shortcuts' &&(
                    <ShortcutsContainer/>
                )
            }
            {
                view==='mylog' &&(
                    <MyLogContainer/>
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