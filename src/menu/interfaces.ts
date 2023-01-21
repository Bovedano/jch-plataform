export interface Menu {
    menus: MenuItem[]
}

export interface MenuItem {
    id: string
    text_code: string
    menus: MenuItem[]
    icon?: string,
    color?: string,
}

export interface ProcessedMenu {
    id: string
    menus: ProcessedMenuItem[]
}

export interface ProcessedMenuItem {
    text: string,
    selected: boolean
    actions: MenuAction[]
}

export interface MenuAction {
    id_action: string
    action_params: Map<string, string>
}