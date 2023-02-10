import React from "react"
import { themedProcessErrorContrast } from "../../utils/classNameUtils"

export interface StyledProps {
    className?: string,
    error?: boolean,
    contrast?: boolean,
}

interface ClassNameChildren extends JSX.Element {
    className?: string
}

interface StyledComponentProps extends StyledProps {
    id: string,
    children: ClassNameChildren,
}

const checkBoolean = (defVal: boolean, value?: boolean) => {
    if (typeof value === "undefined") {
        return defVal;
    }
    return value;
}

const checkString = (defVal: string, value?: string) => {
    if (typeof value === "undefined") {
        return defVal;
    }
    return value;
}

export const StyledComponent = (props: StyledComponentProps) => {
    const customClass: string = "styled_" + checkString("", props.id) + " ";
    const className: string = checkString("", props.children.props.className);
    const error: boolean = checkBoolean(false, props.error);
    const contrast: boolean = checkBoolean(false, props.contrast);
    const finalClassName = themedProcessErrorContrast(customClass, className, error, contrast)

    return <props.children.type {...props.children.props} className={finalClassName} />
}