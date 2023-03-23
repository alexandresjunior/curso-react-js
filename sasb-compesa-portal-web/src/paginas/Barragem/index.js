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
import { useContext, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { TfiSave } from "react-icons/tfi";
import { ImCancelCircle } from "react-icons/im";
import { GlobalContext } from "../../contexts/GlobalContext";

const Barragem = () => {
  const { isSignedIn } = useContext(GlobalContext);
  const [editMode, setEditMode] = useState(false);

  return (
    <>
      <NavBarRelative />
      {!editMode ? (
        <div>
          {!isSignedIn ? (
            <></>
          ) : (
            <div className="d-flex justify-content-end">
              <button
                className="no-style-button no-style-button-absolute"
                onClick={() => setEditMode(true)}
              >
                <FiEdit size={20} />
              </button>
            </div>
          )}

          <Carousel
            target={"carrosselHomepage"}
            images={images}
            slideStyle={"fade"}
          />
        </div>
      ) : (
        <div className="container">
          <div className="d-flex justify-content-end m-4">
            <button className="no-style-button" onClick={() => {}}>
              <TfiSave className="me-1" size={20} />
            </button>
            <button
              className="no-style-button"
              onClick={() => setEditMode(false)}
            >
              <ImCancelCircle className="ms-1" size={20} />
            </button>
          </div>

          {images.map((image, index) => {
            return (
              <>
                <b>{`Link para a imagem ${index + 1}:`}</b>
                <div className="input-group input-group-sm mt-2 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    defaultValue={image.link}
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-sm btn-sasb-red-sm my-2"
                    data-bs-toggle="modal"
                    data-bs-target="#alertModal"
                    onClick={() => {}}
                  >
                    EXCLUIR IMAGEM
                  </button>
                </div>
              </>
            );
          })}
          <div className="d-flex justify-content-end">
            <button className="btn btn-sasb-blue px-3 my-3" onClick={() => {}}>
              NOVA IMAGEM
            </button>
          </div>
        </div>
      )}

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
    link: "http://link-para-o-documento.pdf",
  },
  {
    path: imgPauFerro,
    alt: "Barragem Pau Ferro",
    legenda: "Barragem Pau Ferro",
    descricao: "Quipapá - PE",
    link: "http://link-para-o-documento.pdf",
  },
  {
    path: imgPrata,
    alt: "Barragem do Prata",
    legenda: "Barragem do Prata",
    descricao: "São Joaquim do Monte, Camocim de São Félix - PE",
    link: "http://link-para-o-documento.pdf",
  },
  {
    path: imgJucazinho,
    alt: "Barragem Jucazinho",
    legenda: "Barragem Jucazinho",
    descricao: "Surubim - PE",
    link: "http://link-para-o-documento.pdf",
  },
  {
    path: imgBotafogo,
    alt: "Barragem Botafogo",
    legenda: "Barragem Botafogo",
    descricao: "Igarassu, PE",
    link: "http://link-para-o-documento.pdf",
  },
  {
    path: imgPedroMouraJr,
    alt: "Barragem Pedro Moura Junior",
    legenda: "Barragem Pedro Moura Junior",
    descricao: "Belo Jardim, PE",
    link: "http://link-para-o-documento.pdf",
  },
];
