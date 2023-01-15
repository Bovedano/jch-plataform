import { Devices, DevicesInfo } from "../interfaces";
import { useDeviceIDentifier } from "./useDeviceIdentifier";

interface ResponsiveConditionPropsProps extends Devices {
    devicesInfo?: DevicesInfo
}

export const useDeviceCondition = (props: ResponsiveConditionPropsProps) => {
    const { device } = useDeviceIDentifier(props.devicesInfo);

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

    return isVisible();
}