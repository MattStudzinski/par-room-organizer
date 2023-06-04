import React from 'react';
import { GeneratedTextBlock } from '../../styles/Bodystyles';
const GeneratedText = selectedImage => {
    
    return (
        <GeneratedTextBlock>
            {selectedImage && (
                <div className='textbox'>
                    <img src={selectedImage} alt='thumb'/>
                </div>
            )}
        </GeneratedTextBlock>
    );
};

export default GeneratedText;