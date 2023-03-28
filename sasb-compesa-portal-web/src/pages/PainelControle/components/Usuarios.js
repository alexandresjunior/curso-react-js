import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../../components/SearchBar";
import { LISTA_USUARIOS } from "../../../mocks/usuarios";

const Usuarios = () => {
  const [usuarios] = useState(LISTA_USUARIOS);

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
                      <Link className="link" to={`/usuario/detalhes/${usuario.id}`}>
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
          <Link
            className="btn btn-lg btn-sasb-blue mt-3"
            to={"/usuario/cadastro"}
          >
            NOVO USUÁRIO
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Usuarios;
