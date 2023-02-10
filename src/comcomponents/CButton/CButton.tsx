import React from "react"
import { Button, ButtonProps } from 'semantic-ui-react'
import { StyledComponent, StyledProps } from "../../styles/components/StyledComponent/StyledComponent";

export interface CButtonProps extends ButtonProps, StyledProps {
    styled?: boolean
}



export const CButton = (props: CButtonProps) => {

    const { contrast, error, styled, ...rest } = props;

    return <StyledComponent id="button" {...props}>
        <Button
            {...rest}
        />
    </StyledComponent>


}
