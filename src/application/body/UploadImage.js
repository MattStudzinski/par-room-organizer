
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


const safeGreenArray = []
const warningOrangeArray = []
const dangerRedArray = []

console.log(safeGreenArray)

  for (let i = 0; i < trimmedFinalArray.length; i++){
    if (trimmedFinalArray[i].substring(trimmedFinalArray[i],4) <= .25) {
        dangerRedArray.push(trimmedFinalArray[i])
    } else if (trimmedFinalArray[i].substring(trimmedFinalArray[i],4) >= .26 && trimmedFinalArray[i].substring(trimmedFinalArray[i],4) <= .40 ) {
      warningOrangeArray.push(trimmedFinalArray[i])
    } else {safeGreenArray.push(trimmedFinalArray[i])
  }
}
  console.log(`green array ${safeGreenArray}`)
  console.log(`orange array ${warningOrangeArray}`)
  console.log(`red array ${dangerRedArray}`)


    // const redParItems = dangerRedArray.map((parItem, index) =>
    // <ResultsItem key={index}>{parItem}</ResultsItem>
    // )

    // const orangeParItems = warningOrangeArray.map((parItem, index) =>
    // <ResultsItem key={index}>{parItem}</ResultsItem>
    // )

    // const greenParItems = safeGreenArray.map((parItem, index) =>
    // <ResultsItem key={index}>{parItem}</ResultsItem>
    // )




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
    




