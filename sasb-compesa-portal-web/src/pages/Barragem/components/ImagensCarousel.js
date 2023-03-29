import { useContext, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { TfiSave } from "react-icons/tfi";
import Carousel from "../../../components/carousel/Carousel";
import { GlobalContext } from "../../../contexts/GlobalContext";

const ImagensCarousel = ({ barragem }) => {
  const { isSignedIn } = useContext(GlobalContext);

  const [editMode, setEditMode] = useState(!barragem);

  const novaImagem = {
    link: "",
    legenda: "",
  };

  const [inputs, setInputs] = useState(!barragem ? [] : barragem?.imagens);

  const handleAddInput = () => {
    setInputs([...inputs, novaImagem]);
  };

  const handleDeleteInputField = (index) => {
    const newInputFields = [...inputs];
    newInputFields.splice(index, 1);
    setInputs(newInputFields);
  };

  const handleLinkChange = (index, event) => {
    const newInputFields = [...inputs];
    newInputFields[index].link = event.target.value;
    setInputs(newInputFields);
  };

  const handleLegendaChange = (index, event) => {
    const newInputFields = [...inputs];
    newInputFields[index].legenda = event.target.value;
    setInputs(newInputFields);
  };

  return (
    <>
      {!editMode ? (
        <div>
          {!isSignedIn ? (
            <></>
          ) : (
            <>
              <div className="d-flex justify-content-end mx-4">
                <button
                  className="no-style-button no-style-button-absolute"
                  onClick={() => setEditMode(true)}
                >
                  <FiEdit size={20} />
                </button>
              </div>
              {inputs.length === 0 && (
                <div className="d-flex justify-content-center m-4">
                  <b>
                    Não há imagens para exibição. Clique no botão de Editar para
                    adicionar imagens ao carrossel.
                  </b>
                </div>
              )}
            </>
          )}

          <Carousel
            target={"carrosselHomepage"}
            images={inputs}
            slideStyle={"fade"}
          />
        </div>
      ) : (
        <div className="container">
          <div className="d-flex justify-content-end m-4">
            <button
              className="no-style-button"
              onClick={() => setEditMode(false)}
            >
              <TfiSave className="me-1" size={20} />
            </button>
            <button
              className="no-style-button"
              onClick={() => setEditMode(false)}
            >
              <ImCancelCircle className="ms-1" size={20} />
            </button>
          </div>

          {inputs?.map((imagem, index) => {
            return (
              <div key={`${imagem.link}-${index}`}>
                <b>{`Link para a imagem ${index + 1}:`}</b>
                <div className="input-group input-group-sm mt-2 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    defaultValue={imagem.link}
                    onChange={(event) => handleLinkChange(index, event)}
                  />
                </div>
                <b>{`Legenda para imagem ${index + 1}:`}</b>
                <div className="input-group input-group-sm mt-2 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    defaultValue={imagem.legenda}
                    onChange={(event) => handleLegendaChange(index, event)}
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-sm btn-sasb-red-sm my-2"
                    data-bs-toggle="modal"
                    data-bs-target="#alertModal"
                    onClick={() => handleDeleteInputField(index)}
                  >
                    EXCLUIR IMAGEM
                  </button>
                </div>
              </div>
            );
          })}
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-sasb-blue px-3 my-3"
              onClick={handleAddInput}
            >
              NOVA IMAGEM
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImagensCarousel;
