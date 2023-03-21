import { useContext } from "react";
import { Link } from "react-router-dom";
import { TemaContext } from "../contexts/TemaContext";

const Cabecalho = () => {
    const { checked, setChecked, tema } = useContext(TemaContext)

    return (
        <nav className={`navbar navbar-expand-lg bg-${tema}`} data-bs-theme={tema}>
            <div className="container-fluid px-5">
                <Link className="navbar-brand" to="/">Treina Recife</Link>
                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        onChange={() => {
                            setChecked(!checked)
                        }}
                        checked={checked}
                    />
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cursos">Cursos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/consultoria">Consultoria</Link>
                        </li>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Digite sua busca..." aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Cabecalho;