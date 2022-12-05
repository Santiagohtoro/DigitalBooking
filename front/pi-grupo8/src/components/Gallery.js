import React,{ useState} from 'react';
import galleryStyle from '../Styles/gallery.module.scss';


//Componente Galeria sin terminar



export default function Gallery() {
    const link="https://digitalbooking-imagenes-grupo8.s3.us-east-2.amazonaws.com/imgs/products/hotels/hotel1.jpg";
 
   
        let data =[
            {
                id:1,
                imgSrc: link,
            },
            {
                id:2,
                imgSrc: link,
            },
            {
                id:3,
                imgSrc: link,
            },
            {
                id:4,
                imgSrc: link,
            },
            {
                id:5,
                imgSrc: link,
            },
        ]
        const [model, setModel] = useState(false);
        //const [tempmgSrc, setTempImgSrc] = useState('');
        const getImg=(imgSrc)=>{
            setModel(true);
            //setTempImgSrc(imgSrc);
        }

    return(

        <>
        <div className={model? `{galleryStyle.modelOpen}`:`{galleryStyle.model}`}></div>
        <div className={galleryStyle.container}>
            {data.map((item, index)=>{
                return(
                <div className={galleryStyle.item} key={index} onClick={()=>getImg(item.imgSrc)}>
                    <img src={item.imgSrc} alt="" className={galleryStyle.image}/>
                </div>
                )
            })}
            
        </div>
        </>
 
    );
}