import React from "react"
import { Menu } from "../interfaces"
import { MenuItemProps } from "./commons_interfaces"

export const useMenuConstructor = () => {

    const iterateMenu = (menu: Menu, Tag: (props: MenuItemProps) => JSX.Element) => {
        return menu.menus.map((submenu, index) => {
            return <Tag key={"menu_" + index} menu_item={submenu} />
        })
    }

    return {
        iterateMenu
    }
}