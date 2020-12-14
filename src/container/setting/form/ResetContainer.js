import React from 'react';
import Reset from '../../../component/setting/form/Reset';
import { deleteCookie } from '../../../lib/cookie';

const ResetContainer = () => {
    const onClick = () =>{
        const check = window.confirm("초기화하시겠습니까? 초기화 후 이전 데이터는 복구할 수 없습니다.");
        if(check){
            deleteCookie();
            window.location.reload();
        }
    };

    return (
        <Reset
            onClick={onClick}
        />
    );
};

export default ResetContainer;