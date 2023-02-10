import React from 'react'
import { useLoginInput } from '../../../../hooks/useLoginInput'
import { CInput } from '../../../../../comcomponents/CInput/CInput'

interface SinpueInputProps {
    icon?: string,
    placeholder?: string,
    data: string,
    target: string,
    crypt?: boolean,
    className?: string,
    transparent?: boolean,
    error?: string
    disabled?: boolean
}

export const LoginInput = (props: SinpueInputProps) => {
    const [data, setData] = useLoginInput(props.data, props.target);
    console.log(data)

    let type = "text"
    if (props.crypt) {
        type = 'password'
    }

    return <CInput
        className={"login_input" + props.className}
        icon={props.icon}
        label={props.placeholder}
        value={data}
        onChangeVal={value => setData(value)}
        errortext={props.error}
        enable={props.disabled}
        type={type}
    />
}