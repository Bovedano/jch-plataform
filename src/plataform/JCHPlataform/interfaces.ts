
import { LoginConfig } from "../../login/interfaces";
import { Menu } from "../../menu/interfaces";
import { DevicesConfig } from "../../responsive/interfaces";


// ############################################# OPTIONAL ######################################

export interface JCHPlataformConfig {
    //Basics
    app_name?: string;
    //Styles
    intersticial_layer_opacity?: number;
    intersticial_layer_effect?: "sepia" | "invert" | "blur" | "solid";
    intersticial_layer_effect_power?: number;

    //Themes
    themes_available?: Array<string>

    //Responsive
    devices_config?: DevicesConfig,

    //Menu
    menu?: Menu,

    //Login
    login_config?: LoginConfig,
}

// ############################################# REQUIRED ######################################
export interface JCHPlataformContext {
    //Basics
    app_name: string;
    //Styles
    intersticial_layer_opacity: number;
    intersticial_layer_effect: "sepia" | "invert" | "blur" | "solid";
    intersticial_layer_effect_power: number;

    //Themes
    themes_available: Array<string>

    //Responsive
    devices_config: DevicesConfig,

    //Menu
    menu: Menu,

    //Login
    login_config: LoginConfig,
}



