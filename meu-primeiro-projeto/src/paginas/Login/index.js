import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/treina_recife_logo.png";

const Login = () => {
    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")

    const navigation = useNavigate()

    useEffect(() => {
        console.log(nome)
    }, [nome, senha])

    return (
        <div className="form-signin w-25 m-auto py-5">
            <form>
                <div align="center">
                    <img className="mb-4" src={logo} alt="" width="70" height="70" />
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        onKeyUp={(event) => {
                            setNome(event.target.value)
                        }}
                    />
                    <label htmlFor="floatingInput">Nome de usuário:</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        onKeyUp={(event) => {
                            setSenha(event.target.value)
                        }}
                    />
                    <label htmlFor="floatingPassword">Senha</label>
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" />
                        Mantenha-me conectado
                    </label>
                </div>
                <button
                    className="w-100 btn btn-lg btn-warning"
                    type="submit"
                    onClick={() => {
                        navigation("/", {
                            state: {
                                nome: nome,
                                senha: senha
                            }
                        })
                    }}
                >
                    Log In
                </button>
                <p className="mt-5 mb-3 text-muted text-center">Treina Recife &copy; 2023</p>
            </form>
        </div>
    )
}

export default Login;