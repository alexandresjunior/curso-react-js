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

        <section>
          <div className="card-text">
            <b>Prioridade: </b>2
          </div>
          <div className="card-text">
            <b>Frequência: </b>Anual
          </div>
          <div className="card-text">
            <b>Status: </b>Pendente
          </div>
        </section>

        <h5 className="card-title mt-3 mb-3">
          <b>Relatórios de Inspeções Realizadas</b>
        </h5>
        <div class="scrollable">
          {inspecoes?.map((inspecao, index) => {
            return (
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

        <button className="btn btn-lg btn-sasb-blue mt-3 w-100">
          BAIXAR TODOS OS RELATÓRIOS
        </button>
      </div>
    </div>
  );
};

export default InspecoesCard;

const inspecoes = [
  {
    nome: "1º Relatório de Inspeção Regular",
    data: "23/03/2019",
    link: "./",
  },
  {
    nome: "2º Relatório de Inspeção Regular",
    data: "21/03/2020",
    link: "./",
  },
  {
    nome: "3º Relatório de Inspeção Regular",
    data: "19/03/2021",
    link: "./",
  },
  {
    nome: "4º Relatório de Inspeção Regular",
    data: "20/03/2022",
    link: "./",
  },
  {
    nome: "5º Relatório de Inspeção Regular",
    data: "17/03/2023",
    link: "./",
  },
];
