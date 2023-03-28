import { Icon } from "@iconify/react";
import DamIcon from "@iconify/icons-flat-color-icons/dam";
import { useState } from "react";
import InfoWindow from "./InfoWindow";

const Marker = ({ barragem }) => {
  const [width, setWidth] = useState("15%");
  const [showInfo, setShowInfo] = useState(false);
  const [infoPosition, setInfoPosition] = useState({ lat: 0, lng: 0 });

  const handleMarkerClick = ({ lat, lng }) => {
    setInfoPosition({ lat, lng });
    setShowInfo(true);
  };

  return (
    <div className="marker">
      <Icon
        icon={DamIcon}
        width={width}
        onMouseEnter={() => setWidth("20%")}
        onMouseLeave={() => setWidth("15%")}
        onClick={() =>
          handleMarkerClick({
            lat: barragem.localizacao?.latitude,
            lng: barragem.localizacao?.longitude,
          })
        }
      />
      <p className="marker-text">{barragem.nome}</p>
      {
        <InfoWindow
          barragem={barragem}
          showInfo={showInfo}
          setShowInfo={setShowInfo}
          infoPosition={infoPosition}
        />
      }
    </div>
  );
};

export default Marker;
