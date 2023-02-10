import React from "react"
import { themedProcessErrorContrast } from "../../utils/classNameUtils"
import { StyledProps } from "../StyledComponent/StyledComponent"


interface ThemeComponentProps extends StyledProps {
    id: string,
    children: JSX.Element,
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

export const ThemeComponent = (props: ThemeComponentProps) => {
    //const customClass: string = checkString("", props.id) + " ";
    const className: string = checkString("", props.className);
    const error: boolean = checkBoolean(false, props.error);
    const contrast: boolean = checkBoolean(false, props.contrast);
    const finalClassName = themedProcessErrorContrast("", className, error, contrast, props.id)

    return <props.children.type className={finalClassName} {...props.children.props} />
}