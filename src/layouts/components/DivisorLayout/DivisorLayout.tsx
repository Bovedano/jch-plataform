import React from "react";

interface Props {
    position: string,
    border?: number,
    color1?: string,
    color2?: string,
    size: number,
    children: [JSX.Element, JSX.Element]
}

interface Styles {
    container_style: object,
    element1_style: object,
    element2_style: object,
}

export const DivisorLayout = (props: Props) => {

    let style: Styles = {
        container_style: {},
        element1_style: {},
        element2_style: {},
    };

    if (props.position == "left") {
        style = getStyleLeftSpace(props);
    }

    if (props.position == "right") {
        style = getStyleRightSpace(props);
    }

    if (props.position == "top") {
        style = getStyleTopSpace(props);
    }

    if (props.position == "bottom") {
        style = getStyleBottomSpace(props);
    }

    return (
        <>
            <div className="divisor_layout_container" style={style.container_style}>
                <div className="divisor_layout_container_element1" style={style.element1_style}>{props.children[0]}</div>
                <div className="divisor_layout_container_element2" style={style.element2_style}>{props.children[1]}</div>
            </div>
        </>
    );
}


const getStyleLeftSpace = (props: Props) => {
    const styles: Styles = {
        container_style: {
            height: "100%",
            width: "100%",
            display: "flex"
        },
        element1_style: {
            height: "100%",
            background: props.color1,
            width: props.size + "px",
            overflow: "auto"
        },
        element2_style: {
            height: "100%",
            background: props.color2,
            width: "calc(100% - " + props.size + "px)",
            overflow: "auto"
        },
    }

    return styles;
}

const getStyleRightSpace = (props: Props) => {
    const styles: Styles = {
        container_style: {
            height: "100%",
            width: "100%",
            display: "flex"
        },
        element1_style: {
            height: "100%",
            background: props.color1,
            width: "calc(100% - " + props.size + "px)",
            overflow: "auto"

        },
        element2_style: {
            height: "100%",
            background: props.color2,
            width: props.size + "px",
            overflow: "auto"
        },
    }
    return styles;
}

const getStyleTopSpace = (props: Props) => {
    const styles: Styles = {
        container_style: {
            height: "100%",
            width: "100%",
            display: "flex",
            flexFlow: "column"
        },
        element1_style: {
            width: "100%",
            background: props.color1,
            height: props.size + "px",
            overflow: "auto"
        },
        element2_style: {
            width: "100%",
            background: props.color2,
            height: "calc(100% - " + props.size + "px)",
            overflow: "auto"
        },
    }
    return styles;
}

const getStyleBottomSpace = (props: Props) => {
    const styles: Styles = {
        container_style: {
            height: "100%",
            width: "100%",
            display: "flex",
            flexFlow: "column"
        },
        element1_style: {
            width: "100%",
            background: props.color1,
            height: "calc(100% - " + props.size + "px)",
            overflow: "auto"
        },
        element2_style: {
            width: "100%",
            background: props.color2,
            height: props.size + "px",
            overflow: "auto"
        },
    }
    return styles;
}