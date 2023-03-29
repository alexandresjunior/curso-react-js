import { useContext, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { TfiSave } from "react-icons/tfi";
import icon from "../../../assets/pdf_download.png";
import { GlobalContext } from "../../../contexts/GlobalContext";

const InspecoesCard = ({ barragem }) => {
  const { isSignedIn } = useContext(GlobalContext);
  const [editMode, setEditMode] = useState(!barragem);
  const [inspecoes] = useState(barragem?.inspecao?.inspecoes);

  return (
    <div className="card card-blue card-scrollable mb-4">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title mb-3">
            <b>Inspeções</b>
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

        <section>
          <div className="card-text">
            <b>Prioridade: </b>
            {editMode ? (
              <div className="input-group input-group-sm mt-2 mb-3">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  defaultValue={barragem?.inspecao?.prioridade}
                />
              </div>
            ) : (
              <>{barragem?.inspecao?.prioridade}</>
            )}
          </div>
          <div className="card-text">
            <b>Frequência: </b>
            {editMode ? (
              <div className="input-group input-group-sm mt-2 mb-3">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  defaultValue={barragem?.inspecao?.frequencia}
                />
              </div>
            ) : (
              <>{barragem?.inspecao?.frequencia}</>
            )}
          </div>
          <div className="card-text">
            <b>Status: </b>
            {editMode ? (
              <div className="input-group input-group-sm mt-2 mb-3">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled>
                    Selecione o status
                  </option>
                  <option value="EM DIA">EM DIA</option>
                  <option value="PENDENTE">PENDENTE</option>
                </select>
              </div>
            ) : (
              <span className="text-danger fw-bold">
                {barragem?.inspecao?.status}
              </span>
            )}
          </div>
        </section>

        <h5 className="card-title mt-3 mb-3">
          <b>Relatórios de Inspeções Realizadas</b>
        </h5>

        {editMode && (
          <button className="btn btn-sasb-blue-sm mb-3" onClick={() => {}}>
            NOVA INSPEÇÃO
          </button>
        )}

        <div className="scrollable">
          {inspecoes?.map((inspecao, index) => {
            return editMode ? (
              <div className="container border border-secondary rounded mb-3 p-2" key={index}>
                <small className="fw-bold">Nome:</small>
                <div className="input-group input-group-sm mt-2 mb-2">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    defaultValue={inspecao?.nome}
                  />
                </div>

                <small className="fw-bold">Data:</small>
                <div className="input-group input-group-sm mt-2 mb-2">
                  <input
                    type="date"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    defaultValue={inspecao?.data}
                  />
                </div>

                <small className="fw-bold">Link para o arquivo:</small>
                <div className="input-group input-group-sm mt-2 mb-2">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    defaultValue={inspecao?.link}
                  />
                </div>

                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-sasb-red-sm my-2"
                    data-bs-toggle="modal"
                    data-bs-target="#alertModal"
                    onClick={() => {}}
                  >
                    EXCLUIR INSPEÇÃO
                  </button>
                </div>
              </div>
            ) : (
              <div className="row mb-3" key={index}>
                <div className="col-2">
                  <a href={inspecao?.link}>
                    <img
                      src={icon}
                      alt="Baixar relatório de inspeção"
                      width={"50px"}
                    />
                  </a>
                </div>
                <div className="col-10">
                  <div className="card-text">
                    <b>{inspecao?.nome}</b>
                  </div>
                  <div className="card-text">
                    <b>Data: </b>
                    {inspecao?.data}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {editMode ? (
          <div className="card-text mt-2">
            <b>Link para os documentos: </b>
            <div className="input-group input-group-sm mt-2 mb-3">
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                defaultValue={"http://link-para-os-documentos.pdf"}
              />
            </div>
          </div>
        ) : (
          <a
            className="btn btn-lg btn-sasb-blue mt-3 w-100"
            target={"_blank"}
            href="./"
          >
            BAIXAR TODOS OS RELATÓRIOS
          </a>
        )}
      </div>
    </div>
  );
};

export default InspecoesCard;
