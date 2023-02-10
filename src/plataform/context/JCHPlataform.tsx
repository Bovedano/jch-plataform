import React from "react";

import { JCHPlataformConfig, JCHPlataformContext } from "../JCHPlataform/interfaces";
import { PlataformContext } from "./PlataformContext";
import { config as defaultConfig } from "../config/_config";
import { useConfigRequired } from "../hooks/useConfigRequired";


interface JCHPlataformPops {
    children: JSX.Element | JSX.Element[],
    config: JCHPlataformConfig
}


export const plataformContext = React.createContext<JCHPlataformContext>(defaultConfig);


export const JCHPlataform = (props: JCHPlataformPops) => {
    const value = useConfigRequired(props.config)

    return <plataformContext.Provider value={value} {...props}>
        <PlataformContext>
            {props.children}
        </PlataformContext>
    </plataformContext.Provider>
}

