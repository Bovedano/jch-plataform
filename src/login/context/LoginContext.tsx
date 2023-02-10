import React from "react";
import { LoginConfig, LoginDirection } from "../interfaces";
import { useLoginForms } from "../hooks/useLoginForms";
import { useLoginDirections } from "../hooks/useLoginDirections";
import { usePlataformContext } from "../../plataform/context/usePlataformContext";

export interface ILoginContext {
    submitForm: (form: string) => void,
    loginDirection: LoginDirection,
    setLoginDirection: (direction: LoginDirection) => void,
    config: LoginConfig,
    setFomrData: (k: string, v: string, f: string) => void
}

interface LoginContextProviderProps {
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
    config: {
        pages:
        {
            login: <></>,
            loading_page: <></>,
            registration: <></>,
            forgot_password: <></>,
            terms_and_conditions: <></>
        }
    },
    setFomrData: function (k: string, v: string, f: string): void {
        console.log(k + v + f)
        throw new Error("Function not implemented.");
    }
});

export const LoginContextProvider = (props: LoginContextProviderProps) => {
    const config = usePlataformContext();
    const { setFomrData, submitForm } = useLoginForms();
    const { loginDirection, setLoginDirection } = useLoginDirections();


    const value: ILoginContext = {
        submitForm,
        loginDirection,
        setLoginDirection,
        config: config.login_config,
        setFomrData
    }

    return <LoginContext.Provider value={value} {...props} />
}


