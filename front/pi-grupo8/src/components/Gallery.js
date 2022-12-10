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
        slides={[
          {
            src: "https://digitalbooking-imagenes-grupo8.s3.us-east-2.amazonaws.com/imgs/categories/apartment-room.jpg",
            alt: "image 1",
            width: 3840,
            height: 2560,
            srcSet: [
              { src: "https://digitalbooking-imagenes-grupo8.s3.us-east-2.amazonaws.com/imgs/categories/apartment-room.jpg", width: 320, height: 213 },
              { src: "https://digitalbooking-imagenes-grupo8.s3.us-east-2.amazonaws.com/imgs/categories/apartment-room.jpg", width: 640, height: 427 },
              { src: "https://digitalbooking-imagenes-grupo8.s3.us-east-2.amazonaws.com/imgs/categories/apartment-room.jpg", width: 1200, height: 800 },
              { src: "https://digitalbooking-imagenes-grupo8.s3.us-east-2.amazonaws.com/imgs/categories/apartment-room.jpg", width: 2048, height: 1365 },
              { src: "https://digitalbooking-imagenes-grupo8.s3.us-east-2.amazonaws.com/imgs/categories/apartment-room.jpg", width: 3840, height: 2560 },
            ]
          },
          // ...
        ]}
      />
      
    </>
  );
}
