import { useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation()

    const nome = location.state?.nome

    return (
        <>
            {
                !!nome ? (
                    <div>Olá, {nome}</div>
                ) : (
                    <div>Olá!</div>
                )
            }
        </>
    )
}

export default Home;