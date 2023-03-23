import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./paginas/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./paginas/Login";
import Cadastro from "./paginas/Cadastro";
import RecuperarSenha from "./paginas/RecuperarSenha";
import Barragem from "./paginas/Barragem";
import { GlobalProvider } from "./contexts/GlobalContext";
import PainelControle from "./paginas/PainelControle";

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/barragem">
            <Route index element={<Barragem />} />
            <Route path="detalhes/:id" element={<Home novo={false} />} />
            <Route path="nova-barragem" element={<Home novo={true} />} />
          </Route>
          <Route path="/painel-controle" element={<PainelControle />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default App;
