import React from "react"
import { useMenu } from "../../../hooks/useMenu"
import { ImpMenuItem } from "../ImpMenuItem/ImpMenuItem";
import { useMenuConstructor } from "../../useMenuConstructor";
import { MenuProps } from "../../commons_interfaces";


export const SideMenuElegant2 = (props: MenuProps) => {
    const { menu } = useMenu(props.id);

    const { iterateMenu } = useMenuConstructor();

    return <div className="">
        {iterateMenu(menu, ImpMenuItem)}
    </div>
}