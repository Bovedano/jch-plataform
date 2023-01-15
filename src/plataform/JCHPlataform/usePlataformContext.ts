import { useContext } from "react";
import { JCHPlataformContext, plataformContext } from "./JCHPlataform";


export const usePlataformContext = () => {
    const ctx: JCHPlataformContext = useContext<JCHPlataformContext>(plataformContext)

    if (!ctx) {
        throw "Para utilizar elementos de jch-plataform debe envolver la aplicación en JCHPLataform"
    }

    return ctx
}