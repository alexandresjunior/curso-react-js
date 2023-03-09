const Cabecalho = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid px-5">
                <a className="navbar-brand" href="./">Treina Recife</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="./">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./">Cursos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./">Consultoria</a>
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