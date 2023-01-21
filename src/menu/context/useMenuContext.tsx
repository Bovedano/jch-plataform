import React, { useContext, useState } from "react";
//import { ProcessedMenu } from "../interfaces";

interface MenuContext {
    selected: string[],
    setSelected: (value: string[]) => void
}

interface MenuContextProps {
    children: JSX.Element | JSX.Element[]
}


const ctx = React.createContext<MenuContext | null>(null);

export const MenuContextProvider = (props: MenuContextProps) => {

    const [selected, setSelected] = useState<string[]>([]);
    //const [processedMenu, setProcessedMenu] = useState<ProcessedMenu>();

    const value: MenuContext = {
        selected: selected,
        setSelected
    }

    return <ctx.Provider value={value} {...props} />
}

export const useMenuContext = () => {
    const contexto = useContext(ctx)
    if (!contexto) {
        throw "Para utilizar useMenuContext el componente debe estar anidado en el proveedor MenuContextProvider"
    }
    return contexto
}
