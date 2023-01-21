import React from 'react'


interface CenteredFormLayoutProps {
    children: JSX.Element | JSX.Element[],
    width?: number
}

export const CenteredFormLayout = (props: CenteredFormLayoutProps) => {

    const style_external_container: React.CSSProperties = {
        display: "flex",
        height: "100%",
        width: "100%",
        justifyContent: "center"
    }

    const style_internal_container: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        width: "10px"
    }

    if (props.width) {
        style_internal_container.width = props.width + "px"
    }

    return (
        <div style={style_external_container}>
            <div style={style_internal_container} >
                {props.children}
            </div>
        </div>
    )
}