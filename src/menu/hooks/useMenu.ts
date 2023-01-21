
import { usePlataformContext } from "../../plataform/JCHPlataform/usePlataformContext";
//import { useMenuContext } from "../context/useMenuContext";
import { Menu } from "../interfaces";

export const useMenu = (id: string) => {
    console.log(id)

    //const {selected} = useMenuContext();
    const config = usePlataformContext();

    const menu: Menu = config.menu;
    /*
    const isActive = (id: string) => {
        if (!id) {
            return false;
        }

        if(selected == id){

        }

        return false;
    }
    */
    return { menu };
}