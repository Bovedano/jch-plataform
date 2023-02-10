import React, { useContext, useState } from "react";
import { usePlataformContext } from "../../plataform/context/usePlataformContext";

interface ThemeContext {
    theme: string,
    setTheme: (value: string) => void,
    themeList: Array<string>,
    addThemeClass: (className?: string, id?: string) => string
}

interface ThemeContextProps {
    children: JSX.Element | JSX.Element[]
}

const ctx = React.createContext<ThemeContext | null>(null);

export const ThemeContextProvider = (props: ThemeContextProps) => {

    const config = usePlataformContext();
    const [theme, setTheme] = useState<string>("dark");

    //Add default theme if not exists
    const themeList: Array<string> = config.themes_available;
    if (!themeList.includes("default")) {
        themeList.push("default")
    }

    const addThemeClass = (className?: string, id?: string) => {
        let newClass = theme;
        if (id) {
            newClass = newClass + "-" + id;
        }
        if (className) {
            newClass = className + " " + newClass
        }
        newClass = newClass + " theme_" + theme
        if (id) {
            newClass = newClass + " theme_styled_" + id
        }
        return newClass;
    }


    const value: ThemeContext = {
        theme,
        setTheme,
        themeList,
        addThemeClass
    }

    return <ctx.Provider value={value} {...props} />
}

export const useTheme = () => {
    const contexto = useContext(ctx)
    if (!contexto) {
        throw "Para utilizar useThemeContext el componente debe estar anidado en el proveedor ThemeContextProvider"
    }
    return contexto
}
