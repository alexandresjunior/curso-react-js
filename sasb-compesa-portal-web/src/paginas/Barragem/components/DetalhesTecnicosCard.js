import { useContext, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { TfiSave } from "react-icons/tfi";
import { GlobalContext } from "../../../contexts/GlobalContext";

const DetalhesTecnicosCard = ({ barragem }) => {
  const { isSignedIn } = useContext(GlobalContext);
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="card card-blue mb-4">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title mb-3">
            <b>Detalhes Técnicos</b>
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
          <b>Material: </b>
          {editMode ? (
            <div className="input-group input-group-sm mt-2 mb-3">
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                defaultValue={barragem.detalhes?.material}
              />
            </div>
          ) : (
            <>{barragem.detalhes?.material}</>
          )}
        </div>
        <section className="mb-2">
          <div className="card-text">
            <b>Capacidade: </b>
            {editMode ? (
              <div className="input-group input-group-sm mt-2 mb-3">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  defaultValue={barragem.detalhes?.capacidadeM3}
                />
              </div>
            ) : (
              <>{barragem.detalhes?.capacidadeM3} m³</>
            )}
          </div>
          <div className="card-text">
            <b>Altura: </b>
            {editMode ? (
              <div className="input-group input-group-sm mt-2 mb-3">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  defaultValue={barragem.detalhes?.alturaM}
                />
              </div>
            ) : (
              <>{barragem.detalhes?.alturaM} m</>
            )}
          </div>
          <div className="card-text">
            <b>Comprimento: </b>
            {editMode ? (
              <div className="input-group input-group-sm mt-2 mb-3">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  defaultValue={barragem.detalhes?.comprimentoM}
                />
              </div>
            ) : (
              <>{barragem.detalhes?.comprimentoM} m</>
            )}
          </div>
        </section>
        <section>
          <div className="card-text">
            <b>Bacia Hidrográfica: </b>
            {editMode ? (
              <div className="input-group input-group-sm mt-2 mb-3">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  defaultValue={barragem.detalhes?.bacia}
                />
              </div>
            ) : (
              <>{barragem.detalhes?.bacia}</>
            )}
          </div>
          <div className="card-text">
            <b>Área Bacia Hidrográfica: </b>
            {editMode ? (
              <div className="input-group input-group-sm mt-2 mb-3">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  defaultValue={barragem.detalhes?.areaBaciaHidrograficaKm2}
                />
              </div>
            ) : (
              <>{barragem.detalhes?.areaBaciaHidrograficaKm2} km²</>
            )}
          </div>
          <div className="card-text">
            <b>Área Bacia Hidráulica: </b>
            {editMode ? (
              <div className="input-group input-group-sm mt-2 mb-3">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  defaultValue={barragem.detalhes?.areaBaciaHidraulicaM2}
                />
              </div>
            ) : (
              <>{barragem.detalhes?.areaBaciaHidraulicaM2} m²</>
            )}
          </div>
          <div className="card-text">
            <b>Área Inundada: </b>
            {editMode ? (
              <div className="input-group input-group-sm mt-2 mb-3">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  defaultValue={barragem.detalhes?.areaInundadaM2}
                />
              </div>
            ) : (
              <>{barragem.detalhes?.areaInundadaM2} m²</>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DetalhesTecnicosCard;
