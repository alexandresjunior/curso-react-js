import { useContext, useEffect, useState } from "react";
import { TemaContext } from "../../contexts/TemaContext";
import { obterEndereco } from "../../service/api";

const Consultoria = () => {
    const { temaBody, temaTexto } = useContext(TemaContext)

    const [cep, setCep] = useState()
    const [endereco, setEndereco] = useState()

    const validarCep = () => {
        // lógica de validar o CEP
        // alert("Cep no formato inválido")
    }

    useEffect(() => {
        validarCep()
    }, [cep])

    return (
        <div className={`bg-${temaBody} ${temaTexto} p-5`}>
            <div className="mb-3">Consulta CEP</div>
            <div className="form-floating mb-3 w-25">
                <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Digite seu cep"
                    onKeyUp={(event) => {
                        setCep(event.target.value)
                    }}
                />
                <label htmlFor="floatingInput">CEP:</label>
            </div>
            <button
                className="w-25 btn btn-lg btn-warning"
                type="submit"
                onClick={() => obterEndereco(cep, setEndereco)}
            >
                Consultar
            </button>

            {
                !!endereco && (
                    <>
                        <div className="form-floating my-3 w-25">
                            <p>
                                <b>Logradouro: </b>
                                {endereco.logradouro}
                            </p>
                            <p>
                                <b>Complemento: </b>
                                {endereco.complemento}
                            </p>
                            <p>
                                <b>Bairro: </b>
                                {endereco.bairro}
                            </p>
                            <p>
                                <b>Localidade: </b>
                                {endereco.localidade}
                            </p>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Consultoria;