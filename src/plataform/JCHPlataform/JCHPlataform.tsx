import React from "react";

import { getConfig as getConfigDevices } from "../config/devices"
import { getConfig as getConfigMenu } from "../config/demoMenu"
import { getConfig as getConfigLogin } from "../config/login"
import { getConfig as getConfigApp } from "../config/appConfig"


import { JCHPlataformConfig, JCHPlataformContext } from "./interfaces";

import { PlataformContext } from "../context/PlataformContext";

interface JCHPlataformPops {
    children: JSX.Element | JSX.Element[],
    config: JCHPlataformConfig
}


const defaultConfig: JCHPlataformContext = {
    devices_config: getConfigDevices(),
    menu: getConfigMenu(),
    login_config: getConfigLogin(),
    app_config: getConfigApp()
}

export const plataformContext = React.createContext<JCHPlataformContext>(defaultConfig);


export const JCHPlataform = (props: JCHPlataformPops) => {
    const checkConfig = (val: any, defVal: any) => {
        if (props.config && val) {
            return val;
        }
        return defVal
    }

    const value: JCHPlataformContext = {
        devices_config: checkConfig(props.config.devices_config, defaultConfig.devices_config),
        menu: checkConfig(props.config.menu, defaultConfig.menu),
        login_config: checkConfig(props.config.login_config, defaultConfig.devices_config),
        app_config: checkConfig(props.config.app_config, defaultConfig.app_config),
    }

    return <plataformContext.Provider value={value} {...props}>
        <PlataformContext>
            {props.children}
        </PlataformContext>
    </plataformContext.Provider>
}

