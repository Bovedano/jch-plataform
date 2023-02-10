import React from "react"
import { ThemeComponent } from "../../../styles/components/ThemeComponent/ThemeComponent"

interface IntersticialBoxProps {
    children?: JSX.Element | JSX.Element[],
    active?: boolean
}

export const IntersticialBox = (props: IntersticialBoxProps) => {
    if (!props.active) {
        return <>{props.children}</>
    }
    return <ThemeComponent id="prompt-box">
        <div>{props.children}</div>
    </ThemeComponent>
}

IntersticialBox.defaultProps = {
    children: <>IntersticialBox</>
}