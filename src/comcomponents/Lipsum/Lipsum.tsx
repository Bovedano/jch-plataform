import React from "react";
import { CText } from "../CText/CText";


interface LipsumProps {
    lines?: number,
    mode?: number
}

const base = [
    () => "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
]

export const Lipsum = (props: LipsumProps) => {
    //Si no se indica las lineas se coloca una linea
    const lines = props.lines ? props.lines : 1;
    //Si no existe el modo o el modo se sale del rango se coloca 0 por defecto
    const mode = !props.mode || props.mode >= base.length ? 0 : props.mode;

    const result = [];
    for (let i = 0; i < lines; i++) {
        result.push(base[mode]());
    }

    return <CText text={result.join(" ")} />
}