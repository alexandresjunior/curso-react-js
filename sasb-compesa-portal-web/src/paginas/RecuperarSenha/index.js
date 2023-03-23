import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/sasb_compesa_logo.png";

const RecuperarSenha = () => {
  const [matricula, setMatricula] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleRecuperarSenha = () => {
    if (!matricula | !email) {
      setError("Preencha todos os campos");
      return;
    }

    alert("Um link de recuperação da senha será enviado por e-mail!");
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
                  onClick={handleRecuperarSenha}
                >
                  RECUPERAR SENHA
                </button>
              </div>
            </div>

            <div className="text-center mt-5 mb-5">
              <Link className="form-link" to="/login">
                Acessar conta
              </Link>
              <span className="text-white"> | </span>
              <Link className="form-link" to="/cadastro">
                Criar conta
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecuperarSenha;
