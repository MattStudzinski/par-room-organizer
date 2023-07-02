
import { createWorker } from "tesseract.js";
import Header from "../header/Header";
import cloud from '../../assets/cloud.svg'
import { InputLabel,CloudSVG, SelectFile, FileInput } from "../../styles/Inputstyles";
import { useEffect, useState, useCallback } from "react";
import { LoadingAnimation, GreenParRoomResultsList, OrangeParRoomResultsList, RedParRoomResultsList, GreenResultsItem, OrangeResultsItem, RedResultsItem, GreenTitle, OrangeTitle, RedTitle } from "../../styles/Bodystyles";
import { InputContainer, UlContainer, ListTitleContainer, AnimationContainer } from "../../styles/Containers";


function UploadImage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [convertedText, setConvertedText] = useState("")
  const [isLoading, setIsLoading] = useState(false)

const worker = createWorker()

const convertImageToText = useCallback(async () => {
    if(!selectedImage) return
    
    await worker.load()
    await worker.loadLanguage("eng")
    await worker.initialize("eng")
    const { data } = await worker.recognize(selectedImage)
    setConvertedText(data.text)
    setIsLoading(false)
}, [worker, selectedImage])

  
  useEffect(() => {
    convertImageToText()
  }, [selectedImage, convertImageToText])

  const handleChangeImage = e => {
    if(e.target.files[0]){
      setIsLoading(true)
        setSelectedImage(e.target.files[0])
    } else {
        setSelectedImage(null)
        setConvertedText("")
    }
  }
  const removeLineBreaks = convertedText.replace(/(\r\n|\n|\r\s+)/g, " ").trim()
  const splitAndReverseArray = removeLineBreaks.split(' ').reverse()
  const joinedFinalArray = splitAndReverseArray.join(' ').split(' 001 ')
  
  

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
  const displayGreen = []
  for (let i = 0; i < safeGreenArray.length; i++) {
    if (safeGreenArray[i].length > 1){
      let greenFinalList = safeGreenArray[i].split(' ').reverse().join(' ')
      displayGreen.push(greenFinalList)
      console.log(displayGreen)
    }
  }
  const displayOrange = []
  for (let i = 0; i < warningOrangeArray.length; i++) {
    if (warningOrangeArray[i].length > 0){
      let orangeFinalList = warningOrangeArray[i].split(' ').reverse().join(' ')
      displayOrange.push(orangeFinalList)
      console.log(displayOrange)
    }
  }

  const displayRed = []
  for (let i = 0; i < dangerRedArray.length; i++) {
    if (dangerRedArray[i].length > 0){
      let redFinalList = dangerRedArray[i].split(' ').reverse().join(' ')
      displayRed.push(redFinalList)
      console.log(displayRed)
    }
  }

 
  

    const redParItems = displayRed.map((parItem, index) =>
    <RedResultsItem key={index}>{parItem}</RedResultsItem>
    )

    const orangeParItems = displayOrange.map((parItem, index) =>
    <OrangeResultsItem key={index}>{parItem}</OrangeResultsItem>
    )

    const greenParItems = displayGreen.map((parItem, index) =>
    <GreenResultsItem key={index}>{parItem}</GreenResultsItem>
    )


    

  return (
    <div className="App">
      <Header />
      {!isLoading &&<InputContainer>
        <InputLabel htmlFor="upload">
        <CloudSVG src={cloud} alt="cloud"/>
        <SelectFile>Select File</SelectFile>
        </InputLabel>
        <FileInput type="file" id="upload" accept='image/*' onChange={handleChangeImage} />
      </InputContainer>}

        {convertedText && !isLoading &&(
          <UlContainer>

          <ListTitleContainer><RedTitle>Items in this list should be pulled from Par Room:</RedTitle></ListTitleContainer>
            <RedParRoomResultsList>{redParItems}</RedParRoomResultsList>
          <ListTitleContainer><OrangeTitle>Items in this list are at risk and are not used often:</OrangeTitle></ListTitleContainer>
            <OrangeParRoomResultsList>{orangeParItems}</OrangeParRoomResultsList>
          <ListTitleContainer><GreenTitle>Items in this list are used often enough to stay:</GreenTitle></ListTitleContainer>
            <GreenParRoomResultsList>{greenParItems}</GreenParRoomResultsList>
            
          </UlContainer>
        )}
        {isLoading && (
          <AnimationContainer>
          <LoadingAnimation></LoadingAnimation>
          </AnimationContainer>
        )}

    </div>
  );
}


export default UploadImage;
    




