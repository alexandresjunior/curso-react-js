import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import RecuperarSenha from "./pages/RecuperarSenha";
import Barragem from "./pages/Barragem";
import { GlobalProvider } from "./contexts/GlobalContext";
import PainelControle from "./pages/PainelControle";
import Usuario from "./pages/Usuario";

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route
            path="/barragem/detalhes/:id"
            element={<Barragem />}
          />
          <Route path="/barragem/cadastro" element={<Barragem />} />
          <Route path="/painel-controle" element={<PainelControle />} />
          <Route
            path="/usuario/detalhes/:id"
            element={<Usuario />}
          />
          <Route path="/usuario/cadastro" element={<Usuario />} />
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
