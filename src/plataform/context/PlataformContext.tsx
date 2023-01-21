import React from "react";
import { LoginContextProvider } from "../../login/context/LoginContext";
import { usePlataformContext } from "../JCHPlataform/usePlataformContext";

interface PlataformContextProps {
    children: JSX.Element | JSX.Element[]
}

export const PlataformContext = (props: PlataformContextProps) => {
    const config = usePlataformContext();

    return <LoginContextProvider config={config.login_config}>
        {props.children}
    </LoginContextProvider>
}