// const onFileChanges = (event) => console.log(event.target.files);
// <form>
// 	<input type="file"
//     accept="image/png, image/jpeg, image/jpg" 
//     onChange={(event) => onFileChanges(event)}/>
// </form>

// const uploadFiles = axios.create({
//     baseURL, // 이미 선언되었다고 가정함
//     headers: { "Content-type": "multipart/form-data" },
//     timeout: 5000,
//   });
  
//   const onFileChanges = ({ target: { files } }) => {
//     uploadFiles
//       .post("/upload", { image_file: files[0] })
//       .then(({ data: { images } }) => setImagesList(images));
//   };

//   <Lists>
//   {imagesList.map((image, index) => (
//     <List key={index}>{image.image_name}</List>
//   ))}
// </Lists>


// const downloadFiles = axios.create({
//     baseURL,
//     headers: { "Content-type": "application/json; charset=UTF-8" },
//     timeout: 5000,
//   });

//   const onImageListClick = (imageId) => {
//     downloadFiles.post("/registration/download", { imageId }).then(({ data }) => {
//       console.log(data);
//     });
//   }

//   const onImageListClick = (imageId) => {
//     downloadFiles.post("/registration/download", { imageId }).then(({ data }) => {
//       console.log(data);
//     });

//     export const downloadFiles = axios.create({
//         baseURL,
//         headers: { "Content-type": "application/json; charset=UTF-8" },
//         responseType: "blob",
//         timeout: 5000,
//       });

//       const onImageListClick = (imageId) => {
//         downloadFiles.post("/download", { imageId }).then(({ data }) => {
//           const newFile = new File([data], url);
//         });
//       }

//       const onImageListClick = async (imageId) => {
//         await downloadFiles
//           .post("/download", { imageId })
//           .then(({ data }) => {
//           const newFile = new File([data], imageId);
//           const reader = new FileReader(); // 1
//           reader.onload = (event) => {
//             const previewImage = String(event.target?.result);
//             setImageURL(previewImage); // 2
//           };
//           reader.readAsDataURL(newFile); // 3
//         });
//         /* 후략 */
//       }

//       return (
//         <>
//           <Lists>
//             {imagesList.map((image, index) => (
//               <List key={index} onClick={() => onImageListClick(image.imageId)}>
//                 [{index}] {image.image_name}
//               </List>
//             ))}
//           </Lists>
//           <Preview>
//             <img src={imageURL} alt={imageName} />
//           </Preview>
//         </>
//       );