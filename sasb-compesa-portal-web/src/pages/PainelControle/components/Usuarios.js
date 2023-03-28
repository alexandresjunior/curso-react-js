import { Link } from "react-router-dom";
import SearchBar from "../../../components/SearchBar";

const Usuarios = () => {
  return (
    <div className="card card-blue card-scrollable-sm mx-5 my-4">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <span className="card-title mb-3 p-2">
            <b>Usuários</b>
          </span>
        </div>

        <div className="d-flex justify-content-start mx-2">
          <SearchBar
            placeholder={"Digite o nome do usuário"}
            shadow={false}
            setBusca={() => {}}
          />
        </div>

        <div className="scrollable-sm">
          <table className="table table-borderless">
            <thead>
              <tr>
                <th className="small">Nome</th>
                <th className="small">Matrícula</th>
                <th className="small">Cargo</th>
                <th className="small">E-mail</th>
                <th className="small">Função</th>
                <th className="small">Contato</th>
                <th className="small"></th>
                <th className="small"></th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario, index) => {
                return (
                  <tr key={index}>
                    <td className="small">{usuario.nome}</td>
                    <td className="small">{usuario.matricula}</td>
                    <td className="small">{usuario.cargo}</td>
                    <td className="small">{usuario.email}</td>
                    <td className="small">{usuario.funcao}</td>
                    <td className="small">{usuario.contato}</td>
                    <td>
                      <Link className="link" to={`/usuario/${usuario.id}`}>
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
          <button className="btn btn-lg btn-sasb-blue mt-3" onClick={() => {}}>
            NOVO USUÁRIO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Usuarios;

const usuarios = [
  {
    id: 1,
    nome: "Alexandre de Souza Jr.",
    matricula: "11339",
    cargo: "Analista de Saneamento",
    email: "alexandresouzajr@compesa.com.br",
    funcao: "Administrador",
    contato: "(81) 99999-9999",
  },
  {
    id: 2,
    nome: "Hudson Tiago Pedrosa",
    matricula: "12345",
    cargo: "Gerente",
    email: "hudsontiago@compesa.com.br",
    funcao: "Administrador",
    contato: "(81) 99999-9999",
  },
  {
    id: 3,
    nome: "Taianne Ellis",
    matricula: "12346",
    cargo: "Analista de Saneamento",
    email: "taianneellis@compesa.com.br",
    funcao: "Colaborador",
    contato: "(81) 99999-9999",
  },
  {
    id: 4,
    nome: "Júlio Tenório",
    matricula: "12347",
    cargo: "Analista de Saneamento",
    email: "juliotenorio@compesa.com.br",
    funcao: "Colaborador",
    contato: "(81) 99999-9999",
  },
  {
    id: 5,
    nome: "Mayra Freire",
    matricula: "12349",
    cargo: "Estagiário",
    email: "mayrafreire@compesa.com.br",
    funcao: "Colaborador",
    contato: "(81) 99999-9999",
  },
  {
    id: 6,
    nome: "Romik Junior",
    matricula: "12348",
    cargo: "Estagiário",
    email: "romikjunior@compesa.com.br",
    funcao: "Colaborador",
    contato: "(81) 99999-9999",
  },
];
