import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "./componentes/Cabecalho";
import Rodape from "./componentes/Rodape";
import Consultoria from "./paginas/Consultoria";
import Cursos from "./paginas/Cursos";
import Home from "./paginas/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/consultoria" element={<Consultoria />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default App;
