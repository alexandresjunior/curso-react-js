const Conteudo = () => {
    return (
        <div className="container text-center my-5">
            <div className="row">
                <div className="col">
                    <div className="card" style={{ width: 350 }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/2560px-Placeholder_view_vector.svg.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Lógica de Programação com Python</h5>
                            <p className="card-text">Aprenda fundamentos da lógica de programação com linguagem Python.</p>
                            <a href="/" className="btn btn-primary">Matricule-se já!</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{ width: 350 }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/2560px-Placeholder_view_vector.svg.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Java Web com Spring Boot</h5>
                            <p className="card-text">Aprenda o framework Spring Boot e crie REST APIs.</p>
                            <a href="/" className="btn btn-primary">Matricule-se já!</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{ width: 350 }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/2560px-Placeholder_view_vector.svg.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Java Experience</h5>
                            <p className="card-text">Participe de uma experiência imersiva empresarial usando Git e Métodos Ágeis.</p>
                            <a href="/" className="btn btn-primary">Matricule-se já!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Conteudo;