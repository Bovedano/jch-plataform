import { useState } from "react"


export type CSSTupla = [React.CSSProperties, React.CSSProperties]

export const useSeleccionableStyle = (css: CSSTupla, init: boolean = false) => {
    const [active, setActive] = useState<boolean>(init);

    const on = () => {
        setActive(true)
    }

    const off = () => {
        setActive(false)
    }

    const style: React.CSSProperties = active ? css[0] : css[1];

    return {
        on,
        off,
        style
    }
}