import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/sasb_compesa_logo.png";

const NavBarRelative = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <div className="container-fluid">
      <div className="row py-4">
        <div className="col-lg-3 col-md-12 d-flex justify-content-center mb-3">
          <a className="navbar-brand" href="/">
            <img className="sasb-logo-navbar" src={logo} alt="SASB-COMPESA" />
          </a>
        </div>

        <div className="col-lg-3 col-md-12 d-flex justify-content-center"></div>

        <div className="col-lg-2 col-md-12">
          <div className="d-flex justify-content-center mb-3">
            <button className="btn btn-lg btn-sasb-blue-outline">
              NOVA BARRAGEM
            </button>
          </div>
        </div>

        <div className="col-lg-2 col-md-12">
          <div className="d-flex justify-content-center mb-3">
            <button className="btn btn-lg btn-sasb-red-outline">
              EXCLUIR BARRAGEM
            </button>
          </div>
        </div>

        <div className="col-lg-2 col-md-12">
          <div className="d-flex justify-content-center mb-3">
            {isSignedIn ? (
              <Link to={"/login"}>
                <button className="btn btn-lg btn-sasb-blue">SAIR</button>
              </Link>
            ) : (
              <Link to={"/login"}>
                <button className="btn btn-lg btn-sasb-blue">
                  ÁREA DO COLABORADOR
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarRelative;
