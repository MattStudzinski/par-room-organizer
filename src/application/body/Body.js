import React, { useState } from 'react';
import GeneratedText from './GeneratedText';
import UploadImage from './UploadImage';
import { BodyContainer } from '../../styles/Containers';
const Body = () => {

    const [selectedImage, setSelectedImage] = useState(null)
    return (
        <>
        <BodyContainer>
            <UploadImage setSelectedImage={setSelectedImage} selectedImage={selectedImage}/><GeneratedText selectedImage={selectedImage}/>
        </BodyContainer>
        </>
    );
};

export default Body;