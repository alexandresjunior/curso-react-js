import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "../../components/Marker";
import { barragens } from "../../mocks/barragens";

const Mapa = () => {
  const center = {
    lat: -8.470697,
    lng: -38.371057,
  };

  return (
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={center}
        defaultZoom={7}
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
