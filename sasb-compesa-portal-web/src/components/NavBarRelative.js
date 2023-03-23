import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/sasb_compesa_logo.png";
import AlertModal from "./AlertModal";

const NavBarRelative = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <>
      <div className="container-fluid">
        <div className="row py-4">
          <div className="col-lg-4 col-md-12 ps-5 mb-3">
            <a className="navbar-brand" href="/">
              <img className="sasb-logo-navbar" src={logo} alt="SASB-COMPESA" />
            </a>
          </div>

          <div className="col-lg-8 col-md-12 d-flex justify-content-end pe-lg-5">
            <div className="d-flex justify-content-center m-3">
              <button
                type="button"
                className="btn btn-lg btn-sasb-blue-outline"
              >
                NOVA BARRAGEM
              </button>
            </div>

            <div className="d-flex justify-content-center m-3">
              <button
                type="button"
                className="btn btn-lg btn-sasb-red-outline"
                data-bs-toggle="modal"
                data-bs-target="#alertModal"
              >
                EXCLUIR BARRAGEM
              </button>
            </div>

            <div className="d-flex justify-content-center m-3">
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

      <AlertModal />
    </>
  );
};

export default NavBarRelative;
