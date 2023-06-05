
import { useEffect, useState } from "react";

function App() {
  const [selectedImage, setSelectedImage] = useState();
  const [imagePreview, setImagePreviews] = useState();

  // rendering previews
  useEffect(() => {
    if (!selectedImage) return;
    let arrayImage = [];
    
      arrayImage.push(URL.createObjectURL(selectedImage[0]));
    
    const Urlimage = arrayImage;
    setImagePreviews(Urlimage);
    console.log(Urlimage)

    // free memory
    
  
  }, [selectedImage]);

  return (
    <main className="container">
      <br />
      <h3>Form with image preview</h3>
      <input
        type="file"
        accept="image/jpg, image/jpeg, image/png"
        multiple
        onChange={(e) => {
            setSelectedImage(e.target.files);
          
        }}
      />
      
           <img src={imagePreview}  alt=""/>
    
    </main>
  );
}

export default App;