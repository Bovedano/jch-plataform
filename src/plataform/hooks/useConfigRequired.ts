import { JCHPlataformConfig, JCHPlataformContext } from "../JCHPlataform/interfaces"
import { config as defaultConfig } from "../config/_config";


const check = (val: any, defVal: any) => {
    if (typeof val === "undefined") {
        return defVal;
    }
    return val
}

export const useConfigRequired = (opt: JCHPlataformConfig) => {

    const def: JCHPlataformContext = defaultConfig;


    const req: JCHPlataformContext = {
        app_name: check(opt.app_name, def.app_name),
        intersticial_layer_opacity: check(opt.intersticial_layer_opacity, def.intersticial_layer_opacity),
        intersticial_layer_effect: check(opt.intersticial_layer_effect, def.intersticial_layer_effect),
        intersticial_layer_effect_power: check(opt.intersticial_layer_effect_power, def.intersticial_layer_effect_power),
        themes_available: check(opt.themes_available, def.themes_available),
        devices_config: check(opt.devices_config, def.devices_config),
        menu: check(opt.menu, def.menu),
        login_config: check(opt.login_config, def.login_config)
    }

    return req;
}