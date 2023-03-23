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
            <b>
              Status:{" "}
              <span className="text-warning-emphasis">EM ELABORAÇÃO</span>
            </b>
          </div>
          <div className="card-text">
            <b>Data de Entrega: </b>dd/MM/aaaa
          </div>
        </section>
        <button className="btn btn-lg btn-sasb-blue mt-3 w-100">
          BAIXAR DOCUMENTO
        </button>
      </div>
    </div>
  );
};

export default PlanoAcaoEmergencialCard;
