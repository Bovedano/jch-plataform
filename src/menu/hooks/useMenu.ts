
import { usePlataformContext } from "../../plataform/context/usePlataformContext";
//import { useMenuContext } from "../context/useMenuContext";
import { Menu } from "../interfaces";

export const useMenu = (_id: string) => {

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