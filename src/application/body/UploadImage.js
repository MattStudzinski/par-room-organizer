
import Tesseract from 'tesseract.js';
import { useEffect, useState } from "react";
import { UploadImageButton } from "../../styles/Bodystyles";

function UploadImage() {
  const [selectedImage, setSelectedImage] = useState();
  const [imagePreview, setImagePreviews] = useState();
  const {convertedText, setConvertedText} = useState("")

const handleClick = () => {
    Tesseract.recognize(imagePreview, "eng", {
        logger: (m) => {
            console.log(m)
        },
    }).then(({ data: {convertedText} }) => {
        setConvertedText(convertedText)
    })
}

  
  // rendering previews
  useEffect(() => {
    if (!selectedImage) return;
    let arrayImage = [];
    
    arrayImage.push(URL.createObjectURL(selectedImage[0]));
    
    const Urlimage = arrayImage;
    setImagePreviews(Urlimage);

    
    

    
  }, [selectedImage]);


  return (
    <main className="container">
      <br />
      <h3>Form with image preview</h3>
      <UploadImageButton
        type="file"
        accept="image/jpg, image/jpeg, image/png"
        multiple
        onChange={(e) => {
            setSelectedImage(e.target.files);
          
        }}
      />
      <input type="button" value='convert' onClick={handleClick}></input>
      
           <img src={imagePreview}  alt=""/>
    
    </main>
  );
}

export default UploadImage;