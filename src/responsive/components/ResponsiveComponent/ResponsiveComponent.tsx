import React from "react";
import { useDeviceIDentifier } from "../../hooks/useDeviceIdentifier";


interface Props {
    watch?: boolean,
    mobile?: boolean,
    tablet?: boolean,
    desktop?: boolean,
    tv?: boolean,
    all?: boolean,
    children: JSX.Element
}

export const ResponsiveComponent = (props: Props) => {
    const { device } = useDeviceIDentifier({});

    const isVisible = () => {
        if (props.all) {
            return true;
        }
        if (device === "WATCH" && props.watch) {
            return true;
        }
        if (device === "MOBILE" && props.mobile) {
            return true;
        }
        if (device === "TABLET" && props.tablet) {
            return true;
        }
        if (device === "DESKTOP" && props.desktop) {
            return true;
        }
        if (device === "TV" && props.tv) {
            return true;
        }
        return false;
    }

    if (!isVisible()) {
        return <></>
    }
    return <>{props.children}</>
}