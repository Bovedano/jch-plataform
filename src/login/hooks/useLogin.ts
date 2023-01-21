import { useContext } from "react"
import { ILoginContext, LoginContext } from "../context/LoginContext";


export const useLogin = () => {
    const context = useContext<ILoginContext>(LoginContext);
    if (!context || context == null) {
        throw new Error("No existe el contexto, el componente debe estar dentro de LoginContextProvider");
    }
    return context;
}