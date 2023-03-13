import CursoCard from "../../componentes/CursoCard";
import { cursos } from "../../mocks/cursos";

const Cursos = () => {
    return (
        <div className="container text-center my-5">
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
    )
}

export default Cursos;