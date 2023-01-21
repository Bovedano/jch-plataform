import React from 'react'
import { useLogin } from '../../../../hooks/useLogin';


interface SimpleButtonProps {
    label: string,
    form: string,
    color?: string
}

export const SimpleButton = (props: SimpleButtonProps) => {
    const { submitForm } = useLogin();


    return <input
        type="text"
        color={props.color || "blue"}
        onClick={() => submitForm(props.form)} />
}