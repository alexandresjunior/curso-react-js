import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./paginas/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./paginas/Login";
import Cadastro from "./paginas/Cadastro";
import RecuperarSenha from "./paginas/RecuperarSenha";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/barragem">
          <Route index element={<Home />} />
          <Route path="detalhes/:id" element={<Home novo={false} />} />
          <Route path="nova-barragem" element={<Home novo={true} />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
