import NavBarRelative from "../../components/NavBarRelative";
import Barragens from "./components/Barragens";
import Usuarios from "./components/Usuarios";

const PainelControle = () => {
  return (
    <div className="mb-5">
      <NavBarRelative showButtons={false} />
      <div className="d-flex justify-content-start mx-5">
        <h4>
          <b>Bem vindo, Hudson!</b>
        </h4>
      </div>
      <Usuarios />
      <Barragens />
    </div>
  );
};

export default PainelControle;
