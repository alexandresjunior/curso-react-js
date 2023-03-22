import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./paginas/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./paginas/Login";

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
        <Route path="/acesso" element={<Login />} />
        <Route path="/cadastro" element={<Home />} />
        <Route path="/recuperar-senha" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
