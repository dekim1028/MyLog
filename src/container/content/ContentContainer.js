import React,{useState} from 'react';
import Content from '../../component/content/Content';

const ContentContainer = ({background}) => {
    const [margin,setMargin] = useState(false);

    const onChangeContent = () =>{
        setMargin(!margin);
    };

    return (
        <Content
            background={background}
            margin={margin}
            onChangeContent={onChangeContent}
        />
    );
};

export default ContentContainer;