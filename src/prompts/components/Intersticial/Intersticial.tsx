import React from "react"
import { CenterLayout } from "../../../layouts/components/CenterLayout/CenterLayout"
import { StyledComponent, StyledProps } from "../../../styles/components/StyledComponent/StyledComponent";
import { useConfig } from "../../../plataform/hooks/useConfig";

export interface LayerOptions {
    effect?: "sepia" | "invert" | "blur" | "solid",
    power?: number,
    opacity?: number
}


interface IntersticialProps extends StyledProps {
    id: string,
    active?: boolean,
    children?: JSX.Element | JSX.Element[],

    offsetTop?: number,
    offsetBottom?: number,
    offsetRight?: number,
    offsetLeft?: number,
    fullOffset?: boolean,

    onLayerClick?: () => void;

    layerOptions?: LayerOptions
}

export const Intersticial = (props: IntersticialProps) => {
    const config = useConfig();

    const offsetTop = props.offsetTop || "350px";
    const offsetBottom = props.offsetBottom || "0px";
    const offsetRight = props.offsetRight || "0px";
    const offsetLeft = props.offsetLeft || "0px";


    const options = {
        effect: (props.layerOptions && props.layerOptions.effect) ? props.layerOptions.effect : config.intersticial_layer_effect,
        power: (props.layerOptions && props.layerOptions.power) ? props.layerOptions.power : config.intersticial_layer_effect_power,
        opacity: (props.layerOptions && props.layerOptions.opacity) ? props.layerOptions.opacity : config.intersticial_layer_opacity
    }

    const style_background: React.CSSProperties = {
        position: "fixed",
        top: offsetTop,
        bottom: offsetBottom,
        left: offsetLeft,
        right: offsetRight,
        opacity: options.opacity + "%",
        zIndex: "100",

    }
    const style_container: React.CSSProperties = {
        position: "fixed",
        top: offsetTop,
        bottom: offsetBottom,
        left: offsetLeft,
        right: offsetRight,
        opacity: "100%",
        zIndex: "101",
        backdropFilter: getBackdropFilter(options)
    }

    if (typeof props.active !== "undefined" && !props.active) {
        return <></>
    }

    return <div className={props.className}>
        <StyledComponent id="base" ><div className="intersticial_background" style={style_background}></div></StyledComponent>
        <div className="intersticial_front" style={style_container} onClick={props.onLayerClick}>
            <CenterLayout>{props.children}
            </CenterLayout>
        </div>
    </div>
}

const getBackdropFilter = (otpions: LayerOptions) => {
    switch (otpions.effect) {
        case "blur":
            return `blur(${otpions.power}px)`
        case "sepia":
            return `sepia(${otpions.power}%)`
        case "invert":
            return `invert(${otpions.power}px)`
        default:
            return "";
    }
}

Intersticial.defaultProps = {
    children: <></>
}