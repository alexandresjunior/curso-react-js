import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";

const InfoWindow = ({ barragem, showInfo, setShowInfo, infoPosition }) => {
  const handleCloseClick = () => {
    setShowInfo(false);
  };
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
        to={`/barragem/detalhes/${barragem.id}`}
      >
        Ver Detalhes
      </Link>
    </div>
  );
};

export default InfoWindow;
