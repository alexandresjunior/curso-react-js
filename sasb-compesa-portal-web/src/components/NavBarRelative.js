import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/sasb_compesa_logo.png";
import AlertModal from "./AlertModal";
import { FiLogOut } from "react-icons/fi";
import { GlobalContext } from "../contexts/GlobalContext";

const NavBarRelative = () => {
  const { isSignedIn } = useContext(GlobalContext);

  return (
    <>
      <div className="container-fluid">
        <div className="row py-4">
          <div className="col-lg-4 col-md-12 ps-5 mb-3">
            <a className="navbar-brand" href="/">
              <img className="sasb-logo-navbar" src={logo} alt="SASB-COMPESA" />
            </a>
          </div>
          <div className="col-lg-8 col-md-12 d-flex align-items-center justify-content-end pe-lg-5">
            {isSignedIn ? (
              <div className="d-flex justify-content-between">
                <button
                  type="button"
                  className="btn btn-lg btn-sasb-blue-outline"
                >
                  NOVA BARRAGEM
                </button>

                <button
                  type="button"
                  className="btn btn-lg btn-sasb-red-outline ms-3"
                  data-bs-toggle="modal"
                  data-bs-target="#alertModal"
                >
                  EXCLUIR BARRAGEM
                </button>

                <div className="d-flex align-items-center">
                  <Link to={"/painel-controle"}>
                    <button className="btn btn-lg btn-sasb-blue ms-3">
                      PAINEL DE CONTROLE
                    </button>
                  </Link>
                  <Link to={"/login"}>
                    <button className="no-style-button">
                      <FiLogOut className="ms-3" size={30} color={"#223F99"} />
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="d-flex align-items-center">
                <Link to={"/login"}>
                  <button className="btn btn-lg btn-sasb-blue">
                    ÁREA DO COLABORADOR
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <AlertModal />
    </>
  );
};

export default NavBarRelative;
