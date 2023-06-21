
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
  console.log(convertedText)

  
  const splitTextToArray = convertedText.split(' ').reverse().join(' ').split('001')
  console.log(splitTextToArray)
  


    // const parItems = slicedArray.map((parItem, index) =>
    // <ResultsItem key={index}>{parItem}</ResultsItem>
    // )

//   const newArray = ['apple']
//   console.log(newArray)

//   for (let i = 0; i < splitTextToArray.length; i++){
//     if (splitTextToArray[i].substring(splitTextToArray[i].length,-5) <= .8) {
//         newArray.push(splitTextToArray[i])
//         console.log(newArray)
//     }
//   }

  



//  const splitData = mockdata.split(' ').reverse().join(' ').split('001')
//  console.log(splitData)


// const emptyArr = []

//  for (let i = 0; i < splitData.length; i++) {
// if (splitData[i].substring(0,5) <= .8) {
// emptyArr.push(splitData[i])
// console.log(emptyArr)
// }
//  }


//  const newarrayformock = []
//  for (let i = 0; i < splitData.length; i++){
//     if(splitData){
//         newarrayformock.push(splitData[i].split(' ').reverse().join(' '))
//     }
//     console.log(newarrayformock)
//  }
 




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
    