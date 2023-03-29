import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../../assets/sasb_compesa_logo.png";
import { LISTA_USUARIOS } from "../../mocks/usuarios";

const Usuario = () => {
  const { id } = useParams();

  const usuario = LISTA_USUARIOS[id - 1];

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [matricula, setMatricula] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConf, setSenhaConf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [funcao, setFuncao] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleCadastro = () => {
    if (!nome | !matricula | !email | !senha | !senhaConf | !funcao) {
      setError("Preencha todos os campos");
      return;
    } else if (senha !== senhaConf) {
      setError("As senhas devem ser iguais");
      return;
    }
  };

  return (
    <div className="container container-full pt-5">
      <div className="d-flex justify-content-center my-5">
        <a className="navbar-brand" href="/">
          <img className="sasb-logo-navbar" src={logo} alt="SASB-COMPESA" />
        </a>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-10 col-sm-10 col-10 border form-registration p-5">
          <div className="row justify-content-center px-5">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-3">
              <label htmlFor="nomeInput" className="form-label">
                Nome:
              </label>
              <input
                placeholder="Digite o nome do usuário"
                type="text"
                className="form-control"
                id="nomeInput"
                aria-describedby="nomeHelp"
                required
                onChange={(e) => [setNome(e.target.value), setError("")]}
                defaultValue={usuario?.nome}
              />
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-3">
              <label htmlFor="cargoInput" className="form-label">
                Cargo:
              </label>
              <input
                placeholder="Digite o cargo do usuário"
                type="text"
                className="form-control"
                id="cargoInput"
                aria-describedby="cargoHelp"
                required
                onChange={(e) => [setCargo(e.target.value), setError("")]}
                defaultValue={usuario?.cargo}
              />
            </div>
          </div>

          <div className="row justify-content-center px-5">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-3">
              <label htmlFor="matriculaInput" className="form-label">
                Matricula:
              </label>
              <input
                placeholder="Digite a matrícula do usuário"
                type="text"
                className="form-control"
                id="matriculaInput"
                aria-describedby="matriculaHelp"
                required
                onChange={(e) => [setMatricula(e.target.value), setError("")]}
                defaultValue={usuario?.matricula}
              />
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-3">
              <label htmlFor="emailInput" className="form-label">
                E-mail:
              </label>
              <input
                placeholder="Digite o e-mail coorporativo do usuário"
                type="text"
                className="form-control"
                id="emailInput"
                aria-describedby="emailHelp"
                required
                onChange={(e) => [setEmail(e.target.value), setError("")]}
                defaultValue={usuario?.email}
              />
            </div>
          </div>

          <div className="row justify-content-center px-5">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-3">
              <label htmlFor="senhaInput" className="form-label">
                Senha:
              </label>
              <input
                placeholder="Digite a senha do usuário"
                type="text"
                className="form-control"
                id="senhaInput"
                aria-describedby="senhaHelp"
                required
                onChange={(e) => [setSenha(e.target.value), setError("")]}
              />
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-3">
              <label htmlFor="senhaConfInput" className="form-label">
                Confirme a senha:
              </label>
              <input
                placeholder="Confirme a senha do usuário"
                type="text"
                className="form-control"
                id="senhaConfInput"
                aria-describedby="senhaConfHelp"
                required
                onChange={(e) => [setSenhaConf(e.target.value), setError("")]}
              />
            </div>
          </div>

          <div className="row justify-content-center px-5">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-3">
              <label htmlFor="telefoneInput" className="form-label">
                Telefone:
              </label>
              <input
                placeholder="(XX) XXXXX - XXXX"
                type="text"
                className="form-control"
                id="telefoneInput"
                aria-describedby="telefoneHelp"
                required
                onChange={(e) => [setTelefone(e.target.value), setError("")]}
                defaultValue={usuario?.contato}
              />
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-3">
              <label htmlFor="funcaoInput" className="form-label">
                Função:
              </label>
              <select
                className="form-select"
                defaultValue={!usuario ? "DEFAULT" : usuario?.funcao}
                aria-label="Default select example"
                onChange={(event) => [
                  setFuncao(event.target.value),
                  setError(""),
                ]}
              >
                <option value="DEFAULT" disabled>
                  Selecione o tipo do usuário
                </option>
                <option value="Administrador">Administrador</option>
                <option value="Colaborador">Colaborador</option>
                <option value="Visitante">Visitante</option>
              </select>
            </div>

            <div className="row justify-content-center text-center">
              <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                <span className="form-error">{error}</span>
              </div>
            </div>

            <div className="d-flex justify-content-evenly text-center mt-5">
              <button
                type="button"
                className="btn btn-sasb-green-dark px-5"
                onClick={handleCadastro}
              >
                SALVAR
              </button>
              <button
                type="button"
                className="btn btn-sasb-white-dark px-5"
                onClick={() => navigate("/painel-controle")}
              >
                CANCELAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usuario;
