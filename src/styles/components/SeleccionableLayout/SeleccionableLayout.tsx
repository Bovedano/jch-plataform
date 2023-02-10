import React from "react"
import { CSSTupla, useSeleccionableStyle } from "../../hooks/useSeleccionableStyle"
import { useMergeCSS } from "../../hooks/useMergeCSS"

interface SeleccionableLayoutProps {
    comcss?: React.CSSProperties,
    css: CSSTupla,
    children: JSX.Element
}

export const SeleccionableLayout = (props: SeleccionableLayoutProps) => {
    const { style: hoverStyle, on, off } = useSeleccionableStyle(props.css)
    const style = useMergeCSS([props.comcss, hoverStyle])

    return <div onMouseEnter={on} onMouseLeave={off}><props.children.type
        style={style}
        {...props.children.props}
    /></div>
}

SeleccionableLayout.defaultProps = {
    children: <></>
}