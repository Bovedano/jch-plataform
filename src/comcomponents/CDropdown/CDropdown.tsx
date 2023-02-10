import React from "react"
import { Dropdown, DropdownProps } from 'semantic-ui-react'
import { StyledComponent, StyledProps } from "../../styles/components/StyledComponent/StyledComponent";

export interface CDropdownProps extends DropdownProps, StyledProps {
    styled?: boolean
}



export const CDropdown = (props: CDropdownProps) => {

    const { contrast, error, styled, ...rest } = props;

    return <StyledComponent id="dropdown" {...props}>
        <Dropdown
            {...rest}
        />
    </StyledComponent>


}
