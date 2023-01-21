import React from "react";
import { MenuItemProps } from "../../commons_interfaces";
import { useMenuConstructor } from "../../useMenuConstructor";


export const ImpMenuItem = (props: MenuItemProps) => {
    const { iterateMenu } = useMenuConstructor();

    return <div className="">
        {props.menu_item.text_code}
        {iterateMenu(props.menu_item, ImpMenuItem)}
    </div>
}