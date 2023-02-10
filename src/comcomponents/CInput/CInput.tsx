import React from "react"
import { Input, InputOnChangeData, InputProps } from 'semantic-ui-react'
import { StyledComponent, StyledProps } from "../../styles/components/StyledComponent/StyledComponent";

export interface CInputProps extends InputProps, StyledProps {
    onChangeVal?: (value: string) => void,
    textError?: string,
    styled?: boolean
}



export const CInput = (props: CInputProps) => {

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => {
        props.onChangeVal && props.onChangeVal(e.currentTarget.value)
        props.onChange && props.onChange(e, data)
    }

    const { contrast, error, styled, textError, ...rest } = props;

    return <>
        <StyledComponent id="input" {...props}>
            <Input
                {...rest}
                onChange={onChangeHandler}
            />
        </StyledComponent>
        <StyledComponent id="input_error" {...props}>
            <div>{props.textError ? props.textError : ""}</div>
        </StyledComponent>
    </>

}
