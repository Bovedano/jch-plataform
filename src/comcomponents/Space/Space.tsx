import React from "react"

interface SpacerProps {
    horizantal?: boolean
    size: number
}

export const Space = (props: SpacerProps) => {

    const getHorizantalStyle = () => {
        return {
            width: props.size + "px",
            height: "100%"
        }
    }

    const getVerticalStyle = () => {
        return {
            width: "100%",
            height: props.size + "px"
        }
    }

    const getStyle = () => {
        if (props.horizantal) {
            return getHorizantalStyle();
        }
        return getVerticalStyle();
    }

    return <div className="spacer" style={getStyle()}></div>
}

