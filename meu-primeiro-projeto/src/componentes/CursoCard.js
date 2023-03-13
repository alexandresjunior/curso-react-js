const CursoCard = ({ imagem, titulo, texto, rotulo }) => {
    return (
        <div className="card" style={{ width: 350 }}>
            <img src={imagem} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{texto}</p>
                <a href="/" className="btn btn-primary">{rotulo}</a>
            </div>
        </div>
    )
}

export default CursoCard;