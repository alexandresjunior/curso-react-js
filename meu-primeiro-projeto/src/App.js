import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "./componentes/Cabecalho";
import Rodape from "./componentes/Rodape";
import TemaProvider from "./contexts/TemaContext";
import Consultoria from "./paginas/Consultoria";
import Cursos from "./paginas/Cursos";
import Home from "./paginas/Home";
import Login from "./paginas/Login";

const App = () => {
  return (
    <TemaProvider>
      <BrowserRouter>
        <Cabecalho />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/consultoria" element={<Consultoria />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Rodape />
      </BrowserRouter>
    </TemaProvider>
  );
}

export default App;
