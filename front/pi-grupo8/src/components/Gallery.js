import React from "react";
import galleryStyle from "../Styles/gallery.module.scss";

export default function Gallery({ imgs }) {
  const images = imgs?.map((img, i) =>
    i < 5 ? (
      <div key={img?.id} className={galleryStyle.item}>
        <img src={img?.url} alt={img?.titulo} className={galleryStyle.image} />
      </div>
    ) : null
  );

  return (
    <>
      <div className={galleryStyle.container}>{images}</div>
    </>
  );
}
