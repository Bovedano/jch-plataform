import React, { useCallback, useEffect, useState } from "react";
const _devicesConfig  = require("../config/_devicesConfig.json")


interface HookReturn {
    device : string | undefined
}

interface DeviceInfo {
    name : string,
    maxSize : number
}

interface DevicesInfo {
    devices : Array<DeviceInfo>
}

const devicesConfig = _devicesConfig as DevicesInfo;

export const useDeviceIDentifier = () => {
    const [device, setDevice] = useState<string |undefined>();

    const handleResize = useCallback(() => {
        
        const device = calculateDevice(window.innerWidth);
        console.log('resized to: ', window.innerWidth, 'px  Device: ', device.name)
        setDevice(device.name)
    },[],);


    const compareDevices = (d1 : DeviceInfo, d2 : DeviceInfo) => {
        return d1.maxSize -  d2.maxSize;
      }

    const calculateDevice = (width : number) => {
        console.log("Devices")
        
        //Se ordenan los dispositivos
        const devicesordered = devicesConfig.devices.sort(compareDevices)
        
        //Se coloca por defecto el dispositivo mas general
        let deviceSelected = devicesordered[0];

        for(let i = 0; i < devicesordered.length; i++){
            if(width > devicesordered[i].maxSize){
                deviceSelected =  devicesordered[i];
            }
        }
        console.log(devicesordered)
        return deviceSelected    
    }
    

    useEffect( () => {
        handleResize();
    }, [])
   
    useEffect( () => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])
   
    const value: HookReturn = {
        device : device
    }

    return value
}
