import React from 'react'
import { useLoginInput } from '../../../../hooks/useLoginInput';

interface SimpleCheckBoxProps {
    label: string,
    data: string,
    form: string,
}

export const SimpleCheckBox = (props: SimpleCheckBoxProps) => {
    const [data, setData] = useLoginInput(props.data, props.form, "N");
    console.log(data)
    console.log(setData)

    /*
    const handleChange = (e: any, params: any) => {
        setData(params.checked ? "S" : "N");
    }

    return <Checkbox checked={data === "S"} onChange={handleChange} label={props.label} />
    */
    return <div >Checkbox</div>
}