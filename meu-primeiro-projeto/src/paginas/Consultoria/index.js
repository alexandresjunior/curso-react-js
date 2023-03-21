import { useContext } from "react";
import { TemaContext } from "../../contexts/TemaContext";

const Consultoria = () => {
    const { temaBody, temaTexto } = useContext(TemaContext)

    return (
        <div className={`bg-${temaBody} ${temaTexto}`}>Consultoria</div>
    )
}

export default Consultoria;