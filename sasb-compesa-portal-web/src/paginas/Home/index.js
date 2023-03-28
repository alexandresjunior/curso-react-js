import { useEffect, useState } from "react";
import Mapa from "../../components/Mapa";
import NavBar from "../../components/NavBar";
import { LISTA_BARRAGENS } from "../../mocks/barragens";

const DEFAULT_CENTER = {
  lat: -8.470697,
  lng: -38.371057,
};

const Home = () => {
  const [barragens, setBarragens] = useState(LISTA_BARRAGENS);
  const [busca, setBusca] = useState("");
  const [coordenadas, setCoordenadas] = useState(DEFAULT_CENTER);

  useEffect(() => {
    const barragensFiltradas = filtrarBarragensPeloNome(LISTA_BARRAGENS, busca)

    setBarragens(barragensFiltradas)

    if (barragensFiltradas?.length === 1) {
      const barragem = barragensFiltradas[0];

      setCoordenadas({
        lat: barragem.localizacao?.latitude,
        lng: barragem.localizacao?.longitude,
      })
    }
  }, [busca])

  return (
    <>
      <NavBar setBusca={setBusca} />
      <Mapa
        barragens={barragens}
        coordenadas={coordenadas}
      />
    </>
  );
};

export default Home;

export const filtrarBarragensPeloNome = (barragens, busca) => {
  if (!busca) {
    return barragens;
  }

  const regex = new RegExp(busca, 'i');
  return barragens.filter(barragem => regex.test(barragem.nome));
}
