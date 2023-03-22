import { Link } from "react-router-dom";
import logo from "../assets/sasb_compesa_logo.png";
import DropdownFilter from "./DropdownFilter";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div className="container-fluid sasb-navbar">
      <div className="row py-4">
        <div className="col-lg-3 col-md-12 d-flex justify-content-center">
          <a className="navbar-brand" href="/">
            <img className="sasb-logo-navbar" src={logo} alt="SASB-COMPESA" />
          </a>
        </div>

        <div className="col-lg-3 col-md-12">
          <SearchBar />
        </div>

        <div className="col-lg-2 col-md-12">
          <DropdownFilter
            selected={"Filtrar por categoria de risco"}
            options={["Baixo", "Médio", "Alto"]}
          />
        </div>

        <div className="col-lg-2 col-md-12">
          <DropdownFilter
            selected={"Filtrar por dano potencial"}
            options={["Baixo", "Médio", "Alto"]}
          />
        </div>

        <div className="col-lg-2 col-md-12">
          <Link to={"/login"}>
            <button className="btn btn-lg btn-sasb-blue sasb-shadow">
              ÁREA DO COLABORADOR
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
