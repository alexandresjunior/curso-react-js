import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../../../components/SearchBar";
import { aplicarEstilo } from "../../../utils";

const Barragens = () => {
  const navigate = useNavigate();

  return (
    <div className="card card-blue card-scrollable-sm mx-5 my-4">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <span className="card-title mb-3 p-2">
            <b>Barragens</b>
          </span>
        </div>

        <div className="d-flex justify-content-start mx-2">
          <SearchBar
            placeholder={"Digite o nome do barragem"}
            shadow={false}
            setBusca={() => {}}
          />
        </div>

        <div className="scrollable-lg">
          <table className="table table-borderless">
            <thead>
              <tr>
                <th className="small">Nome</th>
                <th className="small">Município</th>
                <th className="small">Classificação de Risco</th>
                <th className="small">Dado Potencial Associado</th>
                <th className="small">Plano de Ação Emergencial</th>
                <th className="small">Plano de Segurança</th>
                <th className="small">Inspeção</th>
                <th className="small"></th>
                <th className="small"></th>
              </tr>
            </thead>
            <tbody>
              {barragens.map((barragem, index) => {
                return (
                  <tr key={index}>
                    <td className="small">{barragem.nome}</td>
                    <td className="small">{barragem.municipio}</td>
                    <td className="small">{barragem.risco}</td>
                    <td className="small">{barragem.dpa}</td>
                    <td className="small" style={aplicarEstilo(barragem.pae)}>
                      {barragem.pae}
                    </td>
                    <td className="small" style={aplicarEstilo(barragem.psb)}>
                      {barragem.psb}
                    </td>
                    <td
                      className="small"
                      style={aplicarEstilo(barragem.inspecao)}
                    >
                      {barragem.inspecao}
                    </td>
                    <td>
                      <Link className="link" to={`/barragem/detalhes/${barragem.id}`}>
                        Editar
                      </Link>
                    </td>
                    <td>
                      <button
                        className="no-style-button link"
                        onClick={() => {}}
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-end">
          <button className="btn btn-lg btn-sasb-blue mt-3" onClick={() => navigate("/barragem/cadastro")}>
            NOVA BARRAGEM
          </button>
        </div>
      </div>
    </div>
  );
};

export default Barragens;

const barragens = [
  {
    id: 1,
    nome: "Brejinho (Pajeú)",
    municipio: "Brejinho",
    risco: "Médio",
    dpa: "Médio",
    pae: "Entregue",
    psb: "Entregue",
    inspecao: "Em dia",
  },
  {
    id: 2,
    nome: "Tapacurá",
    municipio: "São Lourenço da Mata",
    risco: "Alto",
    dpa: "Alto",
    pae: "A Fazer",
    psb: "Entregue",
    inspecao: "Em dia",
  },
  {
    id: 3,
    nome: "Xaréu",
    municipio: "Fernando de Noronha",
    risco: "Baixo",
    dpa: "Baixo",
    pae: "Em Elaboração",
    psb: "Em Elaboração",
    inspecao: "Pendente",
  },
  {
    id: 4,
    nome: "Barragem de Carpina",
    municipio: "Carpina",
    risco: "Alto",
    dpa: "Alto",
    pae: "Em Elaboração",
    psb: "Entregue",
    inspecao: "Pendente",
  },
  {
    id: 5,
    nome: "Bonitinho",
    municipio: "Bonito",
    risco: "Alto",
    dpa: "Médio",
    pae: "Em Elaboração",
    psb: "Entregue",
    inspecao: "Em dia",
  },
  {
    id: 6,
    nome: "Brejinho (Pajeú)",
    municipio: "Brejinho",
    risco: "Médio",
    dpa: "Médio",
    pae: "Entregue",
    psb: "Entregue",
    inspecao: "Em dia",
  },
  {
    id: 7,
    nome: "Tapacurá",
    municipio: "São Lourenço da Mata",
    risco: "Alto",
    dpa: "Alto",
    pae: "A Fazer",
    psb: "Entregue",
    inspecao: "Em dia",
  },
  {
    id: 8,
    nome: "Xaréu",
    municipio: "Fernando de Noronha",
    risco: "Baixo",
    dpa: "Baixo",
    pae: "Em Elaboração",
    psb: "Em Elaboração",
    inspecao: "Pendente",
  },
  {
    id: 9,
    nome: "Barragem de Carpina",
    municipio: "Carpina",
    risco: "Alto",
    dpa: "Alto",
    pae: "Em Elaboração",
    psb: "Entregue",
    inspecao: "Pendente",
  },
  {
    id: 10,
    nome: "Bonitinho",
    municipio: "Bonito",
    risco: "Alto",
    dpa: "Médio",
    pae: "Em Elaboração",
    psb: "Entregue",
    inspecao: "Em dia",
  },
  {
    id: 11,
    nome: "Brejinho (Pajeú)",
    municipio: "Brejinho",
    risco: "Médio",
    dpa: "Médio",
    pae: "Entregue",
    psb: "Entregue",
    inspecao: "Em dia",
  },
  {
    id: 12,
    nome: "Tapacurá",
    municipio: "São Lourenço da Mata",
    risco: "Alto",
    dpa: "Alto",
    pae: "A Fazer",
    psb: "Entregue",
    inspecao: "Em dia",
  },
  {
    id: 13,
    nome: "Xaréu",
    municipio: "Fernando de Noronha",
    risco: "Baixo",
    dpa: "Baixo",
    pae: "Em Elaboração",
    psb: "Em Elaboração",
    inspecao: "Pendente",
  },
  {
    id: 14,
    nome: "Barragem de Carpina",
    municipio: "Carpina",
    risco: "Alto",
    dpa: "Alto",
    pae: "Em Elaboração",
    psb: "Entregue",
    inspecao: "Pendente",
  },
  {
    id: 15,
    nome: "Bonitinho",
    municipio: "Bonito",
    risco: "Alto",
    dpa: "Médio",
    pae: "Em Elaboração",
    psb: "Entregue",
    inspecao: "Em dia",
  },
];
