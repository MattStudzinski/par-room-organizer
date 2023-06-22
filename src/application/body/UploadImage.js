
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
  const removeLineBreaks = convertedText.replace(/(\r\n|\n|\r\s+)/g, " ").trim()
  const splitAndReverseArray = removeLineBreaks.split(' ').reverse()
  const joinedFinalArray = splitAndReverseArray.join(' ').split('001')
  

  const trimmedFinalArray = joinedFinalArray.map(paritem => {
    return paritem.trim()
  })
  console.log(trimmedFinalArray)
  
const safeGreenArray = ['apple']
console.log(safeGreenArray)

  for (let i = 0; i < trimmedFinalArray.length; i++){
    if (trimmedFinalArray[i].substring(trimmedFinalArray[i],4) >= .8) {
        safeGreenArray.push(trimmedFinalArray[i])
        console.log(safeGreenArray)
    }
  }


    // const parItems = slicedArray.map((parItem, index) =>
    // <ResultsItem key={index}>{parItem}</ResultsItem>
    // )

//  

  



//  const splitData = mockdata.split(' ').reverse().join(' ').split('001')
//  console.log(splitData)






 






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

            {/* <ParRoomResultsList>{parItems}</ParRoomResultsList>
            <div>{newArray}</div> */}
          </div>
        )}
      </div>
    </div>
  );
}


export default UploadImage;
    




