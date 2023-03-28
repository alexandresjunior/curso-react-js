import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

const DEFAULT_ZOOM = 8;

const Mapa = ({ barragens, coordenadas }) => {
  return (
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={coordenadas}
        defaultZoom={DEFAULT_ZOOM}
      >
        {barragens?.map((barragem, index) => {
          return (
            <Marker
              lat={barragem.localizacao?.latitude}
              lng={barragem.localizacao?.longitude}
              text={barragem.nome}
              key={index}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Mapa;
