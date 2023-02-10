import React from "react"
import { themedProcessErrorContrast } from "../../styles/utils/classNameUtils"

interface CTextProps {
    id?: string,
    onHover?: (id?: string, text?: string) => void
    onClick?: (id?: string, text?: string) => void
    text?: string,
    contrast?: boolean,
    className?: string,
    type?: string,
}

export const CText = (props: CTextProps) => {
    const type = props.type || "default";
    const styledClass = "styled_text styled_text-" + type;

    const finalClassName = themedProcessErrorContrast(styledClass, props.className, false, props.contrast)

    return <div className={finalClassName}>{props.text}</div>
}
