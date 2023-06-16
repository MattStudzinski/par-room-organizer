
import { createWorker } from "tesseract.js";
import { useEffect, useState, useCallback } from "react";
import { UploadImageButton } from "../../styles/Bodystyles";

function UploadImage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [convertedText, setConvertedText] = useState("")

const worker = createWorker()

const convertImageToText = useCallback(async () => {
    if(!selectedImage) return
    await worker.load()
    await worker.loadLanguage("eng")
    await worker.initialize("eng")
    const { data } = await worker.recognize(selectedImage)
    setConvertedText(data.text)
}, [worker, selectedImage])

  
  useEffect(() => {
    convertImageToText()
  }, [selectedImage, convertImageToText])

  const handleChangeImage = e => {
    if(e.target.files[0]){
        setSelectedImage(e.target.files[0])
    } else {
        setSelectedImage(null)
        setConvertedText("")
    }
  }

  const splitTextToArray = convertedText.split(" ")
  console.log(splitTextToArray)
  

  return (
    <div className="App">
      <h1>ImText</h1>
      <p>Gets words in image!</p>
      <div className="input-wrapper">
        <label htmlFor="upload">Upload Image</label>
        <input type="file" id="upload" accept='image/*' onChange={handleChangeImage} />
      </div>

      <div className="result">
        {selectedImage && (
          <div className="box-image">
            <img src={URL.createObjectURL(selectedImage)} alt="thumb" />
          </div>
        )}
        {convertedText && (
          <div className="box-p">
            <p>{convertedText}</p>
            
          </div>
        )}
      </div>
    </div>
  );
}


export default UploadImage;






    //   const [selectedImage, setSelectedImage] = useState(null);
    //   const [textResult, setTextResult] = useState("");
    
      
    //   const worker = createWorker();
    
    //   const convertImageToText = useCallback(async () => {
    //     if(!selectedImage) return;
    //     await worker.load();
    //     await worker.loadLanguage("eng");
    //     await worker.initialize("eng");
    //     const { data } = await worker.recognize(selectedImage);
    //     setTextResult(data.text);
    //   }, [worker, selectedImage]);
    
    //   useEffect(() => {
    //     convertImageToText();
    //   }, [selectedImage, convertImageToText])
    
    //   const handleChangeImage = e => {
    //     if(e.target.files[0]) {
    //       setSelectedImage(e.target.files[0]);
    //     } else {
    //       setSelectedImage(null);
    //       setTextResult("")
    //     }
    //   }
    
    //   const convertedArray = textResult.split(" ")
    //   console.log(convertedArray)
    
    
    //   return (
    //     <div className="App">
    //       <h1>ImText</h1>
    //       <p>Gets words in image!</p>
    //       <div className="input-wrapper">
    //         <label htmlFor="upload">Upload Image</label>
    //         <input type="file" id="upload" accept='image/*' onChange={handleChangeImage} />
    //       </div>
    
    //       <div className="result">
    //         {selectedImage && (
    //           <div className="box-image">
    //             <img src={URL.createObjectURL(selectedImage)} alt="thumb" />
    //           </div>
    //         )}
    //         {textResult && (
    //           <div className="box-p">
    //             <p>{textResult}</p>
                
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //   );
    // }
    
    // export default App;
    
    