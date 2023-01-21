import React from "react";
import { MenuItemProps } from "../../commons_interfaces";

export const ImpSubMenuItem = (props: MenuItemProps) => {
    return <div className="">
        {props.menu_item.name}
    </div>
}