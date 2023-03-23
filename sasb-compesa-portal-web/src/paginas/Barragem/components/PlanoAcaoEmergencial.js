import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { TfiSave } from "react-icons/tfi";

const PlanoAcaoEmergencialCard = () => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="card card-blue mb-4">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title mb-3">
            <b>Plano de Ação Emergencial</b>
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

        <p className="card-text mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet
          erat sed euismod tempor. Donec sit amet aliquet enim, a pretium lacus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet
          erat sed euismod tempor. Donec sit amet aliquet enim, a pretium lacus.
        </p>
        <section>
          <div className="card-text">
            <b>Status: </b>
            {editMode ? (
              <div class="input-group input-group-sm mt-2 mb-3">
                <select class="form-select" aria-label="Default select example">
                  <option value="0">Selecione o status</option>
                  <option value="1">A FAZER</option>
                  <option value="2">EM ELABORAÇÃO</option>
                  <option value="3">CONCLUÍDA</option>
                </select>
              </div>
            ) : (
              <span className="text-warning-emphasis fw-bold">
                EM ELABORAÇÃO
              </span>
            )}
          </div>
          <div className="card-text">
            <b>Data de Entrega: </b>
            {editMode ? (
              <div class="input-group input-group-sm mt-2 mb-3">
                <input
                  type="date"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  defaultValue={"dd/MM/aaaa"}
                />
              </div>
            ) : (
              <>dd/MM/aaaa</>
            )}
          </div>
        </section>

        {editMode ? (
          <div className="card-text">
            <b>Link para o documento: </b>
            <div class="input-group input-group-sm mt-2 mb-3">
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                defaultValue={"http://link-para-o-documento.pdf"}
              />
            </div>
          </div>
        ) : (
          <a
            className="btn btn-lg btn-sasb-blue mt-3 w-100"
            target={"_blank"}
            href="./"
          >
            BAIXAR DOCUMENTO
          </a>
        )}
      </div>
    </div>
  );
};

export default PlanoAcaoEmergencialCard;
