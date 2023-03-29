import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import { DEFAULT_CENTER, DEFAULT_ZOOM_OUT } from "../states/mapa";

const Mapa = ({ barragens, coordenadas, zoom }) => {
  return (
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={DEFAULT_CENTER}
        defaultZoom={DEFAULT_ZOOM_OUT}
        center={coordenadas}
        zoom={zoom}
      >
        {barragens?.map((barragem, index) => {
          return (
            <Marker
              lat={barragem.localizacao?.latitude}
              lng={barragem.localizacao?.longitude}
              barragem={barragem}
              key={index}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Mapa;
