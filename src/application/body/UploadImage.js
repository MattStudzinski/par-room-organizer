
import { UploadImageButton } from '../../styles/Bodystyles';

const UploadImage = (setSelectedImage, selectedImage) => {


    const handleChangeImage = e => {
        setSelectedImage(e.target.files[0])
    }

    return (
        <>
        <UploadImageButton>Upload Image</UploadImageButton>
        <input type='file' id='upload' accept='image/*' onChange={handleChangeImage}></input>
        </>
    );
};

export default UploadImage;




// import { useEffect, useState } from 'react';

// const UploadImage = (setSelectedImage, selectedImage) => {

//     const [files, setFiles] = useState();
//     const [previews, setPreviews] = useState();
  
//     // rendering previews
//     useEffect(() => {
//       if (!files) return;
//       let tmp = [];
//       for (let i = 0; i < files.length; i++) {
//         tmp.push(URL.createObjectURL(files[i]));
//       }
//       const objectUrls = tmp;
//       setPreviews(objectUrls);
  
//       // free memory
//       for (let i = 0; i < objectUrls.length; i++) {
//         return () => {
//           URL.revokeObjectURL(objectUrls[i]);
//         };
//       }
//     }, [files]);
  
//     return (
//       <main className="container">
//         <br />
//         <h3>Form with image preview</h3>
//         <input
//           type="file"
//           accept="image/jpg, image/jpeg, image/png"
//           multiple
//           onChange={(e) => {
//             if (e.target.files && e.target.files.length > 0) {
//               setFiles(e.target.files);
//             }
//           }}
//         />
//         {previews &&
//           previews.map((pic) => {
//             return <img src={pic} alt="nothing" />;
//           })}
//       </main>
//     );
//   }

// export default UploadImage;