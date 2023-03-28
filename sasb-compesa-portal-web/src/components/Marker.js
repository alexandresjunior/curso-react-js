import { Icon } from "@iconify/react";
import DamIcon from "@iconify/icons-flat-color-icons/dam";
import { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";

const Marker = ({ barragem }) => {
  const [width, setWidth] = useState("15%");
  const [showInfo, setShowInfo] = useState(false);
  const [infoPosition, setInfoPosition] = useState({ lat: 0, lng: 0 });

  const handleMarkerClick = ({ lat, lng }) => {
    setInfoPosition({ lat, lng });
    setShowInfo(true);
  };

  const handleCloseClick = () => {
    setShowInfo(false);
  };

  const renderInfo = () => {
    if (!showInfo) {
      return null;
    }

    const style = {
      position: "absolute",
      top: `${infoPosition.lat - 175}px`,
      left: `${infoPosition.lng + 50}px`,
      backgroundColor: "white",
      padding: "1rem",
      border: "1px solid black",
      borderRadius: "5px",
      width: "250px",
    };

    return (
      <div className="card-body" style={style}>
        <div className="d-flex justify-content-between mb-3">
          <h5 className="card-title">
            <b>{barragem.nome}</b>
          </h5>
          <button className="no-style-button" onClick={handleCloseClick}>
            <ImCancelCircle className="ms-1" size={20} />
          </button>
        </div>

        <div className="card-text mb-2">
          <b>Localização: </b>
          {barragem.localizacao?.municipio}, {barragem.localizacao?.estado}
        </div>
        <div className="card-text mb-2">
          <b>PAE: </b>Entregue no dia DD/MM/AAAA
        </div>
        <div className="card-text mb-2">
          <b>PSB: </b>Entregue no dia DD/MM/AAAA
        </div>
        <div className="card-text mb-2">
          <b>Inspeções: </b>EM DIA
        </div>

        <Link
          className="d-flex justify-content-end link"
          to={`/barragem/${barragem.id}`}
        >
          Ver Detalhes
        </Link>
      </div>
    );
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
      {renderInfo()}
    </div>
  );
};

export default Marker;
