import { FiEdit } from "react-icons/fi";
import { TfiSave } from "react-icons/tfi";
import { ImCancelCircle } from "react-icons/im";
import { useState } from "react";

const InformacoesGeraisCard = () => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="card card-blue mb-4">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title mb-3">
            <b>Informações Gerais</b>
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
          <b>Nome da barragem: </b>Tapacurá
        </div>
        <section className="mb-2">
          <div className="card-text">
            <b>Localização: </b>São Lourenço da Mata - PE
          </div>
          <div className="card-text">
            <b>Ano de Construção: </b>1970
          </div>
        </section>
        <section>
          <div className="card-text">
            <b>Diretoria: </b>DRI
          </div>
          <div className="card-text">
            <b>Gerência: </b>Agreste
          </div>
          <div className="card-text">
            <b>Coordenação: </b>GPR Sertão
          </div>
          <div className="card-text">
            <b>Titularidade: </b>COMPESA
          </div>
        </section>
      </div>
    </div>
  );
};

export default InformacoesGeraisCard;
