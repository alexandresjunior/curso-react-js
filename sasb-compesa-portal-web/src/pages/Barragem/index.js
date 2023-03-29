import NavBarRelative from "../../components/NavBarRelative";
import InformacoesGeraisCard from "./components/InformacoesGeraisCard";
import DetalhesTecnicosCard from "./components/DetalhesTecnicosCard";
import PlanoSegurancaCard from "./components/PlanoSegurancaCard";
import PlanoAcaoEmergencialCard from "./components/PlanoAcaoEmergencial";
import InspecoesCard from "./components/InspecoesCard";
import { useParams } from "react-router-dom";
import { LISTA_BARRAGENS } from "../../mocks/barragens";
import ImagensCarousel from "./components/ImagensCarousel";

const Barragem = () => {
  const { id } = useParams();
  const barragem = LISTA_BARRAGENS[id - 1];

  return (
    <>
      <NavBarRelative showButtons={false} />
      <ImagensCarousel barragem={barragem} />

      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4 col-md-8 col-sm-12 col-12">
            <InformacoesGeraisCard barragem={barragem} />
            <DetalhesTecnicosCard barragem={barragem} />
          </div>

          <div className="col-lg-4 col-md-8 col-sm-12 col-12">
            <PlanoSegurancaCard barragem={barragem} />
            <PlanoAcaoEmergencialCard barragem={barragem} />
          </div>

          <div className="col-lg-4 col-md-8 col-sm-12 col-12">
            <InspecoesCard barragem={barragem} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Barragem;
