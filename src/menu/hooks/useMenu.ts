
import { usePlataformContext } from "../../plataform/JCHPlataform/usePlataformContext";
import { Menu } from "../interfaces";

export const useMenu = () => {
    const config = usePlataformContext();

    const menu: Menu = config.menu;

    return menu;
}