import React from 'react'
import Trend from '../../components/Trend'
import Navbar from '../../components/Navbar'
import SocialsSection from '../../components/SocialsSection'

const index = () => {
  
  return (
    <>
    <Navbar/>
    <Trend/>
    <SocialsSection/>
    </>
  )
}

export default index
// const ImageRow = ({ images }) => {
//   return (
//     <div className="image-row">
//       {images.map((image, index) => (
//         <div key={index} className="image-container">
//           <img src={image.url} alt={image.description} />
//           <p>{image.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// const ImageSection = ({ images }) => {
//   const rows = [];
//   for (let i = 0; i < images.length; i += 3) {
//     rows.push(images.slice(i, i + 3));
//   }

//   return (
//     <div className="image-section">
//       {rows.map((row, index) => (
//         <ImageRow key={index} images={row} />
//       ))}
//     </div>
//   );
// };

// const App = () => {
//   const images = [
//     {
//       url: 'https://example.com/image1.jpg',
//       description: 'Image 1',
//     },
//     {
//       url: 'https://example.com/image2.jpg',
//       description: 'Image 2',
//     },
//     {
//       url: 'https://example.com/image3.jpg',
//       description: 'Image 3',
//     },
//     {
//       url: 'https://example.com/image4.jpg',
//       description: 'Image 4',
//     },
//     {
//       url: 'https://example.com/image5.jpg',
//       description: 'Image 5',
//     },
//     {
//       url: 'https://example.com/image6.jpg',
//       description: 'Image 6',
//     },
//   ];

//   return (
//     <div className="app">
//       <ImageSection images={images} />
//     </div>
//   );
// };