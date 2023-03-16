import { createContext, useEffect, useState } from "react";

export const TemaContext = createContext();

const TemaProvider = ({ children }) => {
    const [checked, setChecked] = useState(true)
    const [tema, setTema] = useState("dark")

    useEffect(() => {
        setTema(checked ? "dark" : "light")
    }, [checked])

    return (
        <TemaContext.Provider value={{ checked, setChecked, tema, setTema }}>
            {children}
        </TemaContext.Provider>
    )
}

export default TemaProvider;