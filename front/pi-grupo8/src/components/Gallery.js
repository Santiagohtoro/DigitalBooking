import React from "react";
import galleryStyle from "../Styles/gallery.module.scss";
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';


export default function Gallery({ imgs }) {
  function SeenGallery(imgs) {
    imgs?.map((img)=>{
      console.log(img?.url);
      return <div><Carousel images={img?.url} isMaximized/></div>
    })
  }
 

  const images = imgs?.map((img, i) =>
    i < 5 ? (
      <div
        key={img?.id}
        className={galleryStyle.item}
      >
        <img src={img?.url} alt={img?.titulo} className={galleryStyle.image} />
      </div>
    ) : null
  );

  return (
    <>
      <div className={galleryStyle.container}>{images}</div>
      <button onClick={SeenGallery(imgs)}>Ver Mas</button>
    </>
  );
}
