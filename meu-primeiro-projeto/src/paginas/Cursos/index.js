import { useContext } from "react";
import CursoCard from "../../componentes/CursoCard";
import { TemaContext } from "../../contexts/TemaContext";
import { cursos } from "../../mocks/cursos";

const Cursos = () => {
    const { temaBody } = useContext(TemaContext)

    return (
        <div className={`bg-${temaBody}`}>
            <div className="container text-center py-5">
                <div className="row">
                    {
                        cursos.map((curso, indice) => {
                            return (
                                <div className="col" key={indice}>
                                    <CursoCard
                                        imagem={curso.imagem}
                                        titulo={curso.titulo}
                                        texto={curso.texto}
                                        rotulo={curso.rotulo}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default Cursos;