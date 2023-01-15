export interface Menu {
    id: any
    name: string
    url: any
    menus: MenuItem[]
}

export interface MenuItem {
    id: string
    name: string
    url: string
    menus: MenuItem[]
}