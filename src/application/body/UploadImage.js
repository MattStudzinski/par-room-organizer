
import { createWorker } from "tesseract.js";
import { useEffect, useState, useCallback } from "react";
import { GreenParRoomResultsList, OrangeParRoomResultsList, RedParRoomResultsList , UploadImageButton, GreenResultsItem, OrangeResultsItem, RedResultsItem } from "../../styles/Bodystyles";

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
  const poplast = joinedFinalArray.pop()
  

  const trimmedFinalArray = joinedFinalArray.map(paritem => {
    return paritem.trim()
  })
  


const safeGreenArray = []
const warningOrangeArray = []
const dangerRedArray = []





  for (let i = 0; i < trimmedFinalArray.length; i++){
    if (trimmedFinalArray[i].substring(trimmedFinalArray[i],4) <= .25) {
        dangerRedArray.push(trimmedFinalArray[i])
    } else if (trimmedFinalArray[i].substring(trimmedFinalArray[i],4) >= .26 && trimmedFinalArray[i].substring(trimmedFinalArray[i],4) <= .40 ) {
      warningOrangeArray.push(trimmedFinalArray[i])
    } else {safeGreenArray.push(trimmedFinalArray[i])
  }
}
  // console.log(`green array ${safeGreenArray}`)
  // console.log(`orange array ${warningOrangeArray}`)
  // console.log(`red array ${dangerRedArray}`)
  const displayGreen = []
  for (let i = 0; i < safeGreenArray.length; i++) {
    if (safeGreenArray[i].length > 1){
      let howdy = safeGreenArray[i].split(' ').reverse().join(' ')
      displayGreen.push(howdy)
      console.log(displayGreen)
    }
  }
  

    const redParItems = dangerRedArray.map((parItem, index) =>
    <RedResultsItem key={index}>{parItem}</RedResultsItem>
    )

    const orangeParItems = warningOrangeArray.map((parItem, index) =>
    <OrangeResultsItem key={index}>{parItem}</OrangeResultsItem>
    )

    const greenParItems = displayGreen.map((parItem, index) =>
    <GreenResultsItem key={index}>{parItem}</GreenResultsItem>
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

            <RedParRoomResultsList>{redParItems}</RedParRoomResultsList>
            <OrangeParRoomResultsList>{orangeParItems}</OrangeParRoomResultsList>
            <GreenParRoomResultsList>{greenParItems}</GreenParRoomResultsList>
            
          </div>
        )}
      </div>
    </div>
  );
}


export default UploadImage;
    




