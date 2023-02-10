import React from "react"
import { ConditionalsCSS, useMergeCSS } from "../../../styles/hooks/useMergeCSS"


interface CenterLayoutProps {
    style?: React.CSSProperties,
    backgroundColor?: string,
    notVertical?: boolean,
    notHorizontal?: boolean,
    children?: JSX.Element | JSX.Element[],
    height?: number,
    width?: number,
}

export const CenterLayout = (props: CenterLayoutProps) => {


    const defaultStyle: React.CSSProperties = {
        display: "flex",
        height: "100%",
        width: "100%",
    }

    const conditionalStyles: ConditionalsCSS = [
        //[!!props.changeDirection, { flexDirection: "column" }, { flexDirection: "row" }],
        [!!props.backgroundColor, { backgroundColor: props.backgroundColor }],
        [!!props.height, { height: props.height + "px" }],
        [!!props.width, { width: props.width + "px" }],
        [!!!props.notHorizontal, { justifyContent: "center" }],
        [!!!props.notVertical, { alignItems: "center" }]
    ]



    const style = useMergeCSS([
        defaultStyle,
        conditionalStyles,
        props.style
    ]);

    return <div className="jch-centerlayout" style={style}>{props.children}</div>
}

CenterLayout.defaultProps = {
    children: <>CenterLayout</>,
    vertical: true,
    horizontal: true
}