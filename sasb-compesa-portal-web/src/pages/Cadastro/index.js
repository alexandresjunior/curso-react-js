import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/sasb_compesa_logo.png";

const Cadastro = () => {
  const [matricula, setMatricula] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConf, setSenhaConf] = useState("");
  const [error, setError] = useState("");

  const handleCadastro = () => {
    if (!matricula | !email | !senha | !senhaConf) {
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
        <div className="col-lg-6 col-md-8 col-sm-10 col-10 border form-registration">
          <div className="row justify-content-center mt-5">
            <div className="col-lg-8 col-md-8 col-sm-8 col-8 mb-3">
              <label htmlFor="matriculaInput" className="form-label">
                Matrícula:
              </label>
              <input
                placeholder="Digite sua matrícula"
                type="text"
                className="form-control"
                id="matriculaInput"
                aria-describedby="matriculaHelp"
                required
                onChange={(e) => [setMatricula(e.target.value), setError("")]}
              />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8 col-sm-8 col-8 mb-3">
              <label htmlFor="emailInput" className="form-label">
                E-mail Corporativo:
              </label>
              <input
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="Digite seu e-mail"
                aria-describedby="emailHelp"
                required
                onChange={(e) => [setEmail(e.target.value), setError("")]}
              />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8 col-sm-8 col-8 mb-3">
              <label htmlFor="senhaInput" className="form-label">
                Senha:
              </label>
              <input
                placeholder="Digite sua senha"
                type="password"
                className="form-control"
                id="senhaInput"
                required
                onChange={(e) => [setSenha(e.target.value), setError("")]}
              />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8 col-sm-8 col-8 mb-3">
              <label htmlFor="senhaInput2" className="form-label">
                Confirmar Senha:
              </label>
              <input
                placeholder="Confirme sua senha"
                type="password"
                className="form-control"
                id="senhaInput2"
                required
                onChange={(e) => [setSenhaConf(e.target.value), setError("")]}
              />
            </div>
          </div>

          <div className="row justify-content-center text-center">
            <div className="col-lg-8 col-md-8 col-sm-8 col-8">
              <span className="form-error">{error}</span>
            </div>
          </div>

          <div className="row justify-content-center text-center mt-5">
            <div className="col-lg-8 col-md-8 col-sm-8 col-8 mb-3">
              <button
                type="button"
                className="btn btn-sasb-green px-5"
                onClick={handleCadastro}
              >
                CADASTRAR
              </button>
            </div>
          </div>

          <div className="text-center mt-5 mb-5">
            <span className="text-white">
              Já possui uma conta?{" "}
              <Link className="form-link" to="/login">
                Acesse aqui.
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
