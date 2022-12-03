import React from "react";
import galleryStyle from "../Styles/gallery.module.scss";

export default function Gallery({ imgs }) {
  const link =
    "https://digitalbooking-imagenes-grupo8.s3.us-east-2.amazonaws.com/imgs/products/hotels/hotel1.jpg";
  return (
    <>
      <div className={galleryStyle.container}>
        <div className={galleryStyle.item}>
          <img src={link} alt="" className={galleryStyle.image} />
        </div>
        <div className={galleryStyle.item}>
          <img src={link} alt="" className={galleryStyle.image} />
        </div>
        <div className={galleryStyle.item}>
          <img src={link} alt="" className={galleryStyle.image} />
        </div>
        <div className={galleryStyle.item}>
          <img src={link} alt="" className={galleryStyle.image} />
        </div>
        <div className={galleryStyle.item}>
          <img src={link} alt="" className={galleryStyle.image} />
        </div>
      </div>
    </>
  );
}
