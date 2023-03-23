import NavBarRelative from "../../components/NavBarRelative";
import Carousel from "../../components/carousel/Carousel";

import imgPirapama from "../../assets/barragem_pirapama.png";
import imgPauFerro from "../../assets/barragem_pau_ferro.png";
import imgPrata from "../../assets/barragem_do_prata.png";
import imgJucazinho from "../../assets/barragem_jucazinho.png";
import imgBotafogo from "../../assets/barragem_botafogo.png";
import imgPedroMouraJr from "../../assets/barragem_pedro_moura_junior.png";
import InformacoesGeraisCard from "./components/InformacoesGeraisCard";
import DetalhesTecnicosCard from "./components/DetalhesTecnicosCard";
import PlanoSegurancaCard from "./components/PlanoSegurancaCard";
import PlanoAcaoEmergencialCard from "./components/PlanoAcaoEmergencial";
import InspecoesCard from "./components/InspecoesCard";

const Barragem = () => {
  return (
    <>
      <NavBarRelative />
      <Carousel
        target={"carrosselHomepage"}
        images={images}
        slideStyle={"fade"}
      />
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4 col-md-8 col-sm-12 col-12">
            <InformacoesGeraisCard />
            <DetalhesTecnicosCard />
          </div>

          <div className="col-lg-4 col-md-8 col-sm-12 col-12">
            <PlanoSegurancaCard />
            <PlanoAcaoEmergencialCard />
          </div>

          <div className="col-lg-4 col-md-8 col-sm-12 col-12">
            <InspecoesCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Barragem;

// TODO: Modificar para uma mesma barragem
const images = [
  {
    path: imgPirapama,
    alt: "Barragem Pirapama",
    legenda: "Barragem Pirapama",
    descricao: "Cabo de Santo Agostinho - PE",
  },
  {
    path: imgPauFerro,
    alt: "Barragem Pau Ferro",
    legenda: "Barragem Pau Ferro",
    descricao: "Quipapá - PE",
  },
  {
    path: imgPrata,
    alt: "Barragem do Prata",
    legenda: "Barragem do Prata",
    descricao: "São Joaquim do Monte, Camocim de São Félix - PE",
  },
  {
    path: imgJucazinho,
    alt: "Barragem Jucazinho",
    legenda: "Barragem Jucazinho",
    descricao: "Surubim - PE",
  },
  {
    path: imgBotafogo,
    alt: "Barragem Botafogo",
    legenda: "Barragem Botafogo",
    descricao: "Igarassu, PE",
  },
  {
    path: imgPedroMouraJr,
    alt: "Barragem Pedro Moura Junior",
    legenda: "Barragem Pedro Moura Junior",
    descricao: "Belo Jardim, PE",
  },
];
