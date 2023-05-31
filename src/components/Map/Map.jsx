import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOutlineIcon from "@material-ui/icons/LocalActivityOutlined";
import { Rating } from '@material-ui/lab';

import useStyle from "./styles";

function Map({setCoordinates, setBounds,coordinates}) {
    const classes = useStyle();
    const isMobile = useMediaQuery('(min-width:600px)');
    const coordinates ={lat: 0, lng: 0};


  return (
    <div className={classes.mapContainer}>

       <GoogleMapReact
         bootstrapURLKeys={{key: 'AIzaSyATzI62JjgOYjGabbTAO78aY-EwIc0CnRU'}}
         defaultCenter={coordinates}
         center={coordinates}
         defaultZoom={14}
         margin={[50,50,50,50]}
         options={''}
         onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          // setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}

         onChildClick={''}
         >
      
      </GoogleMapReact>
    </div>
  )
}

export default Map