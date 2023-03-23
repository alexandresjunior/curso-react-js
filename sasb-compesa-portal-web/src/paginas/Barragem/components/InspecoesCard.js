import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { TfiSave } from "react-icons/tfi";
import icon from "../../../assets/pdf_download.png";

const InspecoesCard = () => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="card card-blue card-scrollable mb-4">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title mb-3">
            <b>Inspeções</b>
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

        <section>
          <div className="card-text">
            <b>Prioridade: </b>
            {editMode ? (
              <div class="input-group input-group-sm mt-2 mb-3">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  defaultValue={"2"}
                />
              </div>
            ) : (
              <>2</>
            )}
          </div>
          <div className="card-text">
            <b>Frequência: </b>
            {editMode ? (
              <div class="input-group input-group-sm mt-2 mb-3">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  defaultValue={"Anual"}
                />
              </div>
            ) : (
              <>Anual</>
            )}
          </div>
          <div className="card-text">
            <b>Status: </b>
            {editMode ? (
              <div class="input-group input-group-sm mt-2 mb-3">
                <select class="form-select" aria-label="Default select example">
                  <option value="0">Selecione o status</option>
                  <option value="1">EM DIA</option>
                  <option value="2">PENDENTE</option>
                </select>
              </div>
            ) : (
              <span className="text-danger fw-bold">PENDENTE</span>
            )}
          </div>
        </section>

        <h5 className="card-title mt-3 mb-3">
          <b>Relatórios de Inspeções Realizadas</b>
        </h5>

        {editMode && (
          <button className="btn btn-sm btn-sasb-blue mb-3" onClick={() => {}}>
            NOVA INSPEÇÃO
          </button>
        )}

        <div class="scrollable">
          {inspecoes?.map((inspecao, index) => {
            return editMode ? (
              <div class="container border border-secondary rounded mb-3 p-2">
                <small className="fw-bold">Nome:</small>
                <div class="input-group input-group-sm mt-2 mb-3">
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    defaultValue={inspecao.nome}
                  />
                </div>

                <small className="fw-bold">Data:</small>
                <div class="input-group input-group-sm mt-2 mb-3">
                  <input
                    type="date"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    defaultValue={inspecao.data}
                  />
                </div>

                <small className="fw-bold">Link para o arquivo:</small>
                <div class="input-group input-group-sm mt-2 mb-3">
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    defaultValue={inspecao.link}
                  />
                </div>

                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-sm btn-sasb-blue-sm my-2"
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
                  <a href={inspecao.link}>
                    <img
                      src={icon}
                      alt="Baixar relatório de inspeção"
                      width={"50px"}
                    />
                  </a>
                </div>
                <div className="col-10">
                  <div className="card-text">
                    <b>{inspecao.nome}</b>
                  </div>
                  <div className="card-text">
                    <b>Data: </b>
                    {inspecao.data}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {editMode ? (
          <div className="card-text mt-2">
            <b>Link para os documentos: </b>
            <div class="input-group input-group-sm mt-2 mb-3">
              <input
                type="text"
                class="form-control"
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

const inspecoes = [
  {
    nome: "1º Relatório de Inspeção Regular",
    data: "23/03/2019",
    link: "http://link-para-o-documento.pdf",
  },
  {
    nome: "2º Relatório de Inspeção Regular",
    data: "21/03/2020",
    link: "http://link-para-o-documento.pdf",
  },
  {
    nome: "3º Relatório de Inspeção Regular",
    data: "19/03/2021",
    link: "http://link-para-o-documento.pdf",
  },
  {
    nome: "4º Relatório de Inspeção Regular",
    data: "20/03/2022",
    link: "http://link-para-o-documento.pdf",
  },
  {
    nome: "5º Relatório de Inspeção Regular",
    data: "17/03/2023",
    link: "http://link-para-o-documento.pdf",
  },
];
