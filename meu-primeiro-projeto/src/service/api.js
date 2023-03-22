import axios from "axios";

export const obterEndereco = async (cep, setEndereco) => {
    await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.data)
        .then((endereco) => {
            setEndereco(endereco)
        })
        .catch((erro) => {
            alert("CEP inválido!")
        })
}