
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import React, { useRef, useEffect, useState } from 'react';
import styleMap from "../Styles/map.module.scss";
//import useApiMaps from "../api-maps/useApiMaps";

export default function MapRender(){
   
    mapboxgl.accessToken = "pk.eyJ1Ijoibm92YXlvcnkiLCJhIjoiY2xiOGdwdjRkMGwxYTNycWNzdTJnZTN3cyJ9.682Jam3sMBM7jLwjgmP9Hg";

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng ] = useState(-57.54018523105511);
    const [lat] = useState(-38.007855172650494);
    const [zoom] = useState(19);
    
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom: zoom
        });
    });
      
    return (
        <div>
      <div ref={mapContainer} className={styleMap.mapContainer}/>
      
      </div>
        
      );
}