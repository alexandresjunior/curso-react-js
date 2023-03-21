import { createContext, useEffect, useState } from "react";

export const TemaContext = createContext();

const TemaProvider = ({ children }) => {
    const [checked, setChecked] = useState(true)
    const [tema, setTema] = useState("dark")
    const [temaBody, setTemaBody] = useState("light")
    const [temaTexto, setTemaTexto] = useState("")

    useEffect(() => {
        setTema(checked ? "dark" : "light")
        setTemaBody(checked ? "light" : "dark")
        setTemaTexto(checked ? "" : "text-white")
    }, [checked])

    return (
        <TemaContext.Provider value={{ checked, setChecked, tema, setTema, temaBody, temaTexto }}>
            {children}
        </TemaContext.Provider>
    )
}

export default TemaProvider;