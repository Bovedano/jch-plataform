"use strict";

import { useCallback, useEffect, useState } from "react";
import { DeviceConfig, DevicesConfig } from "../interfaces";
import { usePlataformContext } from "../../plataform/context/usePlataformContext";
import { JCHPlataformContext } from "../../plataform/JCHPlataform/interfaces";



interface HookReturn {
    device: string | undefined
}


export const useDeviceIDentifier = (devicesInfo?: DevicesConfig | undefined) => {
    const [device, setDevice] = useState<string | undefined>();
    const config: JCHPlataformContext = usePlataformContext();

    let devicesConfig: DevicesConfig = config.devices_config;

    if (devicesInfo) {
        devicesConfig = devicesInfo
    }

    const handleResize = useCallback(() => {

        const device = calculateDevice(window.innerWidth);
        setDevice(device.name)
    }, [],);


    const compareDevices = (d1: DeviceConfig, d2: DeviceConfig) => {
        return d1.maxSize - d2.maxSize;
    }

    const calculateDevice = (width: number) => {

        //Se ordenan los dispositivos
        const devicesordered = devicesConfig.devices.sort(compareDevices)

        //Se coloca por defecto el dispositivo mas general
        let deviceSelected = devicesordered[0];

        for (let i = 0; i < devicesordered.length; i++) {
            if (width > devicesordered[i].maxSize) {
                deviceSelected = devicesordered[i];
            }
        }
        return deviceSelected
    }


    useEffect(() => {
        handleResize();
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    const value: HookReturn = {
        device: device
    }

    return value
}

