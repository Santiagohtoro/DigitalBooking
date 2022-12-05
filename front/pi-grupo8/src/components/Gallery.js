import React from "react";
import galleryStyle from "../Styles/gallery.module.scss";

export default function Gallery({ imgs }) {
  //Componente Galeria sin terminar
  const [model, setModel] = useState(false);
  //const [tempmgSrc, setTempImgSrc] = useState('');
  const getImg = (imgSrc) => {
    setModel(true);
    //setTempImgSrc(imgSrc);
  };

  const images = imgs?.map((img, i) =>
    i < 5 ? (
      <div
        key={img?.id}
        className={galleryStyle.item}
        onClick={() => getImg(img?.url)}
      >
        <img src={img?.url} alt={img?.titulo} className={galleryStyle.image} />
      </div>
    ) : null
  );

  return (
    <>
      <div
        className={model ? `{galleryStyle.modelOpen}` : `{galleryStyle.model}`}
      ></div>
      <div className={galleryStyle.container}>{images}</div>
    </>
  );
}
