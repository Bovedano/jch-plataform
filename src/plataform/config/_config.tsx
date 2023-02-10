import { JCHPlataformContext } from "../JCHPlataform/interfaces";

import { config as configDevices } from "../config/devices"
import { config as configMenu } from "../config/demoMenu"
import { config as configLogin } from "../config/login"


export const config: JCHPlataformContext = {
    app_name: "My App",
    intersticial_layer_opacity: 70,
    intersticial_layer_effect: "blur",
    intersticial_layer_effect_power: 5,
    themes_available: ["default"],

    devices_config: configDevices,
    menu: configMenu,
    login_config: configLogin,

}