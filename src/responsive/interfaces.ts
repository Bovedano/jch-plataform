export interface Devices {
    watch?: boolean,
    mobile?: boolean,
    tablet?: boolean,
    desktop?: boolean,
    tv?: boolean,
    all?: boolean,
}

export interface DeviceConfig {
    name: string,
    maxSize: number
}

export interface DevicesConfig {
    devices: Array<DeviceConfig>
}