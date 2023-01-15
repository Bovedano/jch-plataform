import React from "react";
import { Devices, DevicesInfo } from "../../interfaces";
import { useDeviceCondition } from "../../hooks/useDeviceCondition";


interface Props extends Devices {
    devicesInfo?: DevicesInfo,
    children: JSX.Element
}

export const ResponsiveComponent = (props: Props) => {

    const visible = useDeviceCondition({
        devicesInfo: props.devicesInfo,
        watch: props.watch,
        mobile: props.mobile,
        tablet: props.tablet,
        desktop: props.desktop,
        tv: props.tv,
        all: props.all,
    })

    if (!visible) {
        return <></>
    }
    return <>{props.children}</>
}