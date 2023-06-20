
import { createWorker } from "tesseract.js";
import { useEffect, useState, useCallback } from "react";
import { ParRoomResultsList, UploadImageButton, ResultsItem } from "../../styles/Bodystyles";

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

  const splitTextToArray = convertedText.split("001")


  const newArr = splitTextToArray

  const slicedArray = newArr.slice(1)
  console.log(slicedArray)

  
    const parItems = slicedArray.map((parItem, index) =>
    <ResultsItem key={index}>{parItem}</ResultsItem>
    )


  



 





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
            
          </div>
        )}
        {convertedText && (
          <div className="box-p">

            <ParRoomResultsList>{parItems}</ParRoomResultsList>
          </div>
        )}
      </div>
    </div>
  );
}


export default UploadImage;
    