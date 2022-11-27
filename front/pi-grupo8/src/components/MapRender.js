
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import React, { useRef, useEffect, useState } from 'react';
import styleMap from "../Styles/map.module.scss";

export default function MapRender(props){
    console.log(props.value.data[0].lat);
    let latitude = JSON.parse(props.value.data[0].lat);
    console.log(latitude)
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2VyYXN4IiwiYSI6ImNsYXhlNWhpYjBvbGozbm54MW0xZWhvcTMifQ.GcUtEA2i-AMAeY9Qy_rpdQ';

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-59.136058);
    const [lat, setLat] = useState(-37.335209);
    const [zoom, setZoom] = useState(20);
    
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