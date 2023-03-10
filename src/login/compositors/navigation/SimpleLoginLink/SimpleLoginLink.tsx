import React from 'react'

import { LoginDirection } from "../../../interfaces";
import { useLogin } from '../../../hooks/useLogin';

interface SimpleLoginLinkProps {
    label: string,
    direction: LoginDirection,
    color?: string,
}
export const SimpleLoginLink = (props: SimpleLoginLinkProps) => {

    const { setLoginDirection } = useLogin();

    const style = {
        color: props.color,
        cursor: "pointer",
        textDecoration: "underline"
    }

    const onClickHandler = () => {
        setLoginDirection(props.direction)
    }

    return <div style={style} onClick={onClickHandler}>{props.label}</div>
}