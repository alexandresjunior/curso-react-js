import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { TemaContext } from "../../contexts/TemaContext";

const Home = () => {
    const location = useLocation()
    const { temaBody, temaTexto } = useContext(TemaContext)

    const nome = location.state?.nome

    return (
        <div className={`bg-${temaBody}`}>
            {
                !!nome ? (
                    <div className={temaTexto}>Olá, {nome}</div>
                ) : (
                    <div className={temaTexto}>Olá!</div>
                )
            }
        </div>
    )
}

export default Home;