import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/sasb_compesa_logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
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
            <div className="col-lg-8 col-md-8 col-sm-10 col-10 mb-3">
              <label htmlFor="loginInput" className="form-label">
                Login:
              </label>
              <input
                placeholder="email@compesa.com.br"
                type="email"
                className="form-control"
                id="loginInput"
                aria-describedby="emailHelp"
                required
                onChange={(e) => [setEmail(e.target.value), setError("")]}
              />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8 col-sm-10 col-10 mb-3">
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

          <div className="row justify-content-center text-center">
            <div className="col-lg-8 col-md-8 col-sm-10 col-10">
              <span className="form-label auth-error">{error}</span>
            </div>
          </div>

          <div className="row justify-content-center text-center mt-5">
            <div className="col-lg-8 col-md-8 col-sm-8 col-8 mb-3">
              <button
                type="button"
                className="btn btn-sasb-green px-5"
                onClick={handleLogin}
              >
                ENTRAR
              </button>
            </div>
          </div>

          <div className="text-center mt-5 mb-5">
            <Link className="form-link" to="/recuperar-senha">
              Esqueci a senha
            </Link>
            <span className="text-white"> | </span>
            <Link className="form-link" to="/cadastro">
              Criar conta
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
