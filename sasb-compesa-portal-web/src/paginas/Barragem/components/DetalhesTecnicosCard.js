import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { TfiSave } from "react-icons/tfi";

const DetalhesTecnicosCard = () => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="card card-blue mb-4">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title mb-3">
            <b>Detalhes Técnicos</b>
          </h5>
          {!editMode ? (
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
            <div class="input-group input-group-sm mt-2 mb-3">
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                defaultValue={"Barragem de Concreto"}
              />
            </div>
          ) : (
            <>Barragem de Concreto</>
          )}
        </div>
        <section className="mb-2">
          <div className="card-text">
            <b>Capacidade: </b>
            {editMode ? (
              <div class="input-group input-group-sm mt-2 mb-3">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  defaultValue={"0000.0"}
                />
              </div>
            ) : (
              <>0000.0 m³</>
            )}
          </div>
          <div className="card-text">
            <b>Altura: </b>
            {editMode ? (
              <div class="input-group input-group-sm mt-2 mb-3">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  defaultValue={"000.0"}
                />
              </div>
            ) : (
              <>000.0 m</>
            )}
          </div>
          <div className="card-text">
            <b>Comprimento: </b>
            {editMode ? (
              <div class="input-group input-group-sm mt-2 mb-3">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  defaultValue={"0000.0"}
                />
              </div>
            ) : (
              <>0000.0 m</>
            )}
          </div>
        </section>
        <section>
          <div className="card-text">
            <b>Bacia Hidrográfica: </b>
            {editMode ? (
              <div class="input-group input-group-sm mt-2 mb-3">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  defaultValue={"A Definir"}
                />
              </div>
            ) : (
              <>A Definir</>
            )}
          </div>
          <div className="card-text">
            <b>Área Bacia Hidrográfica: </b>
            {editMode ? (
              <div class="input-group input-group-sm mt-2 mb-3">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  defaultValue={"000.0"}
                />
              </div>
            ) : (
              <>000.0m²</>
            )}
          </div>
          <div className="card-text">
            <b>Área Bacia Hidráulica: </b>
            {editMode ? (
              <div class="input-group input-group-sm mt-2 mb-3">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  defaultValue={"000.0"}
                />
              </div>
            ) : (
              <>000.0m²</>
            )}
          </div>
          <div className="card-text">
            <b>Área Inundada: </b>
            {editMode ? (
              <div class="input-group input-group-sm mt-2 mb-3">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  defaultValue={"000.0"}
                />
              </div>
            ) : (
              <>000.0m²</>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DetalhesTecnicosCard;
