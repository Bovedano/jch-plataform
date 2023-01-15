import { Button, SemanticCOLORS } from 'semantic-ui-react'
import { useLogin } from '../../../../../../hooks/useLogin';



interface SimpleButtonProps {
    label: string,
    form: string,
    color?: SemanticCOLORS
}

export const SimpleButton = (props: SimpleButtonProps) => {
    const { submitForm } = useLogin();


    return <Button
        content={props.label}
        color={props.color || "blue"}
        onClick={() => submitForm(props.form)} />
}