import { FiEdit } from "react-icons/fi";
import { TfiSave } from "react-icons/tfi";
import { ImCancelCircle } from "react-icons/im";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";

const InformacoesGeraisCard = ({ barragem }) => {
  const { isSignedIn } = useContext(GlobalContext);
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="card card-blue mb-4">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title mb-3">
            <b>Informações Gerais</b>
          </h5>

          {!isSignedIn ? (
            <></>
          ) : !editMode ? (
            <div>
              <button
                className="no-style-button"
                onClick={() => setEditMode(true)}
              >
                <FiEdit size={20} />
              </button>
            </div>
          ) : (
            <div>
              <button className="no-style-button" onClick={() => {}}>
                <TfiSave className="me-1" size={20} />
              </button>
              <button
                className="no-style-button"
                onClick={() => setEditMode(false)}
              >
                <ImCancelCircle className="ms-1" size={20} />
              </button>
            </div>
          )}
        </div>

        <div className="card-text mb-2">
          <b>Nome da barragem: </b>
          {editMode ? (
            <div className="input-group input-group-sm mt-2 mb-3">
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                defaultValue={barragem.nome}
              />
            </div>
          ) : (
            <>{barragem.nome}</>
          )}
        </div>

        <section className="mb-2">
          <div className="card-text">
            <b>Localização: </b>
            {editMode ? (
              <div className="input-group input-group-sm mt-2 mb-3">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  defaultValue={`${barragem.localizacao?.municipio} - ${barragem.localizacao?.estado}`}
                />
              </div>
            ) : (
              <>
                {barragem.localizacao?.municipio} -{" "}
                {barragem.localizacao?.estado}
              </>
            )}
          </div>

          <div className="card-text">
            <b>Ano de Construção: </b>
            {editMode ? (
              <div className="input-group input-group-sm mt-2 mb-3">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  defaultValue={barragem.anoConstrucao}
                />
              </div>
            ) : (
              <>{barragem.anoConstrucao}</>
            )}
          </div>
        </section>
        <section>
          <div className="card-text">
            <b>Diretoria: </b>
            {editMode ? (
              <div className="input-group input-group-sm mt-2 mb-3">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  defaultValue={barragem.diretoria}
                />
              </div>
            ) : (
              <>{barragem.diretoria}</>
            )}
          </div>
          <div className="card-text">
            <b>Gerência: </b>
            {editMode ? (
              <div className="input-group input-group-sm mt-2 mb-3">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  defaultValue={barragem.gerencia}
                />
              </div>
            ) : (
              <>{barragem.gerencia}</>
            )}
          </div>
          <div className="card-text">
            <b>Coordenação: </b>
            {editMode ? (
              <div className="input-group input-group-sm mt-2 mb-3">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  defaultValue={barragem.coordenacao}
                />
              </div>
            ) : (
              <>{barragem.coordenacao}</>
            )}
          </div>
          <div className="card-text">
            <b>Titularidade: </b>
            {editMode ? (
              <div className="input-group input-group-sm mt-2 mb-3">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  defaultValue={barragem.titularidade}
                />
              </div>
            ) : (
              <>{barragem.titularidade}</>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default InformacoesGeraisCard;
