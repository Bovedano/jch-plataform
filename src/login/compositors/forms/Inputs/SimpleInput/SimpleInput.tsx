import React from 'react'
import { Input } from 'semantic-ui-react'
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

    let type = "text"
    if (props.crypt) {
        type = 'password'
    }

    return <Input
        className={props.className}
        icon={props.icon}
        iconPosition='left'
        placeholder={props.placeholder}
        value={data}
        onChange={e => setData(e.target.value)}
        transparent={props.transparent}
        error={props.error}
        disabled={props.disabled}
        type={type}
    />
}