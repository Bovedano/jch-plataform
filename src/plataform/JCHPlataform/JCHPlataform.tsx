import React from "react";
import { DevicesConfig } from "../../responsive/interfaces";
import { Menu } from "../../menu/interfaces";

import { getConfig as getConfigDevices } from "../config/devices"
import { getConfig as getConfigMenu } from "../config/demoMenu"
import { JCHPlataformConfig } from "./interfaces";

interface JCHPlataformPops {
    children: JSX.Element | JSX.Element[],
    config: JCHPlataformConfig
}

export interface JCHPlataformContext {
    devices_config: DevicesConfig,
    menu: Menu
}


const defaultConfig: JCHPlataformContext = {
    devices_config: getConfigDevices(),
    menu: getConfigMenu()
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
        menu: checkConfig(props.config.menu, defaultConfig.menu)
    }

    return <plataformContext.Provider value={value} {...props} />
}

