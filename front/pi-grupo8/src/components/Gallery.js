import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import galleryStyle from "../Styles/gallery.module.scss";
import 'react-gallery-carousel/dist/index.css';


export default function Gallery({ imgs }) {
  const [open, setOpen] = React.useState(false);
  
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
      <div className={galleryStyle.container}>{images}
        <button type="button" className={galleryStyle.buttonGallery} onClick={() => setOpen(true)}>
          Ver Mas
        </button>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={imgs?.map((image)=>({
          src: image.url
       }))
        }
      />
      
    </>
  );
}
