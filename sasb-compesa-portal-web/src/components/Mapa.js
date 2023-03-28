import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

const DEFAULT_ZOOM = 8;

const Mapa = ({ barragens, coordenadas }) => {
  return (
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordenadas}
        defaultZoom={DEFAULT_ZOOM}
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
