
import { LoginConfig } from "../../login/interfaces";
import { Menu } from "../../menu/interfaces";
import { DevicesConfig } from "../../responsive/interfaces";

export interface AppConfig {
    name: string,
}

export interface JCHPlataformConfig {
    devices_config?: () => DevicesConfig,
    menu?: () => Menu,
    login_config?: () => LoginConfig,
    app_config?: () => AppConfig
}