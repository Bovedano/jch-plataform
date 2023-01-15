import React, { useState, useEffect } from "react";
import { Forms, LoginConfig, LoginDirection } from "../interfaces";
import { useLoginForms } from "../hooks/useLoginForms";
import { useLoginDirections } from "../hooks/useLoginDirections";

interface ILoginContext {
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

export const LoginContext = React.createContext<ILoginContext | null>(null);

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


