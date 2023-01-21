import React from 'react'
import { useLoginInput } from '../../../../hooks/useLoginInput'

interface SinpueInputProps {
    icon?: string,
    placeholder?: string,
    data: string,
    form: string,
    crypt?: boolean,
    className?: string,
    transparent?: boolean,
    error?: boolean
    disabled?: boolean
}

export const SimpleInput = (props: SinpueInputProps) => {
    const [data, setData] = useLoginInput(props.data, props.form);
    console.log(data)

    let type = "text"
    if (props.crypt) {
        type = 'password'
    }


    /*
    return <input
        className={props.className}
        icon={props.icon}
        iconPosition='left'
        placeholder={props.placeholder}
        value={data}
        onChange={e => setData(e.target.value)}
        transparent={props.transparent}
        error={props.error}
        disabled={props.disabled}
        type={"text"}
    />
    */
    return <input
        onChange={e => setData(e.target.value)}
        type={type}
    />
}