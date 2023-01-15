import React from "react";
import { DivisorLayout } from "../DivisorLayout/DivisorLayout";

type LayoutComponent = JSX.Element | JSX.Element[] | undefined
type Size = number | undefined

interface PageLayoutProps {
    article: LayoutComponent,

    header?: LayoutComponent,
    navbar?: LayoutComponent,
    left_aside?: LayoutComponent,
    rigth_aside?: LayoutComponent,
    footer?: LayoutComponent,

    header_size?: Size,
    navbar_size?: Size,
    left_aside_size?: Size,
    rigth_aside_size?: Size,
    footer_size?: Size,

    forceColors?: boolean,
    responsive?: boolean
}

interface Sizes {
    header: Size,
    navbar: Size,
    left_aside: Size,
    rigth_aside: Size,
    footer: Size,
    article?: Size,
}

const defaultSizes: Sizes = {
    header: 80,
    navbar: 30,
    left_aside: 150,
    rigth_aside: 50,
    footer: 50,
}

const forcedColors = {
    article: "White",
    header: "Red",
    navbar: "Purple",
    left_aside: "Green",
    rigth_aside: "Blue",
    footer: "Yellow",
}

export const PageLayout = (props: PageLayoutProps) => {

    const sizes = {
        header: getSize(props.header, props.header_size, defaultSizes.header),
        navbar: getSize(props.navbar, props.navbar_size, defaultSizes.navbar),
        left_aside: getSize(props.left_aside, props.left_aside_size, defaultSizes.left_aside),
        rigth_aside: getSize(props.rigth_aside, props.rigth_aside_size, defaultSizes.rigth_aside),
        footer: getSize(props.footer, props.footer_size, defaultSizes.footer)
    }

    console.log("sizes", sizes)
    console.log("forcedColors", forcedColors)

    if (props.responsive) {
        return <DivisorLayout position="top" size={sizes.header} color1={props.forceColors ? forcedColors.header : undefined}>
            <>{props.header}</>
            <DivisorLayout position="bottom" size={sizes.footer} color2={props.forceColors ? forcedColors.footer : undefined}>
                <DivisorLayout position="top" size={sizes.navbar} color1={props.forceColors ? forcedColors.navbar : undefined}>
                    <>{props.navbar}</>
                    <DivisorLayout position="top" size={sizes.left_aside} color1={props.forceColors ? forcedColors.left_aside : undefined}>
                        <>{props.left_aside}</>
                        <DivisorLayout position="bottom" size={sizes.rigth_aside} color2={props.forceColors ? forcedColors.rigth_aside : undefined}>
                            <>{props.article}</>
                            <>{props.rigth_aside}</>
                        </DivisorLayout>
                    </DivisorLayout>
                </DivisorLayout>
                <>{props.footer}</>
            </DivisorLayout>
        </DivisorLayout>
    }

    return <DivisorLayout position="top" size={sizes.header} color1={props.forceColors ? forcedColors.header : undefined}>
        <>{props.header}</>
        <DivisorLayout position="bottom" size={sizes.footer} color2={props.forceColors ? forcedColors.footer : undefined}>
            <DivisorLayout position="top" size={sizes.navbar} color1={props.forceColors ? forcedColors.navbar : undefined}>
                <>{props.navbar}</>
                <DivisorLayout position="left" size={sizes.left_aside} color1={props.forceColors ? forcedColors.left_aside : undefined}>
                    <>{props.left_aside}</>
                    <DivisorLayout position="right" size={sizes.rigth_aside} color2={props.forceColors ? forcedColors.rigth_aside : undefined}>
                        <>{props.article}</>
                        <>{props.rigth_aside}</>
                    </DivisorLayout>
                </DivisorLayout>
            </DivisorLayout>
            <>{props.footer}</>
        </DivisorLayout>
    </DivisorLayout>
}


/*
const getHeigthSizes = () => {
    const sizes: Sizes = {
        header: undefined,
        navbar: undefined,
        left_aside: undefined,
        rigth_aside: undefined,
        footer: undefined
    }

    return sizes
}

const getWidthSizes = () => {
    const sizes: Sizes = {
        header: undefined,
        navbar: undefined,
        left_aside: undefined,
        rigth_aside: undefined,
        footer: undefined
    }

    return sizes
}
*/

const getSize = (asociatedComponent: LayoutComponent, propSize: Size, defaultSize: Size) => {
    if (!asociatedComponent) {
        return 0;
    }
    if (typeof propSize === "undefined") {
        return sizeToZero(defaultSize);
    }
    return sizeToZero(propSize);
}

const sizeToZero = (size: Size) => {
    if (typeof size === "undefined") {
        return 0;
    }
    return size;
}