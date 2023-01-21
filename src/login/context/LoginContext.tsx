import React from "react";
import { LoginConfig, LoginDirection } from "../interfaces";
import { useLoginForms } from "../hooks/useLoginForms";
import { useLoginDirections } from "../hooks/useLoginDirections";

export interface ILoginContext {
    submitForm: (form: string) => void,
    loginDirection: LoginDirection,
    setLoginDirection: (direction: LoginDirection) => void,
    config: LoginConfig,
    setFomrData: (k: string, v: string, f: string) => void
}

interface LoginContextProviderProps {
    config: LoginConfig,
    children: any,
}

export const LoginContext = React.createContext<ILoginContext>({
    submitForm: function (form: string): void {
        console.log(form)
        throw new Error("Function not implemented.");
    },
    loginDirection: LoginDirection.LOGIN,
    setLoginDirection: function (direction: LoginDirection): void {
        console.log(direction)
        throw new Error("Function not implemented.");
    },
    config: { pages: { login: <></> } },
    setFomrData: function (k: string, v: string, f: string): void {
        console.log(k + v + f)
        throw new Error("Function not implemented.");
    }
});

export const LoginContextProvider = (props: LoginContextProviderProps) => {
    const { setFomrData, submitForm } = useLoginForms();
    const { loginDirection, setLoginDirection } = useLoginDirections();


    const value: ILoginContext = {
        submitForm,
        loginDirection,
        setLoginDirection,
        config: props.config,
        setFomrData
    }

    return <LoginContext.Provider value={value} {...props} />
}


